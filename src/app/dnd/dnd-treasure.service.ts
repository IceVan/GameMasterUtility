import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { DndGetTreasureResponse } from '../model/dnd/DndGetTreasureResponse';
import { GetTreasureParams } from "./treasure/GetTreasureParams";

@Injectable({
  providedIn: 'root'
})
export class DndTreasureService {

  private GENERATE_TREASURE_ENDPOINT : string = 'http://localhost:8080/dnd/treasure/getTreasure';

  getTreasureParams : GetTreasureParams;

  constructor(private http : HttpClient) { }

  getGenerateTreasureEndpointConfig(){
    let params = new HttpParams().set("numberOfTreasures", this.getTreasureParams.numberOfTreasures.toString()).set("encounterType", this.getTreasureParams.encounterType);
      return this.http.get<DndGetTreasureResponse>(this.GENERATE_TREASURE_ENDPOINT, {params: params});
  }

  setTreasureParams(numberOfTreasures: number, encounterType: string) : void{
    this.getTreasureParams = undefined;
    this.getTreasureParams = {numberOfTreasures: numberOfTreasures, encounterType: encounterType};
  }

  clearTreasureParams() : void{
    this.getTreasureParams = undefined;
  }
}
