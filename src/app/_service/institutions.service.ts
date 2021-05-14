import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({ providedIn: 'root' })

export class InstitutionService {
  constructor(private http: HttpClient) {}

  getInstitutions() {
    return this.http
      .get(`${environment.apiUrl}/instituicoes`)
      .toPromise();
  }
}
