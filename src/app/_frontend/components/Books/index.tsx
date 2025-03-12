import type { IResponse, IBook } from '@/app/api/_utils/types.d.ts';
import Book from './Book';
import Navigation from './Navigation';

interface IBooks {
  data: IResponse;
  updatePage: (page: number) => void;
}

const Books = ({ data, updatePage }: IBooks) => {
  const currentPage = data.offset / 12 + 1;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <div className="min-h-[400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {data.docs
            .slice(
              0,
              data.docs.length > 12 ? data.docs.length - 1 : data.docs.length
            )
            .map((card: IBook) => (
              <Book
                key={card.key}
                title={card.title}
                first_publish_year={card.first_publish_year}
              />
            ))}
        </div>
      </div>
      <Navigation
        page={currentPage}
        showNext={data.docs.length > 12}
        updatePage={updatePage}
      />
    </div>
  );
};

export default Books;
