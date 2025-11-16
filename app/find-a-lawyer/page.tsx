import LawyerCard from "@/components/LawyerCard";
import { Lawyer } from "@/types/lawyer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

const getLawyers = async () => {
  const res = await fetch(`${process.env.BASE_URL}/lawyers/with-law-firm`);
  if (!res.ok) throw new Error("Failed to fetch lawyers.");
  return res.json();
};

export default async function FindLawyer() {
  const response = await getLawyers();
  const allLawyers: Lawyer[] = response.data;

  return (
    <>
      {/* breadcrumb */}
      <section className="container mt-8">
        <Breadcrumb className="font-semibold">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-teal-700 font-semibold">
                Breadcrumb
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* end breadcrumb */}

      {/* lawyers grid */}
      <section className="container mt-10">
        <h2 className="text-2xl font-semibold">
          Explore Trusted <span className="text-teal-700">Lawyers</span>
        </h2>

        <Input type="text" placeholder="Search for a lawyer" className="mt-3" />

        <div className="mt-8 grid grid-cols-1 gap-6">
          {allLawyers.map((lawyer: Lawyer) => (
            <LawyerCard lawyer={lawyer} key={lawyer.id} />
          ))}
        </div>
      </section>
      {/* end lawyers grid */}
    </>
  );
}
