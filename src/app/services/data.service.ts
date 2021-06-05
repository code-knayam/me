import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../shared/constants';
import { IAboutResponse } from '../shared/interfaces/about-response.interface';
import { IContactResponse } from '../shared/interfaces/contact-response.interface';
import { ISkillResponse } from '../shared/interfaces/skill-response.interface';
import { IWorkResponse } from '../shared/interfaces/work-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWorks(): Observable<IWorkResponse> {
    return this.http.get<IWorkResponse>(API_ENDPOINTS.WORKS);
  }

  getSkills(): Observable<ISkillResponse> {
    return this.http.get<ISkillResponse>(API_ENDPOINTS.SKILLS);
  }

  getContact(): Observable<IContactResponse> {
    return this.http.get<IContactResponse>(API_ENDPOINTS.CONTACT);
  }

  getAbout(): Observable<IAboutResponse> {
    return this.http.get<IAboutResponse>(API_ENDPOINTS.ABOUT);
  }
}
