import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          {/* Icon */}
          <div className="icon">
            <div className="icon-content">
              <div className="stacked-blocks">
                <div className="block block-3"></div>
                <div className="block block-2"></div>
                <div className="block block-1"></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="main-heading">
            <span className="proje">Proje</span>
            <span className="yapim">Yapım</span>
            <span className="asamasinda">Aşamasında</span>
          </h1>

          {/* Description */}
          <p className="description">
            Uygulamamız şu anda geliştirme aşamasında.<br />
            Çok yakında sizlerle olacağız!
          </p>

          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <p className="progress-text">Geliştirme: %75 Tamamlandı</p>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h2 className="contact-title">İletişim</h2>
            <div className="contact-details">
              <p>Email: info@ztaak.com</p>
              <p>Telefon: +90 (543) 392 0956</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          © 2025 Tüm hakları saklıdır.
        </div>
      </div>
    </div>
  );
}

export default App;
