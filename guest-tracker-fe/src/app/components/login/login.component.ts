import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {AUTH} from '../../app.constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private username = 'admin';
    private password = 'admin';
    private isInValid = false;

    constructor(private router: Router,
                private auth: AuthService) {
    }

    ngOnInit() {
    }

    public whenClick(): void {
        console.log('Before: isAuth: ' + sessionStorage.getItem(AUTH));
        this.auth.logout();
        this.auth.executeAuthenticationService(this.username, this.password).subscribe(value => {
            this.isInValid = false;
            this.router.navigate(['admin']).then(r => {});
            // storing authUser in the browser session
            sessionStorage.setItem(AUTH, this.username);
            console.log('After: isAuth: ' + sessionStorage.getItem(AUTH));
        }, error => {
            console.log(error);
            this.isInValid = true;
        });
    }


}
