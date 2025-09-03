import Testimonial from "@/components/Testimonial";
import Accordion from "@/components/Accordion";

export default function PublicidadePage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Publicidade e Propaganda</h1>
      <p className="text-lg text-gray-700 mb-6">
        Desenvolva habilidades criativas e estratégicas para transformar ideias em campanhas impactantes.
      </p>

      {/* Seção de Depoimentos */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Depoimentos</h2>
        <Testimonial nome="Camila Silva" texto="Esse curso transformou minha carreira!" />
      </section>

      {/* Seção de Projetos */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Projetos Realizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/images/projeto1.jpg" alt="Projeto 1" className="rounded-lg shadow-md" />
          <img src="/images/projeto2.jpg" alt="Projeto 2" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* FAQ */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Perguntas Frequentes</h2>
        <Accordion pergunta="Qual a duração do curso?" resposta="O curso tem duração de 4 anos." />
        <Accordion pergunta="É presencial ou EAD?" resposta="Disponível nos dois formatos." />
      </section>
    </main>
  );
}
