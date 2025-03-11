import type { IResponse } from '@/app/api/_utils/types.d.ts';

export const getBooks = async ({
  queryKey,
}: {
  queryKey: string[];
}): Promise<IResponse> =>
  await fetch(`/api/books?${queryKey[1]}`)
    .then((response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      }

      throw new Error('Something wrong');
    })
    .then(({ data }) => data);
