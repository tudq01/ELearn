import React from 'react';
import './Footer.css'
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="wrap">
            <div className="footer">
              <h1 id="title">TOEIC ONLINE</h1>

              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-tiktok"></i>
            </div>
            <div className="footer">
              <h1 id="title">Tài nguyên</h1>
              <a>Lịch khai giảng</a>
              <a>Thư viện đề thi</a>
              <a>Cộng đồng</a>
              <a>Kho tài liệu</a>
              <a>Live class</a>
            </div>
            <div className="footer">
              <h1 id="title">Thông tin</h1>
              <a>+123-456-7890</a>
              <a>+111-222-3333</a>
              <a>shaikhanas@gmail.com</a>
            </div>
            <div className="footer">
              <h1 id="title">Hỗ trợ</h1>
              <a>Hướng dẫn sử dụng</a>
              <a>Huướng dẫn mua hàng</a>
              <a>Chăm sóc khách hàng</a>
              <a>Phản hồi khiếu nại</a>
            </div>
            <div className="footer">
              <h1 id="title">TOEIC</h1>
              <a>Về chúng tôi</a>
              <a>Liên hệ</a>
              <a>Điều khoản bảo mật</a>
              <a>Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
