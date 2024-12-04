import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private apiUrl = 'http://localhost:8080/api/noticias';

  constructor(private http: HttpClient) {}

  getNoticas(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(this.apiUrl);
  }

  getNoticiaById(id: number): Observable<Noticia>{
    return this.http.get<Noticia>(`${this.apiUrl}/${id}`);
  }

  createNoticia(Noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.apiUrl, Noticia);
  }

  updateNoticia(id: number, Noticia: Noticia): Observable<Noticia> {
    return this.http.put<Noticia>(`${this.apiUrl}/${id}`, Noticia);
  }

  deleteNoticia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
