import type { IResponse, IBook } from '@/app/api/_utils/types.d.ts';
import { umask } from 'process';

interface IBooks {
  data: IResponse;
  nextPage: (page: number) => void;
  previousPage: (page: number) => void;
}
const Books = ({ data, nextPage, previousPage }: IBooks) => {
  const currentPage = data.offset / 10 + 1;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {data.docs.slice(0, data.docs.length - 1).map((card: IBook) => (
          <div
            key={card.key}
            className="aspect-[4/1] bg-gray-50 rounded-lg border border-gray-300 shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
              {card.title}
            </h2>
            <p className="text-sm text-gray-700">{card.first_publish_year}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-6">
        {currentPage > 1 && (
          <button
            onClick={() => previousPage(currentPage - 1)}
            className="px-4 py-2 bg-violet-600 text-white rounded-md shadow-md hover:bg-violet-700"
          >
            ←
          </button>
        )}
        <span className="text-lg font-medium text-gray-800">{`Page ${currentPage}`}</span>
        {data.docs.length > 10 ? (
          <button
            onClick={() => nextPage(currentPage + 1)}
            className="px-4 py-2 bg-violet-600 text-white rounded-md shadow-md hover:bg-violet-700"
          >
            →
          </button>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Books;
