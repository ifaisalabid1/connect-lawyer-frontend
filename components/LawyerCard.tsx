import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Lawyer } from "@/types/lawyer";

export default function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <div>
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
        <Link href={""}>{lawyer.name}</Link>
      </h3>
      <p className="font-medium mt-2">
        {""} at {""}
        <Link href={""} className="text-teal-700">
          {lawyer.lawFirmName}
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
    </div>
  );
}
