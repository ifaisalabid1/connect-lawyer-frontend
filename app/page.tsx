import MessageBox from "@/components/MessageBox";
import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
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

  const bankingBadges = [
    {
      title: "Loan-related issues",
      link: "",
    },
    {
      title: "Unauthorized transaction",
      link: "",
    },
    {
      title: "Fraudulent activities",
      link: "",
    },
    {
      title: "Disputes over interest rates",
      link: "",
    },
  ];

  const businessBadges = [
    {
      title: "Breach of contract",
      link: "",
    },
    {
      title: "Partnership",
      link: "",
    },
    {
      title: "Shareholder",
      link: "",
    },
    {
      title: "Employment",
      link: "",
    },
  ];

  const civilBadges = [
    {
      title: "Personal injury",
      link: "",
    },
    {
      title: "Property damage",
      link: "",
    },
    {
      title: "Contract disputes",
      link: "",
    },
    {
      title: "Landlord-tenant issues",
      link: "",
    },
  ];

  const commercialBadges = [
    {
      title: "Breach of contract",
      link: "",
    },
    {
      title: "Non-payment/delayed payment",
      link: "",
    },
    {
      title: "Delivery/quality of goods or services",
      link: "",
    },
    {
      title: "Intellectual property ownership",
      link: "",
    },
  ];

  return (
    <div className="my-16">
      {/* hero */}
      <section className="container hero py-6 grid grid-cols-1 gap-6">
        <div>
          <h1 className="text-4xl leading-tight font-bold">
            <span className="block text-teal-100">
              Get Expert Legal Consultants,
            </span>
            <span className="text-teal-500">
              <span className="block">Anytime,</span>
              <span className="block">Anywhere</span>
            </span>
          </h1>

          <p className="mt-6 text-teal-50">
            Connect with lawyers or legal consultants through our platform and
            get the legal help you need within the United Arab Emirates.
          </p>
        </div>
        <MessageBox />
      </section>
      {/* end hero */}

      {/* cta */}
      <section className="bg-teal-700 py-8">
        <div className="container">
          <div className="container">
            <div className="grid grid-cols-1 gap-5 items-center">
              {ctaCards.map((item, key) => (
                <div
                  className="bg-teal-100 py-4 px-3 grid grid-cols-3 gap-6 items-center rounded-sm"
                  key={key}
                >
                  <div className="col-span-1">
                    <Image src={item.imgSrc} alt="" width={100} height={100} />
                  </div>
                  <div className="col-span-2">
                    <h2 className="font-bold text-xl text-teal-900">
                      {item.title}
                    </h2>
                    <Link
                      href={item.link}
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
      {/* end cta */}

      {/* cta 2 */}
      <section className="mt-12 container">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <p className="uppercase text-sm font-bold font-epilogue text-teal-700">
              Need a Lawyer?
            </p>
            <h2 className="font-bold text-3xl mt-3">
              <span className="text-teal-700">
                We connect clients to Legal Advisor
              </span>
              <span className="block">all-in-one platform.</span>
            </h2>
            <p className="mt-4 text-lg">
              Get the Legal Advice You Need Today! Lawyers in Dubai for legal
              services on family, business, and more. Also, check out our blogs
              for the latest legal insights
            </p>

            <Button className="bg-amber-600 w-full mt-8" size="lg" asChild>
              <Link href="">Find a Lawyer</Link>
            </Button>
          </div>

          <div>
            <Image
              src="/images/need-lawyer-client-interaction.webp"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      {/* end cta2 */}

      {/* services */}
      <section className="mt-12 container text-center">
        <p className="uppercase text-sm font-bold font-epilogue text-teal-700">
          Legal Services?
        </p>
        <h2 className="font-bold text-3xl mt-3">
          <span>Expert legal help for </span>
          <span className="text-teal-700">any situation</span>
        </h2>
        <p className="mt-4 text-lg">Finding the right service...</p>

        <div className="grid grid-cols-1 gap-10 mt-8">
          <div>
            <h3 className="font-bold text-2xl">For Your Banking</h3>

            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3.5 mt-6">
              {bankingBadges.map((item, key) => (
                <Badge
                  key={key}
                  variant="outline"
                  className="text-teal-700 border border-teal-700 text-sm"
                  asChild
                >
                  <Link href={item.link}>{item.title}</Link>
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl">For Your Business</h3>

            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3.5 mt-6">
              {businessBadges.map((item, key) => (
                <Badge
                  key={key}
                  variant="outline"
                  className="text-teal-700 border border-teal-700 text-sm"
                  asChild
                >
                  <Link href={item.link}>{item.title}</Link>
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl">For Your Civil</h3>

            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3.5 mt-6">
              {civilBadges.map((item, key) => (
                <Badge
                  key={key}
                  variant="outline"
                  className="text-teal-700 border border-teal-700 text-sm"
                  asChild
                >
                  <Link href={item.link}>{item.title}</Link>
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl">For Your Commercial</h3>

            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3.5 mt-6">
              {commercialBadges.map((item, key) => (
                <Badge
                  key={key}
                  variant="outline"
                  className="text-teal-700 border border-teal-700 text-sm"
                  asChild
                >
                  <Link href={item.link}>{item.title}</Link>
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Button className="bg-amber-600 mt-8" size="lg" asChild>
          <Link href="">View All Services</Link>
        </Button>
      </section>
      {/* end services */}

      {/* lawyer carousel */}
      <section className="mt-12 container">
        <p className="uppercase text-sm font-bold font-epilogue text-teal-700">
          Top Legal Experts
        </p>
        <h2 className="font-bold text-3xl mt-3">
          <span>Discover the </span>
          <span className="text-teal-700">top lawyers in Dubai</span>
        </h2>

        <div className="mt-6">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div></div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      {/* end lawyer carousel */}
    </div>
  );
}
