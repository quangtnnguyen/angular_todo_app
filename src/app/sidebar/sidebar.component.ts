import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../app.component.scss', './sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  SIDEBAR_MENUS: string[] = ['The list', 'Archived'];
  selectedMenu: string;

  onSelect(menu: string): void {
    this.selectedMenu = menu;
  }
  ngOnInit(): void {
    this.selectedMenu = this.SIDEBAR_MENUS[0];
  }
}
