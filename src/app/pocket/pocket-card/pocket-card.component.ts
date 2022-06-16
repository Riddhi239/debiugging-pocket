import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocket-card',
  templateUrl: './pocket-card.component.html',
  styleUrls: ['./pocket-card.component.css']
})
export class PocketCardComponent implements OnInit {

  @Input()
  metadata: any;

  constructor() { }

  ngOnInit(): void {
    this.metadata = {
      target:"http://www.bbc.com",
      image:"../assets/pocket.png",
      title:"Pocket",
      description:"Debugging in Pocket"
    }
  }

}
