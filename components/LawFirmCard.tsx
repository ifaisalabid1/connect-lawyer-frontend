import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { LawFirm } from "@/types/law-firm";

export default function LawFirmCard({ lawFirm }: { lawFirm: LawFirm }) {
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
        <Link href={""}>{lawFirm.name}</Link>
      </h3>
      <p className="font-medium mt-2 text-teal-700 text-sm flex items-center gap-1">
        <MapPin size={16} /> United Arab Emirates
      </p>

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
