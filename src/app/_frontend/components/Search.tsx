import { SyntheticEvent, useState } from 'react';

interface ISearch {
  submitCallback: (value: string, page?: number) => void;
  isLoading: boolean;
  isError: boolean;
}

const Search = ({ submitCallback, isLoading, isError }: ISearch) => {
  const [value, setValue] = useState('');

  const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    submitCallback(value);
  };

  const isDisabled = !Boolean(value) || isLoading || isError;

  return (
    <div className="flex justify-center items-start p-4 bg-gray-100 ">
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-3xl"
      >
        <input
          type="text"
          className="px-4 py-2 w-full sm:flex-grow border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-violet-500"
          placeholder="Search for a book..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`px-4 py-2 w-full sm:w-auto text-white rounded-md shadow-md ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-violet-600 hover:bg-violet-700'
          }`}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
