import LawyerCard from "@/components/LawyerCard";
import { Lawyer as lawyerType } from "@/types/lawyer";

const getLawyer = async (id: number) => {
  const res = await fetch(`${process.env.BASE_URL}/lawyers/${id}`);
  if (!res.ok) throw new Error("Error fetching lawyer.");

  return res.json();
};

export default async function Lawyer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lawyer: lawyerType = await getLawyer(Number(id));

  return (
    <div>
      <LawyerCard lawyer={lawyer} />
    </div>
  );
}
