import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IConfigurations } from "../models";

@Injectable({
  providedIn: "root"
})
export class CosmosRestService {

  constructor(private http: HttpClient) { }

  getConfiguration(): Observable<IConfigurations> {
    // return this.http.get<IConfigurations>("assets/showcase/data/config25082021.small.json");
    return this.http.get<IConfigurations>("assets/showcase/data/config25082021.json");
  }

}
