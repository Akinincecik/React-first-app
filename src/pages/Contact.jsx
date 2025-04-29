import React from "react";

const Contact = () => {
    return (
      <div className="container">
        <h1>İletişim</h1>
        <p>Bizimle iletişime geçmek için aşağıdaki formu doldurun.</p>
  
        <form>
          <label>Adınız:</label>
          <input type="text" placeholder="Adınızı girin" />
  
          <label>E-Posta:</label>
          <input type="email" placeholder="E-posta adresinizi girin" />
  
          <label>Mesajınız:</label>
          <textarea placeholder="Mesajınızı yazın"></textarea>
  
          <button type="submit">Gönder</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  