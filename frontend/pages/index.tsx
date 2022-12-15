import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link
        href={'/Pesquisa'}
        className="bg-red-500 text-white p-4 rounded-lg hover:opacity-80 hover:text-black"
      >
        {' '}
        Pagina dos Filmes
      </Link>
    </div>
  );
}
