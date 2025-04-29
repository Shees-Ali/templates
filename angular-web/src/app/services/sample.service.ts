import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api/api.service';
import { UtilityService } from './utility/utility.service';
import { NetworkService } from './api/network.service';
import { APIResponse } from '../interface/api/APIResponse';

@Injectable({
  providedIn: 'root',
})
export class SampleService extends NetworkService {
  private baseURL = 'Sample';

  constructor(api: ApiService, router: Router, utility: UtilityService) {
    super(api, router, utility);
  }

  /**
   * Create a new sample entity
   * @param data Entity data to create
   * @returns Promise with the created entity
   */
  createEntity(data: any): Promise<APIResponse<any>> {
    return this.httpPostResponse(this.baseURL, data);
  }

  /**
   * Search for sample entities
   * @param params Search parameters
   * @returns Promise with search results
   */
  searchEntities(params: any = {}): Promise<APIResponse<any[]>> {
    const queryParams = this.serialize(params);
    return this.httpGetResponse(
      `${this.baseURL}/search${queryParams ? '?' + queryParams : ''}`
    );
  }

  /**
   * Get a specific sample entity
   * @param id Entity ID
   * @returns Promise with the entity
   */
  getEntity(id: string): Promise<APIResponse<any>> {
    return this.httpGetResponse(`${this.baseURL}/${id}`);
  }

  /**
   * Update a sample entity
   * @param data Entity data to update
   * @returns Promise with the updated entity
   */
  updateEntity(data: any): Promise<APIResponse<any>> {
    return this.httpPutResponse(`${this.baseURL}`, data);
  }
}
