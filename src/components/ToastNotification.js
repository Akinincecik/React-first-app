import React from 'react';

function ToastNotification({ message, show, setShow, type }) {
  const getToastClass = () => {
    switch (type) {
      case 'success':
        return 'bg-success'; // Yeşil
      case 'error':
        return 'bg-danger'; // Kırmızı
      case 'info':
        return 'bg-info'; // Mavi
      case 'warning':
        return 'bg-warning'; // Sarı
      default:
        return 'bg-primary'; // Varsayılan mavi
    }
  };

  return (
    <div
      className={`toast align-items-center text-white ${show ? 'show' : ''} ${getToastClass()}`}
      style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '9999' }}
      onAnimationEnd={() => setShow(false)}  // Toast mesajı kaybolduğunda görünürlüğünü kapatır
    >
      <div className="d-flex">
        <div className="toast-body">
          {message}
        </div>
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => setShow(false)}  // Kullanıcı manuel olarak kapatabilir
        ></button>
      </div>
    </div>
  );
}

export default ToastNotification;
