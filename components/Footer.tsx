export default function Footer() {
  return (
    <footer className="bg-green-900 text-white px-6 py-10 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-3">Sobre a UNI</h3>
          <p className="text-sm text-gray-300">
            A UNI é uma instituição comprometida com a excelência no ensino superior.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Links Úteis</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/cursos">Nossos Cursos</a></li>
            <li><a href="/publicidade">Publicidade</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contato</h3>
          <p className="text-sm text-gray-300">
            Rua Exemplo, 123 - São Paulo, SP <br />
            contato@uni.com.br <br />
            (11) 99999-9999
          </p>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} UNI - Todos os direitos reservados.
      </div>
    </footer>
  );
}
