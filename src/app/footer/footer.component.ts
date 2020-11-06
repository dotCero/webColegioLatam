import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    public actualYear: number;

  constructor() {
      this.actualYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
