import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import H1text from "../../utils/H1text";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../hooks/useAxiosSchore";
import Card from "../../shared/Card";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

const LetasCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const axioscehore = useAxiosSchore();

  const { data: books } = useQuery({
    queryKey: ["letas"],
    queryFn: async () => {
      const res = await axioscehore.get("limetCard");
      return res.data;
    },
  });

  return (
    <div
      className="relative py-12 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <H1text>Latest Card Sections</H1text>

      {/* Swiper Wrapper */}
      <div className="mt-15">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          loop={books?.length > 4}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper !pb-12"
        >
          {books?.map((book) => (
            <SwiperSlide key={book._id} className="h-auto">
              <Card book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Styling */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            opacity: ${isHovered ? "1" : "0"};
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            color: white !important;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
          }
          
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
            box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
            transform: scale(1.1);
          }

          .swiper-button-next {
            right: 10px;
          }

          .swiper-button-prev {
            left: 10px;
          }

          .swiper-button-disabled {
            opacity: 0.3 !important;
            cursor: not-allowed;
          }

          /* Pagination dots styling */
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #667eea;
            opacity: 0.5;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
            width: 30px;
            border-radius: 6px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }

          /* Slide animation */
          .swiper-slide {
            transition: transform 0.3s ease;
          }

          .swiper-slide:hover {
            transform: translateY(-8px);
          }

          /* Custom scrollbar */
          .swiper-scrollbar {
            background: rgba(102, 126, 234, 0.1);
            height: 4px;
          }

          .swiper-scrollbar-drag {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default LetasCard;
