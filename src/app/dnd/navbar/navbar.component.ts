import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GetTreasureParams } from '../treasure/GetTreasureParams'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() getTreasureParams = new EventEmitter<GetTreasureParams>();

  constructor() { }

  generateTreasure(numberOfTreasures: number, encounterType: string) {
    // this.getTreasureParams.emit(new GetTreasureParams(numberOfTreasures >== 1 ? numberOfTreasures : 0, encounterType !== undefined ? encounterType : "EARLY"));
    this.getTreasureParams.emit({numberOfTreasures: numberOfTreasures, encounterType: encounterType});
  }

  ngOnInit(): void {
  }

}
