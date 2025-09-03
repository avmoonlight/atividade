import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-green-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        UNI
      </Link>

      {/* Menu */}
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/cursos">Cursos</Link>
        <Link href="/publicidade">Publicidade</Link>
      </nav>

      {/* Botão */}
      <button className="bg-white text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
        Área do Aluno
      </button>
    </header>
  );
}
