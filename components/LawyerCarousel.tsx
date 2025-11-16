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
import { useEffect, useState } from "react";
import { Lawyer } from "@/types/lawyer";

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";

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
      <div className="flex max-w-xs justify-center">
        <Item variant="muted">
          <ItemMedia>
            <Spinner />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Loading lawyers...</ItemTitle>
          </ItemContent>
        </Item>
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
      {allLawyers.map((item, key) => (
        <SwiperSlide key={key}>
          <Link href={""}>
            <Image
              src="https://picsum.photos/500/300"
              alt=""
              width={500}
              height={300}
              className="rounded-md"
            />
          </Link>

          <h3 className="font-bold text-xl mt-8">
            <Link href={""}>{item.name}</Link>
          </h3>
          <p className="font-medium mt-2">
            {""} at {""}
            <Link href={""} className="text-teal-700">
              {item.lawFirmName}
            </Link>
          </p>

          <div className="flex items-center gap-1 mt-2">
            <span>
              <Star fill="oklch(60% 0.118 184.704)" strokeWidth={0} size={20} />
            </span>
            <span className="font-semibold text-sm">
              5.0 <span className="text-zinc-400">(Review)</span>
            </span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-teal-700 text-teal-700 bg-teal-50"
              asChild
            >
              <Link href="">{""}</Link>
            </Button>

            <Link href={""} className="font-semibold text-amber-600">
              More Details
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LawyerCarousel;
