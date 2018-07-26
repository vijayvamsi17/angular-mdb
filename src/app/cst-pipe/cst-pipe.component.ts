import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cst-pipe',
  templateUrl: './cst-pipe.component.html',
  styleUrls: ['./cst-pipe.component.scss']
})
export class CstPipeComponent implements OnInit {

  simpleDate = new Date()

  constructor() { }
 
  ngOnInit() {
  }

}
