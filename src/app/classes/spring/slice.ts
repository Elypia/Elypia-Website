export interface Slice<T> {
  content: T;
  pageable: Pageable;
  number: number;
  sort: Sort;
  size: number;
  first: boolean;
  numberOfElements: number;
  last: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
