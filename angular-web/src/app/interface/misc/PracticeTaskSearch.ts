export interface PracticeTaskSearchParams {
  practiceOwnerDepartmentId: string;
  practiceValidity?: string;
  requestStatus?: number;
  pillar: string;
  pageNumber?: number;
  pageSize?: number;
}
