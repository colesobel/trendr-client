import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-market-status',
  templateUrl: 'market-status.component.html',
  styleUrls: ['market-status.component.css']
})
export class MarketStatusComponent implements OnInit {
  public nasdaqOpen: boolean = true
  public nyseOpen: boolean = false
  public amexOpen: boolean = false
  constructor() { }
  ngOnInit() { }

}
