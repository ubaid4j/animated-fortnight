import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './components/admin/admin.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {GuestLoginComponent} from './components/guest-login/guest-login.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {AuthService} from './services/auth/auth.service';
import {HttpIntercepterService} from './services/http/http-intercepter.service';
import { ResponseComponent } from './components/response/response.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FooterComponent,
        HeaderComponent,
        AdminComponent,
        WelcomeComponent,
        GuestLoginComponent,
        UserComponent,
        UsersComponent,
        ResponseComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
