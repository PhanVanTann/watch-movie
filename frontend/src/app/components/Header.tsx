"use client"
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";


export default function Header() {
     const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div  className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled ? "bg-black shadow-md" : "bg-white/10"
      }`}>
    <div className="flex p-4  text-white gap-35 items-center ">
        <div className="">LOGO</div>
        <div className="flex gap-2 items-center rounded-md w-100 text-white">
            <input type="text" placeholder="Tìm kiếm phim..." className={`placeholder-[#f8f8f8] px-4 py-2 rounded-md w-90 text-white ${scrolled? "bg-[#2c2f3a]":"bg-white/20 "}`}/>
            <FaSearch className=" hover:scale-150 transition-all duration-200 rounded cursor-pointer"/>
        </div>
        <div className="flex gap-10 text-[14px]">
            <a className="hover:text-[#ffd875]" href="">Phim Lẻ</a>
            <a className="hover:text-[#ffd875]" href="">Phim Bộ</a>
            <a className="hover:text-[#ffd875]" href="">Thể Loại</a>
            <a className="hover:text-[#ffd875]" href="">Quốc Gia</a>
            <a className="hover:text-[#ffd875]" href="">Chủ Đề</a>
        </div>
        <button className="rounded-2xl bg-[#ecedf4] cursor-pointer px-4 py-2 text-[#1c202e] hover:bg-[#fff]">Đăng Nhập</button>
    </div>
    </div>
    
  )
}