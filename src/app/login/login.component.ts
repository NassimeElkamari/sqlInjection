import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  response = '';

  constructor(private http: HttpClient, private router: Router) {} 

  login() {
    const body = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);

    this.http.post('http://localhost:8080/api/login-vuln', body, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.response = res;
          if (res.toLowerCase().includes('success')) {
            this.router.navigate(['/EspaceAdmin']);
          }
        },
        error: (err) => {
          this.response = 'Login failed ❌';
        }
      });
  }
}
