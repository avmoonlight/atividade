import HeroSection from "../components/HeroSection";


export default function Home() {
  return (
    <main>
      <HeroSection
        title="GRADUAÇÃO UNI"
        button1="Saiba Mais"
        button2="Inscreva-se"
        image="/images/home-banner.jpg"
      />

      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold">Conheça a unidade mais próxima</h2>
        <p>Encontre o campus ideal para o seu futuro acadêmico.</p>
      </section>
    </main>
  );
}
