import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { IAboutResponse } from '../shared/interfaces/about-response.interface';
import { IContactResponse } from '../shared/interfaces/contact-response.interface';
import { ISkillResponse } from '../shared/interfaces/skill-response.interface';
import { IWorkResponse } from '../shared/interfaces/work-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_ENDPOINTS;

  constructor(private http: HttpClient) {
    this.API_ENDPOINTS = environment.API_ENDPOINTS;
  }

  getWorks(): Observable<IWorkResponse> {
    return this.http.get<IWorkResponse>(this.API_ENDPOINTS.WORKS);
  }

  getSkills(): Observable<ISkillResponse> {
    return this.http.get<ISkillResponse>(this.API_ENDPOINTS.SKILLS);
  }

  getContact(): Observable<IContactResponse> {
    return this.http.get<IContactResponse>(this.API_ENDPOINTS.CONTACT);
  }

  getAbout(): Observable<IAboutResponse> {
    return this.http.get<IAboutResponse>(this.API_ENDPOINTS.ABOUT);
  }
}
