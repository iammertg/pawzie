import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private readonly LIST = Array.from(new Array(10)).map((_, i) => i + 1);

  public cards: number[];

  constructor() {
    this.cards = [...this.LIST];
  }

  public reset(): void {
    this.cards = [...this.LIST];
  }

  public removeBy(index: number): void {
    this.cards.splice(index, 1);
  }
  ngOnInit() {
  }
}
