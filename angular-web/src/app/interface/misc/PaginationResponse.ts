export interface PaginationResponse<T> {
  entityName: string;
  status: string;
  data: T[];
  errorMessage: string | null;
  totalCount: number;
  pageIndex: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
