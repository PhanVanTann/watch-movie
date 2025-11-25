import React, { useState } from 'react';
import { MessageSquareText, Star, Heart } from 'lucide-react'; // Sử dụng lucide-react cho các icon

const mockComment = {
    user: "nam",
    time: "7 ngày trước",
    text: "phim *** lzz xem *** nhau với làm trò hề",
    avatar: "https://placehold.co/40x40/775d3c/ffffff?text=Doge",
    upvotes: 42,
  };
export default function  Comment()  {

  const [activeCommentTab, setActiveCommentTab] = useState<"comments" | "ratings">("comments");
  const [commentText, setCommentText] = useState("");
  const maxCommentLength = 500;
  const isLoggedIn = false; // Mock trạng thái đăng nhập
  const commentCount = 123; // Mock số lượng bình luận

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-2xl my-10 mr-10">
      {/* Tabs: Bình luận & Đánh giá */}
      <div className="flex border-b border-white/10 mb-6">
        <button
          onClick={() => setActiveCommentTab("comments")}
          className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm transition-colors ${
            activeCommentTab === "comments"
              ? "text-white border-b-2 border-yellow-300"
              : "text-white/50 hover:text-white"
          }`}
        >
          <MessageSquareText className="text-lg" /> {/* Thay thế BiSolidCommentDots */}
          Bình luận ({commentCount})
        </button>
        <button
          onClick={() => setActiveCommentTab("ratings")}
          className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm transition-colors ${
            activeCommentTab === "ratings"
              ? "text-white border-b-2 border-yellow-300"
              : "text-white/50 hover:text-white"
          }`}
        >
          <Star className="text-lg" /> {/* Thay thế MdRateReview */}
          Đánh giá
        </button>
      </div>

      {activeCommentTab === "comments" && (
        <div className="space-y-6">
          {/* Vùng nhập bình luận và lời nhắc đăng nhập */}
          <div className="bg-black/20 p-4 rounded-xl border border-white/10">
            {!isLoggedIn ? (
              <p className="text-white/70 text-base mb-4">
                Vui lòng <a href="#" className="text-yellow-300 font-bold hover:underline">đăng nhập</a> để tham gia bình luận.
              </p>
            ) : null}
            
            <textarea
              className="w-full h-24 bg-transparent text-white/90 p-2 focus:outline-none resize-none text-sm placeholder-white/50"
              placeholder="Viết bình luận"
              maxLength={maxCommentLength}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              disabled={!isLoggedIn}
            ></textarea>
            <div className="flex justify-end items-center pt-2">
              <span className={`text-xs ${commentText.length > 0 ? 'text-white/50' : 'text-white/30'}`}>
                {commentText.length} / {maxCommentLength}
              </span>
            </div>
          </div>
          
          {/* Hàng hành động: Tiết lộ? & Gửi */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-3">
                {/* Mock toggle cho "Tiết lộ?" */}
                <input type="checkbox" id="revealToggle" className="sr-only peer" disabled={!isLoggedIn} />
               
               
            </div>
            <button
                className={`flex items-center gap-2 py-2 px-6 rounded-full font-semibold transition-all ${
                    isLoggedIn && commentText.length > 0
                    ? "bg-[#feda7d] text-black hover:bg-yellow-400"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
                disabled={!isLoggedIn || commentText.length === 0}
            >
                Gửi <span className="text-xl leading-none">→</span>
            </button>
          </div>

          {/* Bình luận hiện có (Mock) */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-start gap-4">
              <img
                src={mockComment.avatar}
                alt={mockComment.user}
                className="w-12 h-12 rounded-full object-cover border-2 border-yellow-300"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold">{mockComment.user}</span>
                  <span className="text-white/50 text-xs">7 ngày trước</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{mockComment.text}</p>
                <div className="flex items-center gap-4 mt-2 text-white/60 text-sm">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-red-400 transition">
                    {/* Sử dụng Heart icon và thêm fill-red-500 để làm nó trông giống IoMdHeart */}
                    <Heart className="text-red-500 text-lg fill-red-500" /> 
                    <span>{mockComment.upvotes}</span>
                  </div>
                  <button className="hover:text-white transition flex items-center gap-1">
                    <MessageSquareText className="text-sm" /> Trả lời {/* Thay thế BiSolidCommentDots */}
                  </button>
                  <button className="hover:text-white transition">Thêm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCommentTab === "ratings" && (
        <div className="text-white/70 h-40 flex flex-col items-center justify-center bg-white/5 rounded-lg">
          <Star className="text-4xl text-white/30 mb-2"/> {/* Thay thế MdRateReview */}
          <p className="text-lg">Chức năng Đánh giá</p>
          <p className="text-sm">Vui lòng quay lại tab Bình luận.</p>
        </div>
      )}
    </div>
  );
};