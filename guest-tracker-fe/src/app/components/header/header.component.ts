import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    private isLoggedIn = false;
    private user = '';

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.user = this.auth.getAuthUser();
        this.isLoggedIn = this.auth.isUserLoggedIn();
    }

}
