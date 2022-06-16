import { Component, OnInit } from '@angular/core';
import { PocketService } from './pocket/pocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pocket: any = {data:{url:"http://www.abc.com"}};
  targetUrl: string = "";

  constructor(private pocketService: PocketService) {
  }

  ngOnInit() {

  }

  //below code does not need debugging
  add() {
    this.pocketService.scrape({ target: this.targetUrl }).subscribe((data) => {
      this.pocket[data.url] = data;
      this.targetUrl = ''
    })
  }

}
