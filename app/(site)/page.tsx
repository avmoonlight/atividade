import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 mt-20">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
      
        <div className="w-full md:w-1/2 mt-10px ">
          <Image
            src="/imagem/sobre.png"
            alt="Universidade Univille"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
          />
      </div>

    
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Sobre a Univille
        </h1>
        <p className="text-green-800 leading-relaxed text-2x1">
          Somos uma Universidade referência na região, com ampla 
          estrutura, professores qualificados e cursos reconhecidos pelo MEC. 
          Proporcionamos atividades de ensino, pesquisa e extensão 
          nas mais diversas áreas do conhecimento.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-800 rounded-lg text-white hover:bg-green-700 transition">
          Continuar lendo
        </button>
      </div>
        
      </div>
     
            <section className="bg-gray-200 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold text-green-900 uppercase mb-4">
            Conheça<br />nossos<br />cursos
          </h2>
          <br />
          <p className="text-green-800 mb-6 text-2x1">Um universo de oportunidades.</p>
          <br />
          <button className="flex items-center gap-2 text-green-800 font-bold underline hover:text-green-600 transition s-20">
            Confira
            <span className="text-2xl">→</span>
          </button>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-100">
        
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/imagem/publi.jpg"
              alt="Curso de Publicidade"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Publicidade
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-100">
            <Image
              src="/imagem/gastro.jpg"
              alt="Curso de Gastronomia"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Gastronomia
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg h-100">
            <Image
              src="/imagem/med.jpg"
              alt="Curso de Medicina"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Medicina
            </div>
          </div>
        </div>
      </div>
    </section>




    <section className=" text-white py-16 px-6 w-full mt-20"> 
         <h1 className="text-3xl font-bold text-green-900 mb-4">
          O que dizem nossos alunos
        </h1>
        
    </section>   



       

    </main>
  );
}
