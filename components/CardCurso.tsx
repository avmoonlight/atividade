type Props = { titulo: string; imagem: string };

export default function CardCurso({ titulo, imagem }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition">
      <img src={imagem} alt={titulo} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{titulo}</h3>
      </div>
    </div>
  );
}
