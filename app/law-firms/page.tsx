import { LawFirm } from "@/types/law-firm";
import LawFirmCard from "@/components/LawFirmCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

const getLawFirms = async () => {
  const res = await fetch(`${process.env.BASE_URL}/law-firms`);
  if (!res.ok) throw new Error("Failed to fetch law firms.");
  return res.json();
};

export default async function LawFirms() {
  const response = await getLawFirms();
  const allLawFirms: LawFirm[] = response.data;

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
                Law Firms
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* end breadcrumb */}

      {/* lawFirms grid */}
      <section className="container mt-10">
        <h2 className="text-2xl font-semibold">
          Explore Trusted <span className="text-teal-700">Law Firms</span>
        </h2>

        <Input
          type="text"
          placeholder="Search for a lawFirm"
          className="mt-3"
        />

        <div className="mt-8 grid grid-cols-1 gap-6">
          {allLawFirms.map((lawFirm: LawFirm) => (
            <LawFirmCard lawFirm={lawFirm} key={lawFirm.id} />
          ))}
        </div>
      </section>
      {/* end lawFirms grid */}
    </>
  );
}
