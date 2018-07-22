import { Component, OnInit } from '@angular/core';
import { cars } from './cars';

@Component({
  selector: 'app-cst-directive',
  templateUrl: './cst-directive.component.html',
  styleUrls: ['./cst-directive.component.scss']
})
export class CstDirectiveComponent implements OnInit {

  cars = cars;
  isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = false;
  }

}
