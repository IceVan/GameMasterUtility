import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { DndGetTreasureResponse } from '../model/dnd/DndGetTreasureResponse'

@Injectable({
  providedIn: 'root'
})
export class DndTreasureService {

  private GENERATE_TREASURE_ENDPOINT : string = 'http://localhost:8080/dnd/treasure/getTreasure?numberOfTreasures=3&encounterType=MID';

  constructor(private http : HttpClient) { }

  getGenerateTreasureEndpointConfig(){
      return this.http.get<DndGetTreasureResponse>(this.GENERATE_TREASURE_ENDPOINT);
  }
}
