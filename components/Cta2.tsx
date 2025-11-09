import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Cta2 = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <p className="uppercase text-sm font-semibold font-epilogue text-teal-800">
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
    </div>
  );
};

export default Cta2;
