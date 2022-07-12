import React from 'react';
import './Footer.css'
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container" class="bg-dark">
          <div className="wrap">
            <div className="footer">
              <h1 id="title" class="text-white">
                TOEIC ONLINE
              </h1>
               
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-youtube"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer">
              <h1 id="title" class="text-white">
                Tài nguyên
              </h1>
              <a class="text-white">Lịch khai giảng</a>
              <a class="text-white">Thư viện đề thi</a>
              <a class="text-white">Cộng đồng</a>
              <a class="text-white">Kho tài liệu</a>
              <a class="text-white">Live class</a>
            </div>
            <div className="footer">
              <h1 class="text-white mb-3">Contact</h1>
              <a class="mb-2 text-white">
                <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York,
                USA
              </a>
              <a class="mb-2 text-white"  >
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </a>
              <a class="mb-2 text-white">
                <i class="fa fa-envelope me-3"></i>info@example.com
              </a>
            </div>
            <div className="footer">
              <h1 id="title" class="text-white">
                Hỗ trợ
              </h1>
              <a class="text-white">Hướng dẫn sử dụng</a>
              <a class="text-white">Huướng dẫn mua hàng</a>
              <a class="text-white">Chăm sóc khách hàng</a>
              <a class="text-white">Phản hồi khiếu nại</a>
            </div>
            <div className="footer">
              <h1 id="title" class="text-white">
                TOEIC
              </h1>
              <a class="text-white">Về chúng tôi</a>
              <a class="text-white">Liên hệ</a>
              <a class="text-white">Điều khoản bảo mật</a>
              <a class="text-white">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
