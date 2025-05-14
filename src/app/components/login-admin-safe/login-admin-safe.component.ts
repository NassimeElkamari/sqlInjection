import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login-admin-safe',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-admin-safe.component.html',
  styleUrl: './login-admin-safe.component.css'
})
export class LoginAdminSafeComponent {
  username = '';
  password = '';
  response = '';

  constructor(private http: HttpClient, private router: Router) {} 

  login() {
    const body = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);

    this.http.post('http://localhost:8080/api/safe/login-safe', body, { responseType: 'text' })
      .subscribe({
        next: (res:any) => {
          this.response = res;
          if (res.toLowerCase().includes('success')) {
            this.router.navigate(['/EspaceAdmin']); 
          }
        },
        error: () => {
          this.response = 'Login failed ❌';
        }
      });
  }
}

