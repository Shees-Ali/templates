export interface APIResponse<T> {
  data: T;
  entityName: string;
  errorMessage: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageIndex: number;
  status: string;
  totalCount: number;
  totalPages: number;
}
