import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-espace-admin',
  imports: [CommonModule],
  templateUrl: './espace-admin.component.html',
  styleUrl: './espace-admin.component.css'
})
export class EspaceAdminComponent {
  currentPage: string = 'dashboard';
  isCollapsed: boolean = false;

  selectPage(page: string) {
    this.currentPage = page;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
