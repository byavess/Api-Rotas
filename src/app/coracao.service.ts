import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoracaoService {

apiCoracaoUrl = 'http://localhost:3001/DadosCliente';

  constructor(
        private _http: HttpClient
    ) { }

  listar() {
    return this._http.get<any[]>(`${this.apiCoracaoUrl}`) //indo buscar os registros
 console.log(this.listar, "navegando.....")
  }
}
