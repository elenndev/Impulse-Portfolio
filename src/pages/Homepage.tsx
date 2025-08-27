import { Link } from 'react-router-dom';
import { AiQueryField } from '../components/AiQueryField';

export function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <h1 className="text-5xl font-bold text-destaque-amarelo">Programa Impulse</h1>
      <p className="mt-4 text-xl text-center max-w-2xl text-gray-300">
        Bem-vindo à vitrine dos projetos desenvolvidos pelos talentos do programa Impulse, uma parceria entre FWK e Campak.
      </p>
      <p className="mt-2 text-md text-gray-400">Aqui, você pode explorar as soluções inovadoras que foram criadas para resolver problemas reais.</p>
      <Link to="/grupos" className="mt-8 px-6 py-3 btn-yellow btn-primary text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors">
        Ver os Projetos
      </Link>
      <AiQueryField />
    </div>
  );
}
