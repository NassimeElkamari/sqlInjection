import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-espace-student',
  imports: [CommonModule],
  templateUrl: './espace-student.component.html',
  styleUrl: './espace-student.component.css'
})
export class EspaceStudentComponent {
  currentPage: string = 'profile';
  isCollapsed: boolean = false;

  student: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve the user from localStorage
    const user = JSON.parse(localStorage.getItem('student') || '{}');
    
    // Ensure the user is logged in before making the request
    if (user && user.username) {
      // Use the username from the logged-in user
      this.http.get(`http://localhost:8080/api/student-info?username=${user.username}`)
        .subscribe((res: any) => {
          this.student = res;
        });
    } else {
      console.error('No user found in localStorage');
    }
  }

  setPage(page: string) {
    this.currentPage = page;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
