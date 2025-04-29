import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastNotification from './components/ToastNotification';  // ToastNotification bileşenini içe aktar

function App() {
  // Blog yazılarını tutan state
  const [blogs, setBlogs] = useState([
    { id: 1, title: "İlk Blog Yazım", content: "Bu benim ilk blog yazım." },
    { id: 2, title: "React Öğreniyorum", content: "React gerçekten çok güçlü bir kütüphane!" },
  ]);

  // Yeni blog ekleme state'leri
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Toast için state'ler
  const [toastMessage, setToastMessage] = useState("");  // Gösterilecek mesaj
  const [showToast, setShowToast] = useState(false);  // Toast'in görünür olması
  const [toastType, setToastType] = useState("success");  // Başlangıçta success

  // Blog silme fonksiyonu
  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    setToastMessage("Blog başarıyla silindi!"); // Mesajı ayarla
    setToastType("error");
    setShowToast(true); // Toast'i göster
  };

  // Yeni blog ekleme fonksiyonu
  const addBlog = () => {
    if (newTitle.trim() === "" || newContent.trim() === "") return; // Boş ekleme yapma
    const newBlog = {
      id: Date.now(), // Benzersiz ID oluştur
      title: newTitle,
      content: newContent,
    };
    setBlogs([...blogs, newBlog]); // Yeni blogu ekleyerek state'i güncelle
    setNewTitle(""); // Inputları temizle
    setNewContent("");

    setToastMessage("Blog başarıyla eklendi!"); // Mesajı ayarla
    setToastType("success");  // Ekleme işlemi için başarı tipi
    setShowToast(true); // Toast'i göster
  };

  return (
    <>
      <Navbar /> {/* Navbar burada kullanıldı */}
      <div className="container-fluid mt-5">
        <h1 className="text-center text-primary">My Blog</h1>

        {/* Sayfa yapısı */}
        <div className="row">
          {/* Sol Kısım */}
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Günlük Haberler</h3>
                <ul>
                  <li>Haber 1: Bugün yeni bir gelişme var!</li>
                  <li>Haber 2: React güncellemesi çıktı!</li>
                  <li>Haber 3: Blog yazma ipuçları.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Orta Kısım (Bloglar) */}
          <div className="col-md-6">
            {/* Yeni Blog Ekleme Formu */}
            <div className="card p-3 mb-4">
              <h3>Yeni Blog Ekle</h3>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Başlık"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                placeholder="İçerik"
                rows="3"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
              <button className="btn btn-success" onClick={addBlog}>Ekle</button>
            </div>

            {blogs.map((blog) => (
              <div className="card mb-4" key={blog.id}>
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p className="card-text">{blog.content}</p>
                  <button className="btn btn-danger" onClick={() => deleteBlog(blog.id)}>Sil</button>
                </div>
              </div>
            ))}
          </div>

          {/* Sağ Kısım */}
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Hakkımda</h3>
                <p className="card-text">Merhaba! Ben bir blog yazarıyım.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification Bileşeni */}
      <ToastNotification 
        message={toastMessage} 
        show={showToast} 
        setShow={setShowToast}
        type={toastType}
      />

      <Footer />
    </>
  );
}

export default App;
