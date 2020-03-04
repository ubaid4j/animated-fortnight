import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

export class User {
    constructor(
        public id: number,
        public username: string,
        public days: number,
        public floor: number,
        public date: Date,
        public approved: boolean
    ) {
    }
}


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private users: User[];
    private info: string = null;

    constructor(private auth: AuthService,
                private router: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        this.refresh();
    }

    private refresh(): void {
        this.userService.getAllUsers().subscribe(
            response => {
                const users = response as User[];
                this.handleResponse(users);
            }
        );
    }

    private handleResponse(res: User[]) {
        this.users = res;
    }

    private deleteTodo(id: number): void {
        this.userService.deleteUser(id).subscribe(
            success => {
                this.refresh();
                this.info = `Request of Accommodation of id number ${id} successfully deleted`;
                this.dropInfo();
            }
        );
    }

    private approveUser(user: User): void {
        user.approved = true;
        this.userService.save(user).subscribe(
            success => {
                this.refresh();
                this.info = `Request of Accommodation of id number ${user.id} successfully approved`;
                this.dropInfo();
            }
        );
    }


    private dropInfo(): void {
        setTimeout(function() {
            this.info = null;
            console.log('drop info');
        }, 2000);
    }

    private udpate(id: number): void {
        this.router.navigate(['user', id]).then(r => {
        });
    }

    // private add(): void {
    //     this.router.navigate(['users', -1]).then(r => {
    //     });
    // }
    // private isApproved(user: User): boolean {
    //     return user.approved;
    // }
}
