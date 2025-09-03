import CardCurso from "@/components/CardCurso";

const cursos = [
  { id: 1, titulo: "Publicidade e Propaganda", imagem: "/images/publicidade.jpg" },
  { id: 2, titulo: "Administração", imagem: "/images/administracao.jpg" },
  { id: 3, titulo: "Engenharia", imagem: "/images/engenharia.jpg" },
  { id: 4, titulo: "Direito", imagem: "/images/direito.jpg" },
];

export default function CursosPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <CardCurso key={curso.id} titulo={curso.titulo} imagem={curso.imagem} />
        ))}
      </div>
    </main>
  );
}
