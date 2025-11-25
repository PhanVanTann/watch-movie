// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-10 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* LOGO + DESCRIPTION */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">
            🎬 Watch<span className="text-[#fbca76]">Movie</span>
          </h1>
          <p className="text-sm text-gray-400">
            Nền tảng xem phim trực tuyến với kho nội dung phong phú, cập nhật liên tục.
          </p>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="text-white font-semibold mb-3">Về chúng tôi</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="">Giới thiệu</Link></li>
            <li><Link href="#">Điều khoản sử dụng</Link></li>
            <li><Link href="#">Chính sách bảo mật</Link></li>
            <li><Link href="#">Liên hệ</Link></li>
          </ul>
        </div>

        

        {/* SOCIAL MEDIA */}
        <div>
          <h2 className="text-white font-semibold mb-3">Theo dõi chúng tôi</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#fbca76] transition-all"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#fbca76] transition-all"><FaInstagram /></a>
            <a href="#" className="hover:text-[#fbca76] transition-all"><FaYoutube /></a>
            <a href="#" className="hover:text-[#fbca76] transition-all"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 border-t border-white/10 pt-5 text-sm text-gray-500">
        © {new Date().getFullYear()} WatchMovie. All rights reserved.
      </div>
    </footer>
  );
}