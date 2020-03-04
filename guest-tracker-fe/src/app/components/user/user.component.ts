import {Component, OnInit} from '@angular/core';
import {User} from '../users/users.component';
import {UserService} from '../../services/user/user.service';
import {AuthService} from '../../services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    private user: User;
    private buttonName = 'Update';

    constructor(
        private userService: UserService,
        private auth: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.user = new User(null, null, null, null, null, null);
        const id = this.route.snapshot.params.id;
        if (id === '-1') {
            this.buttonName = 'Create';
        } else {
            this.getTodo(id);
        }
    }

    private getTodo(id: number): void {
        this.userService.getUser(id).subscribe(
            response => {
                const user = response as User;
                console.log(user);
                this.handleRespose(user);
            }
        );
    }

    private handleRespose(user: User): void {
        this.user = user;
    }

    private log(): void {
    }

    private save(): void {
        console.log(this.user);
        console.log(`User ${this.auth.getAuthUser()}`);
        this.userService.save(this.user).subscribe(
            response => {
                console.log(response);
                const id = this.route.snapshot.params.id;
                if (id === '-1') {
                    this.router.navigate(['response']).then(r => {});
                } else {
                    this.router.navigate(['admin']).then(r => {});
                }

            },
            error => {
                console.log(error);
            }
        );
    }
}
