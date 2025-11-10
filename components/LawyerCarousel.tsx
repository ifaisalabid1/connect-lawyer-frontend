"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

const LawyerCarousel = () => {
  const carousel = [
    {
      img: "https://picsum.photos/500/300",
      title: "Deepali Jain",
      designation: "Co-founder/Partner",
      firm: "One Corp Legal Consultancy Services",
      reviewStar: 5,
      reviewCount: 1,
      practiceArea: "Business Law",
      firmLink: "",
      lawyerLink: "",
    },
    {
      img: "https://picsum.photos/500/300",
      title: "Deepali Jain",
      designation: "Co-founder/Partner",
      firm: "One Corp Legal Consultancy Services",
      reviewStar: 5,
      reviewCount: 1,
      practiceArea: "Business Law",
      firmLink: "",
      lawyerLink: "",
    },
    {
      img: "https://picsum.photos/500/300",
      title: "Deepali Jain",
      designation: "Co-founder/Partner",
      firm: "One Corp Legal Consultancy Services",
      reviewStar: 5,
      reviewCount: 1,
      practiceArea: "Business Law",
      firmLink: "",
      lawyerLink: "",
    },
    {
      img: "https://picsum.photos/500/300",
      title: "Deepali Jain",
      designation: "Co-founder/Partner",
      firm: "One Corp Legal Consultancy Services",
      reviewStar: 5,
      reviewCount: 1,
      practiceArea: "Business Law",
      firmLink: "",
      lawyerLink: "",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1.2}
      spaceBetween={15}
      navigation
      pagination={{ clickable: true }}
    >
      {carousel.map((item, key) => (
        <SwiperSlide key={key}>
          <Link href={item.lawyerLink}>
            <Image
              src={item.img}
              alt=""
              width={500}
              height={300}
              className="rounded-md"
            />
          </Link>

          <h3 className="font-bold text-xl mt-8">
            <Link href={item.lawyerLink}>{item.title}</Link>
          </h3>
          <p className="font-medium mt-2">
            {item.designation} at {""}
            <Link href={item.firmLink} className="text-teal-700">
              {item.firm}
            </Link>
          </p>

          <div className="flex items-center gap-1 mt-2">
            <span>
              <Star fill="oklch(60% 0.118 184.704)" strokeWidth={0} size={20} />
            </span>
            <span className="font-semibold text-sm">
              {item.reviewStar}.0{" "}
              <span className="text-zinc-400">({item.reviewCount} Review)</span>
            </span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-teal-700 text-teal-700 bg-teal-50"
              asChild
            >
              <Link href="">{item.practiceArea}</Link>
            </Button>

            <Link href={item.firmLink} className="font-semibold text-amber-600">
              More Details
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LawyerCarousel;
