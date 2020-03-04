import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {AUTH} from '../../app.constants';

@Component({
    selector: 'app-guest-login',
    templateUrl: './guest-login.component.html',
    styleUrls: ['./guest-login.component.css']
})
export class GuestLoginComponent implements OnInit {

    private username = 'guest';
    private password = 'guest';
    private isInValid = false;

    constructor(private router: Router,
                private auth: AuthService) {
    }

    ngOnInit() {
    }

    public login(): void {
        console.log('Before: isAuth: ' + sessionStorage.getItem(AUTH));
        this.auth.executeAuthenticationService(this.username, this.password).subscribe(value => {
            this.isInValid = false;
            this.router.navigate(['user', '-1']).then(r => {});
            // storing authUser in the browser session
            sessionStorage.setItem(AUTH, this.username);
            console.log('After: isAuth: ' + sessionStorage.getItem(AUTH));
        }, error => {
            this.isInValid = true;
        });
    }
}
