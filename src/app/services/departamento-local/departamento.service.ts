import { Injectable } from '@angular/core';
import { Departamento } from '../../models/departamento.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl = 'http://localhost:8080/api/departamentos';

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }

  getDepartamentoById(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.apiUrl}/${id}`);
  }

}