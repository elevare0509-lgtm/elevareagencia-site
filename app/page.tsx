import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  const titleComponent = (
    <div className="flex flex-col items-center gap-6 pb-8">
      <h1 className="text-4xl md:text-6xl font-bold text-offwhite text-center leading-tight max-w-3xl">
        Sua presença digital precisa{" "}
        <span className="text-gold">trabalhar</span> por você.
      </h1>
      <p className="text-offwhite/70 text-lg md:text-xl text-center max-w-xl">
        A Elevare transforma negócios locais em referências online.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/5511950274038"
          className="bg-gold text-navy font-semibold px-7 py-3 rounded-full hover:brightness-110 transition-all"
        >
          Falar no WhatsApp
        </a>
        <a
          href="#servicos"
          className="border border-offwhite/50 text-offwhite font-semibold px-7 py-3 rounded-full hover:bg-offwhite/10 transition-all"
        >
          Ver serviços
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-navy">
      <ContainerScroll titleComponent={titleComponent}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=75"
          alt="Dashboard profissional Elevare"
          className="w-full h-full object-cover object-top rounded-2xl"
        />
      </ContainerScroll>
    </div>
  );
}
