'use client';

import { useQuery } from '@tanstack/react-query';
import { getBooks } from './_frontend/util/apiIntegrations';
import { useState } from 'react';
import Search from './_frontend/components/Search';
import Content from './_frontend/components/Content';

export default function Home() {
  const [query, setQuery] = useState<[string, number]>(['', 1]);
  const [enabled, setEnabled] = useState(false);

  const currentPage = query[1] > 1;
  const { data, isError, isLoading } = useQuery({
    queryFn: getBooks,
    queryKey: [
      'books',
      `title=${query[0]}${currentPage ? `&page=${query[1]}` : ''}`,
    ],
    enabled,
  });

  return (
    <div className="flex flex-col ">
      <Search
        isError={isError}
        isLoading={isLoading}
        submitCallback={(title: string) => {
          setQuery([title, 1]);
          setEnabled(true);
        }}
      />
      <Content
        data={data}
        isLoading={isLoading}
        isError={isError}
        previousPage={(page) => {
          setQuery([query[0], page]);
        }}
        nextPage={(page) => {
          setQuery([query[0], page]);
        }}
      />
    </div>
  );
}
