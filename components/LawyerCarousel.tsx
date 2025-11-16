"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Lawyer } from "@/types/lawyer";

import { Spinner } from "@/components/ui/spinner";
import LawyerCard from "./LawyerCard";

const LawyerCarousel = () => {
  const [allLawyers, setAllLawyers] = useState<Lawyer[]>([]);
  const [loading, setLoading] = useState(true);

  // const carousel = [
  //   {
  //     img: "https://picsum.photos/500/300",
  //     title: "Deepali Jain",
  //     designation: "Co-founder/Partner",
  //     firm: "One Corp Legal Consultancy Services",
  //     reviewStar: 5,
  //     reviewCount: 1,
  //     practiceArea: "Business Law",
  //     firmLink: "",
  //     lawyerLink: "",
  //   },
  //   {
  //     img: "https://picsum.photos/500/300",
  //     title: "Deepali Jain",
  //     designation: "Co-founder/Partner",
  //     firm: "One Corp Legal Consultancy Services",
  //     reviewStar: 5,
  //     reviewCount: 1,
  //     practiceArea: "Business Law",
  //     firmLink: "",
  //     lawyerLink: "",
  //   },
  //   {
  //     img: "https://picsum.photos/500/300",
  //     title: "Deepali Jain",
  //     designation: "Co-founder/Partner",
  //     firm: "One Corp Legal Consultancy Services",
  //     reviewStar: 5,
  //     reviewCount: 1,
  //     practiceArea: "Business Law",
  //     firmLink: "",
  //     lawyerLink: "",
  //   },
  //   {
  //     img: "https://picsum.photos/500/300",
  //     title: "Deepali Jain",
  //     designation: "Co-founder/Partner",
  //     firm: "One Corp Legal Consultancy Services",
  //     reviewStar: 5,
  //     reviewCount: 1,
  //     practiceArea: "Business Law",
  //     firmLink: "",
  //     lawyerLink: "",
  //   },
  // ];

  useEffect(() => {
    async function getAllLawyers() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/lawyers/with-law-firm`
        );
        if (!res.ok) throw new Error("Failed to fetch lawyers.");

        const data = await res.json();
        setAllLawyers(data.data);
      } catch (error) {
        console.error("Error fetching lawyers.", error);
      } finally {
        setLoading(false);
      }
    }

    getAllLawyers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 justify-center">
        <Spinner className="size-5 text-teal-700" />
        <p>Loading Lawyers...</p>
      </div>
    );
  }
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1.2}
      spaceBetween={15}
      navigation
      pagination={{ clickable: true }}
    >
      {allLawyers.map((lawyer: Lawyer) => (
        <SwiperSlide key={lawyer.id}>
          <LawyerCard lawyer={lawyer} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LawyerCarousel;
