import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ArticuloFamilia, ArticulosFamilias} from "../models/articulo-familia";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticulosFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://pav2.azurewebsites.net/api/ArticulosFamilias/";
  }

  get(): Observable<ArticuloFamilia[]> {
    return this.httpClient.get<ArticuloFamilia[]>(this.resourceUrl);
  }
}
