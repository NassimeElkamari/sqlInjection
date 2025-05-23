import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-student.component.html',
  styleUrl: './login-student.component.css'
})
export class LoginStudentComponent {
  username = '';
  password = '';
  response = '';
  user: any = null; 

  constructor(private http: HttpClient, private router: Router) {}
  login() {
    const body = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);

    this.http.post('http://localhost:8080/api/student-login-vuln', body, { responseType: 'json' })
      .subscribe({
        next: (res: any) => {
          this.response = res.message; 
          if (res.success) { 
            this.user = res.user; 
            localStorage.setItem('student', JSON.stringify(this.user)); 
            this.router.navigate(['/EspaceEtudiant']); 
          }
        },
        error: (err) => {
          this.response = 'Login failed ❌ ';
        }
      });
}

}
