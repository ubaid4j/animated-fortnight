import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {GuestLoginComponent} from './components/guest-login/guest-login.component';
import {UserComponent} from './components/user/user.component';
import {ResponseComponent} from './components/response/response.component';
import {RouteGaurdService} from './services/auth/route-gaurd.service';
import {LogoutComponent} from './components/logout/logout.component';

// Here I have defined routes for different components and they are protected by Gaurd Service
const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'login/admin', component: LoginComponent},
    {path: 'login/user', component: GuestLoginComponent},
    {path: 'admin', component: AdminComponent, canActivate: [RouteGaurdService]},
    {path: 'response', component: ResponseComponent, canActivate: [RouteGaurdService]},
    {path: 'user/:id', component: UserComponent, canActivate: [RouteGaurdService]},
    {path: 'logout', component: LogoutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
