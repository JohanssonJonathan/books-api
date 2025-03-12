interface IBook {
  // author_key: string[];
  // author_name: string[];
  // cover_edition_key: string;
  // cover_i: number;
  // edition_count: number;
  first_publish_year: number;
  // has_fulltext: boolean;
  key: string;
  // language: string[];
  // public_scan_b: boolean;
  title: string;
}

export interface IResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: number;
  docs: IBook[];
}
