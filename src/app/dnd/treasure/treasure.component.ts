import { Component, OnInit, Input } from '@angular/core';
import { DndGetTreasureResponse } from "../../model/dnd/DndGetTreasureResponse";

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss']
})
export class TreasureComponent implements OnInit {

  @Input() dndTreasureResponse: DndGetTreasureResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
