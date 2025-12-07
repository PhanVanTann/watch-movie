'use client';
import { IoPlayCircle } from "react-icons/io5";
import { FaPlay, FaShare } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { useState } from "react";
import Comment from "../../components/Comment";

const listMovies = [
    { id: 1, title: "Phim con dog", bgUrl: "https://static.nutscdn.com/vimg/300-0/d4529d931250343776e527454ac28154.jpg" },
    { id: 2, title: "Phim ...", bgUrl: "https://static.nutscdn.com/vimg/300-0/be6452465b2ac82064bd5bf7ba510946.jpg" },
    { id: 3, title: "Phim ....", bgUrl: "https://static.nutscdn.com/vimg/300-0/dce4f8aacc578425ca29b57696163340.webp" },
    
];

export default function TopicPage() {
    const [movies, setMovies] = useState(listMovies);

    return (
        <div className="my-25 p-10 mx-10 bg-[#191b24] rounded-3xl">
            <h1 className=" text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#fbca76] via-[#fef7ea] to-white">Chủ Đề Phim : Phim Hanh Dong</h1>
            <div className="mx-10 flex gap-5 flex-wrap">
                {   movies.map((movie) => (
                    <div 
                        key={movie.id} 
                        className="relative w-[170px] rounded-2xl group"
                        >
                        <img 
                            src={movie.bgUrl} 
                            className="w-full h-full object-cover rounded-2xl border border-white/10"
                        />

                        <div className="
                            absolute inset-0 bg-black/60 
                            flex items-center justify-center 
                            opacity-0 group-hover:opacity-100
                            transition duration-300
                        ">
                            <button className="px-4 py-2 bg-[#fbca76] text-black font-semibold rounded-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                            Xem ngay
                            </button>
                        </div>

                        <div className="text-center p-2">{movie.title}</div>
                        </div>
                ))
                }
            </div>
        </div>
    );
}
