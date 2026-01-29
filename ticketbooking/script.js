
    document.getElementById('flightForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const flightData = {
        flightNumber: document.getElementById('flightNumber').value,
        flightDate: document.getElementById('flightDate').value,
        destination: document.getElementById('destination').value,
        email: document.getElementById('email').value
      };

      const res = await fetch('http://localhost:3000/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flightData)
      });

      const result = await res.json();
      alert(result.message);
    });