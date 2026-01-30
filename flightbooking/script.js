const API_BASE = "http://localhost:3000";
let flightToDelete = null;

// Utility function to show loading state
function showLoading(buttonElement, originalText = 'Loading...') {
  if (buttonElement) {
    buttonElement.disabled = true;
    buttonElement.textContent = originalText;
  }
}

function hideLoading(buttonElement, originalText) {
  if (buttonElement) {
    buttonElement.disabled = false;
    buttonElement.textContent = originalText;
  }
}

// Enhanced notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Load Flights with enhanced error handling
window.loadFlights = async function() {
  const loadButton = document.querySelector('button[onclick="loadFlights()"]');
  showLoading(loadButton, 'Loading...');
  
  try {
    const res = await fetch(`${API_BASE}/flights`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    const table = document.getElementById("flightsTable");
    
    if (!data.flights || data.flights.length === 0) {
      table.innerHTML = `
        <tr>
          <td colspan="6" class="p-4 text-center text-gray-500">No flights available</td>
        </tr>
      `;
      return;
    }
    
    table.innerHTML = "";
    data.flights.forEach(f => {
      const departureDate = new Date(f.departure_time);
      const isExpired = departureDate < new Date();
      const rowClass = isExpired ? 'bg-gray-100 opacity-75' : 'hover:bg-gray-50';
      
      table.innerHTML += `
        <tr class="${rowClass}">
          <td class="p-2 border">${f.id}</td>
          <td class="p-2 border">${f.flight_number}</td>
          <td class="p-2 border">${f.destination}</td>
          <td class="p-2 border">${departureDate.toLocaleString()}</td>
          <td class="p-2 border">
            <span class="${f.seats === 0 ? 'text-red-500 font-bold' : f.seats < 5 ? 'text-orange-500' : 'text-green-500'}">
              ${f.seats}
            </span>
          </td>
          <td class="p-2 border">
            <button onclick="showDeleteModal(${f.id}, '${f.flight_number}')" 
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm ${isExpired ? 'opacity-50' : ''}"
                    ${isExpired ? 'disabled' : ''}>
              Delete
            </button>
          </td>
        </tr>
      `;
    });
    
    showNotification('Flights loaded successfully', 'success');
  } catch (error) {
    console.error('Error loading flights:', error);
    showNotification(`Failed to load flights: ${error.message}`, 'error');
    
    const table = document.getElementById("flightsTable");
    table.innerHTML = `
      <tr>
        <td colspan="6" class="p-4 text-center text-red-500">Error loading flights</td>
      </tr>
    `;
  } finally {
    hideLoading(loadButton, 'Load Flights');
  }
}

// Load Passengers with enhanced features
window.loadPassengers = async function() {
  const loadButton = document.querySelector('button[onclick="loadPassengers()"]');
  showLoading(loadButton, 'Loading...');
  
  try {
    const res = await fetch(`${API_BASE}/passengers`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    const table = document.getElementById("passengersTable");
    
    if (!data.passengers || data.passengers.length === 0) {
      table.innerHTML = `
        <tr>
          <td colspan="3" class="p-4 text-center text-gray-500">No passengers found</td>
        </tr>
      `;
      return;
    }
    
    table.innerHTML = "";
    data.passengers.forEach(p => {
      table.innerHTML += `
        <tr class="hover:bg-gray-50">
          <td class="p-2 border">${p.id}</td>
          <td class="p-2 border">${p.name}</td>
          <td class="p-2 border">
            <a href="mailto:${p.email}" class="text-blue-500 hover:underline">${p.email}</a>
          </td>
        </tr>
      `;
    });
    
    showNotification('Passengers loaded successfully', 'success');
  } catch (error) {
    console.error('Error loading passengers:', error);
    showNotification(`Failed to load passengers: ${error.message}`, 'error');
  } finally {
    hideLoading(loadButton, 'Load Passengers');
  }
}

// Enhanced Delete Modal
window.showDeleteModal = function(flightId, flightNumber) {
  flightToDelete = flightId;
  const modal = document.getElementById("deleteModal");
  const modalText = document.querySelector("#deleteModal p");
  
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  
  modalText.textContent = 
    `Are you sure you want to delete flight ${flightNumber} (ID: ${flightId})? This action cannot be undone.`;
  
  // Focus on cancel button for better UX
  setTimeout(() => {
    document.querySelector('#deleteModal button').focus();
  }, 100);
}

window.closeDeleteModal = function() {
  flightToDelete = null;
  const modal = document.getElementById("deleteModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Enhanced Delete Flight
async function deleteFlight(flightId) {
  const confirmBtn = document.getElementById("confirmDeleteBtn");
  showLoading(confirmBtn, 'Deleting...');
  
  try {
    const res = await fetch(`${API_BASE}/flights/${flightId}`, {
      method: "DELETE"
    });

    const result = await res.json();
    
    if (res.ok) {
      showNotification("Flight deleted successfully!", 'success');
      loadFlights();
    } else {
      showNotification(result.error || "Failed to delete flight", 'error');
    }
  } catch (error) {
    console.error('Delete error:', error);
    showNotification(`Failed to delete flight: ${error.message}`, 'error');
  } finally {
    hideLoading(confirmBtn, 'Delete');
    closeDeleteModal();
  }
}

// Form validation helper
function validateForm(formData) {
  const errors = [];
  
  if (formData.flight_number && formData.flight_number.length < 3) {
    errors.push('Flight number must be at least 3 characters');
  }
  
  if (formData.seats && (formData.seats < 1 || formData.seats > 500)) {
    errors.push('Seats must be between 1 and 500');
  }
  
  if (formData.departure_time) {
    const depTime = new Date(formData.departure_time);
    if (depTime < new Date()) {
      errors.push('Departure time cannot be in the past');
    }
  }
  
  return errors;
}

// Enhanced Add Flight
async function handleAddFlight(e) {
  e.preventDefault();
  const submitBtn = e.target.querySelector('button[type="submit"]');
  showLoading(submitBtn, 'Adding...');
  
  const formData = {
    flight_number: document.getElementById("flight_number").value,
    destination: document.getElementById("destination").value,
    departure_time: document.getElementById("departure_time").value,
    seats: parseInt(document.getElementById("seats").value)
  };
  
  // Validate form
  const errors = validateForm(formData);
  if (errors.length > 0) {
    showNotification(errors.join(', '), 'error');
    hideLoading(submitBtn, 'Add Flight');
    return;
  }
  
  try {
    const res = await fetch(`${API_BASE}/flights`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    
    if (res.ok) {
      showNotification("Flight added successfully!", 'success');
      document.getElementById("addFlightForm").reset();
      loadFlights();
    } else {
      showNotification(result.error || "Failed to add flight", 'error');
    }
  } catch (error) {
    console.error('Add flight error:', error);
    showNotification(`Failed to add flight: ${error.message}`, 'error');
  } finally {
    hideLoading(submitBtn, 'Add Flight');
  }
}

// Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
  // Load initial data
  loadFlights();
  loadPassengers();
  
  // Delete modal events
  document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
    if (flightToDelete) {
      deleteFlight(flightToDelete);
    }
  });

  document.getElementById("deleteModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("deleteModal")) {
      closeDeleteModal();
    }
  });
  
  // Enhanced form handlers
  document.getElementById("addFlightForm").addEventListener("submit", handleAddFlight);
  
  // Update Flight
  document.getElementById("updateFlightForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    showLoading(submitBtn, 'Updating...');
    
    const flight_id = document.getElementById("update_flight_id").value;
    const destination = document.getElementById("update_destination").value;

    try {
      const res = await fetch(`${API_BASE}/flights/${flight_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination })
      });

      const result = await res.json();
      
      if (res.ok) {
        showNotification("Flight updated successfully!", 'success');
        document.getElementById("updateFlightForm").reset();
        loadFlights();
      } else {
        showNotification(result.error || "Failed to update flight", 'error');
      }
    } catch (error) {
      showNotification(`Failed to update flight: ${error.message}`, 'error');
    } finally {
      hideLoading(submitBtn, 'Update Flight');
    }
  });

  // Book Flight
  document.getElementById("bookFlightForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    showLoading(submitBtn, 'Booking...');
    
    const flight_id = document.getElementById("flight_id").value;
    const passenger_id = document.getElementById("passenger_id").value;

    try {
      const res = await fetch(`${API_BASE}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flight_id, passenger_id })
      });

      const result = await res.json();
      
      if (res.ok) {
        showNotification("Flight booked successfully!", 'success');
        document.getElementById("bookFlightForm").reset();
        loadFlights();
      } else {
        showNotification(result.error || "Booking failed", 'error');
      }
    } catch (error) {
      showNotification(`Failed to book flight: ${error.message}`, 'error');
    } finally {
      hideLoading(submitBtn, 'Book Flight');
    }
  });

  // Upload File
  document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    showLoading(submitBtn, 'Uploading...');

    const formData = new FormData();
    const fileInput = document.getElementById("document");
    const nameInput = document.getElementById("name");
    
    // Validate file
    if (!fileInput.files[0]) {
      showNotification("Please select a file to upload", 'error');
      hideLoading(submitBtn, 'Upload');
      return;
    }
    
    // Check file size (5MB limit)
    if (fileInput.files[0].size > 5 * 1024 * 1024) {
      showNotification("File size must be less than 5MB", 'error');
      hideLoading(submitBtn, 'Upload');
      return;
    }
    
    formData.append("name", nameInput.value);
    formData.append("document", fileInput.files[0]);

    try {
      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        body: formData
      });

      const text = await res.text();
      
      if (res.ok) {
        showNotification("File uploaded successfully!", 'success');
        document.getElementById("uploadForm").reset();
      } else {
        showNotification("Upload failed: " + text, 'error');
      }
    } catch (error) {
      showNotification(`Failed to upload file: ${error.message}`, 'error');
    } finally {
      hideLoading(submitBtn, 'Upload');
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape' && !document.getElementById("deleteModal").classList.contains('hidden')) {
      closeDeleteModal();
    }
  });
});