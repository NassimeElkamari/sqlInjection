import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
{ path: 'login/student', component: LoginStudentComponent },
{ path: 'login/admin', component: LoginComponent },

];
