import SearchBar from "@/components/SearchBar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <section className="bg-[url('/inicio.png')] bg-cover bg-center h-[500px] w-full">
        <nav className="flex items-center justify-between px-6 py-4 text-white font-saira">
          <ul className="flex items-center gap-6">
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
          <SearchBar /> {/* 🔍 */}
        </nav>

     
        <div className="flex flex-col items-center justify-center text-center text-white pt-36">
          <h1 className="text-[75px] font-saira">GRADUAÇÃO UNI</h1>
          <button className="mt-6 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition">
            Embarque
          </button>
        </div>
      </section>

 
      <main className="flex-1">{children}</main>

  
      <footer className="p-4 bg-green-700 text-white text-center">
        <p>Universidade da Região - UNI © 2025</p>
      </footer>
    </div>
  );
}

