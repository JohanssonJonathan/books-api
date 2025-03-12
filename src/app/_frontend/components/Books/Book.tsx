import { IBook } from '@/app/api/_utils/types';

const Book = ({ title, first_publish_year: publishYear }: IBook) => (
  <div className="aspect-[4/1] bg-gray-50 rounded-lg border border-gray-300 shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow">
    <h2 className="text-lg font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
      {title}
    </h2>
    <p className="text-sm text-gray-700">{publishYear}</p>
  </div>
);

export default Book;
