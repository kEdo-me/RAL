import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export class ApiBaseService {
  private readonly apiUrlBase = `https://localhost:7098/Ral`;
  private client: HttpClient

  constructor(private http: HttpClient) {
    this.client = http;
  }

  protected get<T>(path?: string): Observable<T> {
    return this.client.get<T>(`${this.apiUrlBase}${path ?? ''}`);
  }

  protected post<T>(path: string, body: any): Observable<T> {
    return this.client.post<T>(this.apiUrlBase + path, body);
  }

  protected put<T>(path: string, body: any): Observable<T> {
    return this.client.put<T>(this.apiUrlBase + path, body);
  }

  protected emptyPut<T>(path: string): Observable<T> {
    return this.client.put<T>(this.apiUrlBase + path, null);
  }

  protected delete<T>(path: string): Observable<T> {
    return this.client.delete<T>(this.apiUrlBase + path);
  }
}
