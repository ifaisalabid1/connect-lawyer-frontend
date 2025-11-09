import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";

const Cta = () => {
  const ctaCards = [
    {
      title: "Find a Lawyer",
      imgSrc: "/images/find-a-lawyer-icon.svg",
      link: "",
    },
    {
      title: "Legal Services?",
      imgSrc: "/images/legal-service-icon.svg",
      link: "",
    },
    {
      title: "Ask a Lawyer",
      imgSrc: "/images/ask-a-lawyer-icon.svg",
      link: "",
    },
  ];

  return (
    <section className="bg-teal-700 py-8">
      <div className="container">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 items-center">
            {ctaCards.map((ctaCard, i) => (
              <div
                className="bg-teal-100 py-4 px-3 grid grid-cols-3 gap-6 items-center rounded-sm"
                key={i}
              >
                <div className="col-span-1">
                  <Image src={ctaCard.imgSrc} alt="" width={100} height={100} />
                </div>
                <div className="col-span-2">
                  <h2 className="font-bold text-xl text-teal-900">
                    {ctaCard.title}
                  </h2>
                  <Link
                    href={ctaCard.link}
                    className="text-sm text-teal-700 font-medium flex items-center gap-1 mt-2"
                  >
                    View Now
                    <CircleChevronRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
