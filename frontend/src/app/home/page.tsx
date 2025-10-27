"use client";
import Image from "next/image"
import { FaRegPlayCircle,FaRegHeart } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { GrNext } from "react-icons/gr";
import { use, useState , useEffect,useRef} from "react";
import {gsap} from 'gsap'
import { IoChevronBack } from "react-icons/io5";

interface MoviesPosterProps{
    id:number;
    name_vn:string;
    name_en:string;
    image_poster:string;
    duration:string;
    year:string;
    movie_genres:string[];
    agerating:string;
    country:string;
    description:string;
}
const movieExample:MoviesPosterProps[]=[{
    id:1,
    name_vn:"Trò chơi ảo giác",
    name_en:"tron: ares",
    image_poster:"https://static.nutscdn.com/vimg/1920-0/3ae2a6a609817b5561e3585a5f9db0e0.webp",
    duration:"120 phút",
    year:"2025",
    movie_genres:["hanhf dong","vien tuong","hai huoc","kinh di","tinh cam"],
    agerating:"18T",
    country:"VN",
    description:"Trò Chơi Ảo Giác (TRON: Ares) theo chân Ares hhhhhh hhhhh hhhhhs hshhsh shshshh shshshs hhhhhhhhhhhh shkakssh sgsggsgs shhshshsh shgsh– một thực thể ảo cực kỳ tinh vi được cử từ thế giới số đến thế giới thực trong một nhiệm vụ nguy hiểm, đánh dấu cuộc chạm trán đầu tiên giữa loài người và những thực thể trí tuệ nhân tạo."
},
{
    id:2,
    name_vn:"Example Movie 2",
    name_en:"example movie 2",
    image_poster:"https://static.nutscdn.com/vimg/1920-0/d337eec84180302155cff0bdb951e62f.webp",
    duration:"110 phút",
    year:"2024",
    movie_genres:["hanhf dong","hai huoc"],
    agerating:"16T",
    country:"US",
    description:"This is an example description for movie 2." 
},
{
    id:3,
    name_vn:"Example Movie 3",
    name_en:"example movie 3",
    image_poster:"https://static.nutscdn.com/vimg/1920-0/1f7caafb4bc58ef18da0df4f07d311c3.jpg",
    duration:"130 phút",
    year:"2023",
    movie_genres:["vien tuong","kinh di"],
    agerating:"18T",
    country:"UK",
    description:"This is an example description for movie 3."
},
{
    id:4,
    name_vn:"Example Movie 4",
    name_en:"example movie 4",
    image_poster:"https://static.nutscdn.com/vimg/1920-0/12d43b668b9786b730ab2e4dbfe50c7b.webp",
    duration:"95 phút",
    year:"2022",
    movie_genres:["tinh cam","hai huoc"],
    agerating:"13T",
    country:"CA",
    description:"This is an example description for movie 4."
  },
  {
    id:5,
    name_vn:"Example Movie 5",
    name_en:"example movie 5",
    image_poster:"https://static.nutscdn.com/vimg/1920-0/c21745efee816a40729ad2f2fedb69f0.webp",
    duration:"105 phút",      
    year:"2021",
    movie_genres:["hanhf dong","vien tuong","tinh cam"],
    agerating:"16T",
    country:"AU",
    description:"This is an example description for movie 5."
  }
]
interface TopicClolorProps{
    bg_color_from:string;
    bg_color_via:string;
    bg_color_to:string;
}
const topicColorExample:TopicClolorProps[]=[
  {
    bg_color_from:"#6C7AF7",
    bg_color_via:"#687EF4", 
    bg_color_to:"#5F8BF8"
  },
  {
    bg_color_from:"#499983",
    bg_color_via:"#4f9b86",
    bg_color_to:"#539d88"
  },
  {
    bg_color_from:"#d6937a",
    bg_color_via:"#b95e5c",
    bg_color_to:"#ba605f"
  },
  {
    bg_color_from:"#8d7ac1",
    bg_color_via:"#8f7dc2",
    bg_color_to:"#917fc3"
  },
  {
    bg_color_from:"#d59379",
    bg_color_via:"#d7967d",
    bg_color_to:"#d8977f"
  },
  {
    bg_color_from:"#7f7faa",
    bg_color_via:"#8181ab",
    bg_color_to:"#8383ad"
  }
]


interface TopicProps{
    id:number;
    name:string;
    bg_color:TopicClolorProps;
}
const topicExample:TopicProps[]=[
    {
        id:1,
        name:"Xuyên Không",
        bg_color:topicColorExample[0]
    },
    {
        id:2,
        name:"Học Đường",
        bg_color:topicColorExample[1]
    },
    {
        id:3,
        name:"Cổ Trang",
        bg_color:topicColorExample[2]
    }
    ,
    {
        id:4,
        name:"Viễn Tưởng",
        bg_color:topicColorExample[3]
    },
    {
        id:5,
        name:"Tình Cảm",
        bg_color:topicColorExample[4]
    },
    {
        id:6,
        name:"Hành Động",
        bg_color:topicColorExample[5]
    }
]         
interface MovieDetailTopicProps{
    id:number;
    name_vn:string;
    name_en:string;
    image_poster:string;
}
interface MovieCountryProps{
  id:number;
  Country_name:string;
  movies:MovieDetailTopicProps[];
  
}

const movieCountryExample:MovieCountryProps[]=[
    {
        id:1,
        Country_name:"Phim Hàn Quốc",
        movies:
        [
            {
                id:1,
                name_vn:"Trò chơi ảo giác",
                name_en:"tron: ares",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/3ae2a6a609817b5561e3585a5f9db0e0.webp",
            },
            {
                id:2,
                name_vn:"Example Movie 2",
                name_en:"example movie 2",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/d337eec84180302155cff0bdb951e62f.webp",
            },
            {
                id:3,
                name_vn:"Example Movie 3",
                name_en:"example movie 3",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/1f7caafb4bc58ef18da0df4f07d311c3.jpg",
            },
            {
                id:4,
                name_vn:"Example Movie 4",
                name_en:"example movie 4",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/12d43b668b9786b730ab2e4dbfe50c7b.webp",
            },
            { 
                id:5,
                name_vn:"Example Movie 5",
                name_en:"example movie 5",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/c21745efee816a40729ad2f2fedb69f0.webp",
            }
        ]
    }   ,
    {   
        id:2,
        Country_name:"Phim Mỹ",
        movies:
        [
            {
                id:4,
                name_vn:"Example Movie 4",
                name_en:"example movie 4",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/12d43b668b9786b730ab2e4dbfe50c7b.webp",
            },
            {
                id:5,
                name_vn:"Example Movie 5",
                name_en:"example movie 5",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/c21745efee816a40729ad2f2fedb69f0.webp",
            },
            {
                id:1,
                name_vn:"Trò chơi ảo giác",
                name_en:"tron: ares",
                image_poster:"https://static.nutscdn.com/vimg/1920-0/3ae2a6a609817b5561e3585a5f9db0e0.webp",
            }
        ]
    }   

] 
   


export default function Home() {
  const [moviePoster,setMoviePoster]= useState<MoviesPosterProps[]>(movieExample);
  const [selectedPosterMovie,setSelectedPosterMovie]= useState<MoviesPosterProps>(movieExample[0]);
   const [indexPoster, setIndexPoster] = useState(0);
  const TextPosterAnimation = useRef<HTMLDivElement>(null)
  const ImagePosterAnimation = useRef<HTMLImageElement>(null)
  const ImageBigPosterAnimation = useRef<HTMLDivElement>(null)
  const [topicList,setTopicList]= useState<TopicProps[]>(topicExample);
  const [movieCountryList,setMovieCountryList]= useState<MovieCountryProps[]>(movieCountryExample);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);
  const viewportRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMoviePosterClick=(mov:MoviesPosterProps,index:number)=>{
    setIndexPoster(index);
    setSelectedPosterMovie(mov);
  }
  const handleNext = (rowIndex: number) => {
  const vp = viewportRef.current[rowIndex];
  if (!vp) return;
  vp.scrollBy({ left: vp.clientWidth, behavior: "smooth" });
  const newPositions = [...scrollPositions];
  newPositions[rowIndex] = (vp.scrollLeft || 0) + vp.clientWidth;
  setScrollPositions(newPositions);
};

const handlePrev = (rowIndex: number) => {
  const vp = viewportRef.current[rowIndex];
  if (!vp) return;
  vp.scrollBy({ left: -vp.clientWidth, behavior: "smooth" });
  const newPositions = [...scrollPositions];
  newPositions[rowIndex] = (vp.scrollLeft || 0) - vp.clientWidth;
  setScrollPositions(newPositions);
};
  useEffect(()=>{
    // nay de thay doi poster movie tu dong vs setInterval la lm thay doi state indexPoster
    const timer = setInterval(() => {
      moviePoster.forEach((mov,index)=>{
        if(selectedPosterMovie.id===mov.id){
          setIndexPoster(index);
          const nextIndex=(index+1)%moviePoster.length;
          setSelectedPosterMovie(moviePoster[nextIndex]);
        }
          
      })
    }, 6000);  
    return () => clearInterval(timer);
  },[indexPoster,selectedPosterMovie])
  // Animation text poster movie
   useEffect(() => {
    console.log("Animation triggered");
    if (TextPosterAnimation.current && ImagePosterAnimation.current && ImageBigPosterAnimation.current ) {
      gsap.fromTo(
        TextPosterAnimation.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ImagePosterAnimation.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ImageBigPosterAnimation.current,
        {opacity: 0 },
        {opacity: 1, duration: 2, ease: "power2.out" }
      );
     
     
    }
  }, [selectedPosterMovie]);
  
  console.log(moviePoster);
  console.log(selectedPosterMovie.description.length)
  return (
      <div className="">
        <section className="relative h-[650px] w-full">
          <div className="absolute inset-0 bg-cover bg-center blur-sm" ref = {ImageBigPosterAnimation}
            style={{
                backgroundImage:
                  `url(${selectedPosterMovie.image_poster})`,
              }}> 
          </div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div  className="flex pt-20 z-10  h-full ">
            <div className="relative ml-[50px] mt-[40px] rounded-2xl  shadow-2xl px-10 py-10 bg-white/10 w-[500px] h-[90%] text-white trainsition-all duration-500 ease-in-out">
              <div ref={TextPosterAnimation} className="h-full">
                <h1 className="text-[40px] mb-[10px]">{selectedPosterMovie.name_vn}</h1>
                <h3 className="text-[20px]">{selectedPosterMovie.name_en}</h3>
                <div className="flex gap-4 my-4 text-[14px] flex-wrap">
                  <span className =" border border-white/80 rounded-sm p-[5px]" >{selectedPosterMovie.agerating}</span>
                  <span className =" border border-white/80 rounded-sm p-[5px]" >{selectedPosterMovie.year}</span>
                  <span className =" border border-white/80 rounded-sm p-[5px]" >{selectedPosterMovie.duration}</span>
                  <span className =" border border-white/80 rounded-sm p-[5px]" >{selectedPosterMovie.country}</span>
                </div>
              
                <div className="flex gap-4 my-5 flex-wrap text-[13px] text-white/80">
                {
                  selectedPosterMovie.movie_genres.map((genre,index)=>(
                    <a key={index} className =" border border-white/20 rounded-sm p-[5px]" href="">{genre}</a>
                  ) )
                }   
                </div>
                  <span className="text-[13px] text-justify">{selectedPosterMovie.description.length>290 ? selectedPosterMovie.description.slice(0, 290) + "...":selectedPosterMovie.description}</span>
                  <div className="flex absolute bottom-0 w-105 ">
                    <button className=" cursor-pointer  hover:scale-125 trainsition-all duration-500 mt-[20px] pb-[10px]"><IoPlayCircle className="w-full h-20 "></IoPlayCircle></button>
                    <div className="ml-auto  w-[150px] h-[50px] flex gap-5 mt-[30px] rounded-2xl border border-white/30 justify-center">
                      <button><FiAlertCircle className="w-full h-[25px]  cursor-pointer hover:text-[#f4dda2]"></FiAlertCircle></button>
                      <span className="border-r border-white/30"></span>
                      <button><FaRegHeart className="w-full h-[25px] cursor-pointer hover:text-[#f4dda2]"></FaRegHeart></button>
                    </div>
                </div>
                </div>
            </div>
            
            
            <div className="relative ml-auto pr-[50px] pt-[10px] mt-[40px] ">

              <Image ref={ImagePosterAnimation} src={selectedPosterMovie.image_poster} alt="movie poster" width={700} height={100} className="rounded-2xl border border-white/30 shadow-md"/>
              
              <div className="absolute right-0 bottom-0 flex gap-4 mr-[50px] mb-5">
                
                {moviePoster.map((mov,index)=>( 
                <Image key={mov.id} onClick={()=>handleMoviePosterClick(mov,index)}  src={mov.image_poster} alt="movie poster" width={100} height={50} className="rounded-md border border-white/30 shadow-md mt-5 cursor-pointer hover:scale-110 trainsition-all duration-400"/>
                ))}
              
              </div>
                
            </div>
    
          
        </div>
      
        </section>

        <section  className="bg-[#0a0a0a]"> 
          <h1 className="text-[20px] font-bold m-10" >Bạn Đang Quan Tâm  Gì?</h1> 
            <div className="m-10 flex gap-10 flex-wrap">
                {topicList.map((topic)=>(
                  <div key={topic.id} className={`relative border border-white/50 w-[200px] h-[150px] rounded-3xl content-center shadow-xl bg-gradient-to-br from-[${topic.bg_color.bg_color_from}] via-[${topic.bg_color.bg_color_via}] to-[${topic.bg_color.bg_color_to}] hover:cursor-pointer hover:-translate-y-4 trainsition-all duration-300`}>
                    <h1 className="text-[20px]  ml-[20px]">{topic.name}</h1>
                    <span className="absolute bottom-0 left-0 text-[13px] mb-[20px] ml-[20px]">Xem chủ đề ›</span>
                       <svg
                        className="pointer-events-none absolute bottom-0 h-full w-full opacity-25"
                        viewBox="0 0 400 200"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <pattern id="waves" x="0" y="0" width="400" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20 Q 100 0 200 20 T 400 20" fill="none" stroke="white" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect x="0" y="0" width="400" height="200" fill="url(#waves)" />
                      </svg>
                  </div>
                ))}
                <div className="relative border border-white/50 w-[200px] h-[80px] rounded-3xl content-center shadow-xl bg-[#505464] hover:cursor-pointer hover:-translate-y-4 trainsition-all duration-300">                
                  <h1 className="text-[15px] ml-[20px] ">Tất Cả Chủ Đề (<span>+ 7 </span>)</h1>
                </div>      
            </div>
            <div className="m-[40px] border border-white/20 rounded-2xl p-10 bg-[#272b39]">
             {movieCountryList.map((movie,rowIndex) =>(  
              <div key={movie.id} className="relative mb-[20px]">
                
                <div  className="flex relative flex-wrap justify-between mb-5">
                  <h1 className="text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fbca76] via-[#fef7ea] to-white">{movie.Country_name}</h1>
                  <a href="" className="relative text-[13px] p-[10px] inline-block group rounded-2xl">
                    Xem Toàn Bộ ›
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute right-0 top-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300 delay-150"></span>
                    <span className="absolute left-0 top-0 h-0 w-[2px] bg-yellow-300 group-hover:h-full transition-all duration-300 delay-300"></span>
                    <span className="absolute right-0 bottom-0 h-0 w-[2px] bg-yellow-100 group-hover:h-full transition-all duration-300 delay-500"></span>
                    </a>
                </div>
                
                <div className="flex items-center gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory" 
                ref={(el) => {viewportRef.current[rowIndex] = el}} 
                onScroll={(e) => {
                  const target = e.target as HTMLDivElement;
                  const newPositions = [...scrollPositions];
                  newPositions[rowIndex] = target.scrollLeft;
                  setScrollPositions(newPositions);
                }} >
                  {movie.movies.map((mov)=>(
                  <div key={mov.id}  className="min-w-1/3 flex-shrink-0  ">
                    <div className=" ">
                      <Image src={mov.image_poster} alt="movie poster" width={400} height={100}  className="rounded-3xl"></Image>
                      <h2 className="text-white mt-3 text-center">{mov.name_vn}</h2>
                      <h3 className="text-[#aaaaaa] my-1 text-[13px] text-center">{mov.name_en}</h3>
                    </div>
                  
                  </div>
                   ))}
                   {scrollPositions[rowIndex] > 0 && (
                      <button
                        onClick={() => handlePrev(rowIndex)}
                        className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 cursor-pointer transition-opacity duration-300"
                      >
                        <IoChevronBack className="text-white text-3xl"></IoChevronBack>
                      </button>
                    )}
                  <button
                          onClick={()=>handleNext(rowIndex)}
                          className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 cursor-pointer"
                        >
                          <GrNext className="text-white text-3xl" />
                   </button>                  
                </div>
                 
              </div>
              ))}

               
            </div>
        </section>

    </div>
   
  )
}