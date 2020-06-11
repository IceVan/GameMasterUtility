import { Component, OnInit } from '@angular/core';

import { DndTreasureService } from  './dnd-treasure.service';
import { DndTreasure } from '../model/dnd/DndTreasure'
import { DndGetTreasureResponse } from "../model/dnd/DndGetTreasureResponse";

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss'],
  providers: [ DndTreasureService ]
})
export class DndComponent implements OnInit {

  dndTreasureResponse: DndGetTreasureResponse;
  error: any;

  constructor(private dndTreasureService : DndTreasureService) { }

  test() : void {
    this.clear();

    this.dndTreasureService.getGenerateTreasureEndpointConfig()
    .subscribe(
      (data: DndGetTreasureResponse) => this.dndTreasureResponse = { ...data},
      error => this.error = error
    );
    console.log(this.dndTreasureResponse);

  }

  setGenerateTreasureParams(numberOfTreasures: number, encounterType: string) : void{
    this.dndTreasureService.setTreasureParams(numberOfTreasures, encounterType);
  }

  private clear() : void{
    this.error = undefined;
    this.dndTreasureResponse = undefined;
  }

  ngOnInit(): void {
    this.clear();
    this.dndTreasureService.clearTreasureParams();
  }

}
