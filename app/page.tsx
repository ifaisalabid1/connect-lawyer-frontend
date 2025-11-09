import Cta from "@/components/Cta";
import Cta2 from "@/components/Cta2";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="my-16">
      <Hero />
      <Cta />
      <section className="mt-12">
        <Cta2 />
      </section>
    </div>
  );
}
