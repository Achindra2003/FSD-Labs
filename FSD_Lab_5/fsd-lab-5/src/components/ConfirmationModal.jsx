import { useEffect } from 'react';

const ConfirmationModal = ({ closeModal }) => {
  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all"
           onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-4">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We've received your message and will get back to you shortly.
        </p>
        <button onClick={closeModal} className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;