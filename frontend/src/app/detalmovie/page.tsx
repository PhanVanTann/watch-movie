'use client'
import { IoPlayCircle } from "react-icons/io5";
import { FaPlay,FaRegHeart,FaShare } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { BiSolidCommentDots } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { useState } from "react";
import Comment from "../components/Comment";

const tabs = [
  { key: "episodes", label: "Tập phim" },
  { key: "gallery", label: "Gallery" },
  { key: "cast", label: "Diễn viên" },
  { key: "suggest", label: "Đề xuất" },
];
export default function DetailMoviePage() {

const [activeTab, setActiveTab] = useState("episodes");
  return (
    <div className="bg-black/80 ">
        <div className="relative bg-[url('https://static.nutscdn.com/vimg/1920-0/12d43b668b9786b730ab2e4dbfe50c7b.webp')] w-full h-[500px] bg-cover bg-center">
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-black/80 shadow-2xl"></div>
        </div>
        <div className="relative mt-[-120px] flex mx-10 bg-gradient-to-b from-black/10 via-black/80 to-black gap-10 p-10 rounded-3xl ">
            <div className="w-[25%] rounded-3xl">
                <div className="relative flex">
                    <img src='https://static.nutscdn.com/vimg/300-0/d4529d931250343776e527454ac28154.jpg' className="rounded-2xl w-[150px]"></img>
                    <h2 className="absolute bottom-10 right-20 my-5 flex flex-col items-center text-[#feda7d]">
                        <span className="text-[45px] font-bold leading-none drop-shadow-[0_0_8px_rgba(254,218,125,0.6)]">7.0</span>
                        <span className="text-[18px] font-semibold opacity-80">/10</span>
                    </h2>
                </div>
                <h2 className="text-white text-2xl font-bold my-5">Chú chó đừng sợ</h2>
                <h3 className="text-[#fbca76]">Good Boy</h3>
                 <div className="flex gap-4 my-4 text-[13px] flex-wrap">
                  <span className =" border border-white/80 rounded-sm p-[5px]" >18T</span>
                  <span className =" border border-white/80 rounded-sm p-[5px]" >2025</span>
                  <span className =" border border-white/80 rounded-sm p-[5px]" >120 Phút</span>
                  <span className =" border border-white/80 rounded-sm p-[5px]" >VN</span>
                </div>
                <div className="flex gap-4 my-5 flex-wrap text-[12px] text-white/80">
                  {['Hành Động', 'Phiêu Lưu', 'Gia Đình', 'Viễn Tưởng','sshshs','shsgsshs','sgsggsgs'].map((genre, index) => (
                    <a key={index} className =" border border-white/20 rounded-sm p-[5px]" href="">{genre}</a>
                    ))}
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Giới Thiệu</h3>
                <p className="text-white/80 text-sm leading-6">"Chú chó đừng sợ" kể về hành trình phiêu lưu đầy cảm động của một chú chó dũng cảm tên Max, người đã vượt qua những thử thách nguy hiểm để tìm lại gia đình yêu dấu của mình. Trên đường đi, Max gặp gỡ những người bạn mới và học được ý nghĩa thực sự của lòng trung thành và tình bạn.</p>
                <p className="text-white text-lg my-2 text-[14px]">Thời lượng: <span>120 phút</span></p>
                <p className="text-white text-lg my-2 text-[14px]">Quốc gia: <span>Việt Nam</span></p>
                <p className="text-white text-lg my-2 text-[14px]">Năm phát hành: <span>2025</span></p>
                <p className="text-white text-lg my-2 text-[14px]">Đạo diễn: <span>Nguyễn Văn A</span></p>
                
            </div>
            <div className="w-[70%] rounded-4xl pl-20  bg-[#191b24] ">
                    <div className="relative flex gap-10 items-center flex-wrap p-10">
                        <button className="flex items-center justify-center gap-3 cursor-pointer  hover:scale-125 trainsition-all duration-500 bg-gradient-to-r from-[#feda7d] via-[#fee5a5] to-[#ffecbd] rounded-4xl w-[150px] h-[70px] text-black "><FaPlay className="text-black "></FaPlay>Xem Ngay</button>
                        <button className="group cursor-pointer w-[100px] h-[70px]  hover:bg-white/10 rounded-2xl hover:text-[#feda7d]"><IoMdHeart className="text-white text-[20px] mx-auto mb-[5px] group-hover:text-[#feda7d]"></IoMdHeart>Yêu Thích</button>
                        <button className="group cursor-pointer w-[100px] h-[70px] hover:bg-white/10 rounded-2xl hover:text-[#feda7d]"><FaShare className="text-white text-[20px] mx-auto mb-[5px] group-hover:text-[#feda7d]"></FaShare>Chia Sẻ</button>
                        <button className="absolute right-10 flex items-center gap-3 justify-center cursor-pointer w-[130px] h-[40px] bg-[#3556b6] hover:bg-[#2a469a] rounded-2xl"><MdRateReview className=""></MdRateReview>Đánh Giá</button>
                    </div>
                    <div className="border-b border-white/20 mr-10">
                      <div className="flex gap-10 px-4">
                        {tabs.map((tab) => (
                          <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`
                              py-4 text-[15px] font-medium transition
                              ${activeTab === tab.key ? "text-yellow-300" : "text-white/90"}
                            `}
                          >
                            {tab.label}

                            {activeTab === tab.key && (
                              <div className="h-[2px] bg-yellow-300 mt-2 rounded-full"></div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                     <div className="mt-10 px-6 mr-5">

              {activeTab === "episodes" && (
                <div className="grid grid-cols-4 gap-4">
                  {[1,2,3,4,5,6,7,8].map((ep) => (
                    <div key={ep} className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition cursor-pointer">
                      <h3 className="text-white font-semibold">Tập {ep}</h3>
                      <p className="text-white/50 text-sm">Thời lượng: 20 phút</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="grid grid-cols-3 gap-4">
                  {["a","b","c","d","e","f"].map((i) => (
                    <img 
                      key={i} 
                      className="w-full h-40 object-cover rounded-xl"
                      src="https://static.nutscdn.com/vimg/300-0/d4529d931250343776e527454ac28154.jpg"
                    />
                  ))}
                </div>
              )}

              {activeTab === "cast" && (
                <div className="flex gap-6 flex-wrap">
                  {["Nam Chính","Nữ Chính","Vai Phụ","Vai Phụ 2"].map((name, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className="w-20 h-20 rounded-full border border-white/30"
                      />
                      <p className="text-white mt-2">{name}</p>
                    </div>
                  ))}
                </div>
              )}

                    {activeTab === "suggest" && (
                      <div className="grid grid-cols-5 gap-4">
                        {[1,2,3,4,5].map((i)=> (
                          <div key={i} className="cursor-pointer hover:scale-105 transition">
                            <img 
                              src="https://static.nutscdn.com/vimg/300-0/d4529d931250343776e527454ac28154.jpg"
                              className="w-full h-40 rounded-xl object-cover"
                            />
                            <h3 className="text-white text-sm mt-1">Phim gợi ý {i}</h3>
                          </div>
                        ))}
                      </div>
                    )}  

                  </div>
                  <Comment ></Comment>
            </div>
                     
                    </div>
                               
                </div>
  )
} 