import { NextRequest, NextResponse } from 'next/server';
import cache from '../_utils/cache';
import getBooks from '../_utils/getBooks';

export async function GET(request: NextRequest) {
  const reqUrl = request.url;
  const { searchParams } = new URL(reqUrl);
  const stringKeys = searchParams.toString();
  const cachedData = cache.get(stringKeys);

  if (cachedData) {
    return NextResponse.json({ source: 'cache', data: cachedData });
  }

  const { title, page, ...rest } = Object.fromEntries(searchParams.entries());

  if (Object.keys(rest)?.length) {
    return new Response(
      JSON.stringify({
        message: 'Invalid parameters passed',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const data = await getBooks({
      title,
      page: Number(page),
    });
    if (data?.docs.length) {
      cache.set(stringKeys, data);
    }
    return NextResponse.json({ source: 'external', data: data });
  } catch (err) {
    const currentError = err as unknown as Error;

    console.error(currentError.message);
  }

  return new Response(
    JSON.stringify({
      message: 'Internal server error',
    }),
    {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
