import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lang',
  templateUrl: './menu-lang.component.html',
  styleUrls: ['./menu-lang.component.scss'],
})
export class MenuLangComponent implements OnInit {
  lang: string;

  constructor() {}

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'pt';
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
