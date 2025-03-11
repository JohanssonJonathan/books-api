import { openLayerApi } from './consts';
import type { IResponse } from './types.d.ts';

interface IGetBooks {
  title: string;
  page: number;
}

const getBooks = async (query: IGetBooks): Promise<IResponse> => {
  const amountPerPage = 10;

  const { page } = query;
  const currentOffset = page > 1;
  const value = page - 1;
  const title = query.title ? 'q=' + query.title : '';
  const offset = `&offset=${currentOffset ? value * amountPerPage : 0}`;

  const url = `${openLayerApi}?${title}${offset}&limit=${amountPerPage + 1}&fields=title, author_name, key, first_publish_year&sort=rating`;

  return fetch(url).then((response) => {
    if (response.ok && response.status === 200) {
      return response.json();
    }

    throw new Error('Failed fetching the books');
  });
};

export default getBooks;
