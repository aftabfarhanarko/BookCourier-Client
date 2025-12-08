import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/navigation";
import H1text from "../../utils/H1text";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../hooks/useAxiosSchore";
import Card from "../../shared/Card";
import { Navigation } from "swiper/modules";

const LetasCard = () => {
  const axioscehore = useAxiosSchore();
  const { data: books } = useQuery({
    queryKey: ["letas"],
    queryFn: async () => {
      const res = await axioscehore.get("limetCard");
      return res.data;
    },
  });

  return (
    <div className="relative group">
      <H1text>Letest Card Sections</H1text>

      {/* Swiper Wrapper */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 }, // mobile
          640: { slidesPerView: 2 }, // small tablet
          1024: { slidesPerView: 3 }, // tablet / small laptop
          1280: { slidesPerView: 4 }, // large desktop
        }}
        className=""
      >
        {books?.map((book) => (
          <SwiperSlide key={book._id}>
            <Card book={book} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Hover Style */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 0;
            // transition: opacity 0.3s ease;
          }
          .group:hover .swiper-button-next,
          .group:hover .swiper-button-prev {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default LetasCard;
