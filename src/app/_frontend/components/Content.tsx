'use client';

import { IResponse } from '@/app/api/_utils/types';
import Books from './Books';

interface IContent {
  data?: IResponse;
  isLoading: boolean;
  isError: boolean;
  nextPage: (page: number) => void;
  previousPage: (page: number) => void;
}

const Content = ({
  isLoading,
  isError,
  data,
  nextPage,
  previousPage,
}: IContent) => {
  if (isError) {
    return (
      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="text-center mt-16">
          <h1 className="text-2xl font-bold text-red-600">
            Something went wrong
          </h1>
          <p className="text-gray-700 mt-2">
            Please try again or contact support if the issue persists.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-30 w-30 border-t-4 border-blue-500 border-solid border-gray-300"></div>
      </div>
    );
  }

  if (data?.docs.length === 0) {
    return (
      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="text-center mt-16">
          <h1 className="text-2xl font-bold text-red-600">
            Unfortunately, the search did not find any books
          </h1>
          <p className="text-gray-700 mt-2">
            Please try refining your search or check back later for updated
            results.
          </p>
        </div>
      </div>
    );
  }

  console.log('data: ', data);
  if (data) {
    return (
      <Books data={data} nextPage={nextPage} previousPage={previousPage} />
    );
  }

  return false;
};
export default Content;
