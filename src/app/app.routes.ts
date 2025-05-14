import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { LoginComponent } from './login/login.component';
import { EspaceAdminComponent } from './components/espace-admin/espace-admin.component';
import { EspaceStudentComponent } from './components/espace-student/espace-student.component';
import { LoginAdminSafeComponent } from './components/login-admin-safe/login-admin-safe.component';
import { LoginStudentSafeComponent } from './components/login-student-safe/login-student-safe.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
{ path: 'login/student/safe', component: LoginStudentSafeComponent },
{ path: 'login/student', component: LoginStudentComponent },
{ path: 'login/admin', component: LoginComponent },
{ path: 'login/admin/safe', component: LoginAdminSafeComponent },
{ path: 'EspaceAdmin', component: EspaceAdminComponent },
{ path: 'EspaceEtudiant', component: EspaceStudentComponent },

];
