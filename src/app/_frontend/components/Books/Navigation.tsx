interface INavigation {
  page: number;
  showNext: boolean;
  nextPage: (page: number) => void;
  previousPage: (page: number) => void;
}

const Navigation = ({
  page,
  showNext,
  nextPage,
  previousPage,
}: INavigation) => (
  <div className="flex items-center space-x-4 mt-6">
    {page > 1 && (
      <button
        tabIndex={0}
        onClick={() => previousPage(page - 1)}
        className="px-4 py-2 bg-violet-600 text-white rounded-md shadow-md hover:bg-violet-700"
      >
        ←
      </button>
    )}
    <span className="text-lg font-medium text-gray-800">{`Page ${page}`}</span>
    {showNext ? (
      <button
        tabIndex={0}
        onClick={() => nextPage(page + 1)}
        className="px-4 py-2 bg-violet-600 text-white rounded-md shadow-md hover:bg-violet-700"
      >
        →
      </button>
    ) : (
      false
    )}
  </div>
);

export default Navigation;
