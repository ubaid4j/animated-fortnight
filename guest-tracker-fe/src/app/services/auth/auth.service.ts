import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_URL} from '../../app.constants';

export const AUTHUSER = 'authUser';
export const AUTHTOKEN = 'authToken';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tempUser: string;
    private tempPassword: string;
    private tempToken: string;

    constructor(private http: HttpClient) {

    }

    public createBasicAuthHeaderString(username: string, password: string): string {
        return 'Basic ' + window.btoa(username + ':' + password);
    }


    public executeAuthenticationService(username: string, password: string): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: this.createBasicAuthHeaderString(username, password)
        });
        console.log('auth.service.ts line 33', username, password, headers);
        console.log(this.createBasicAuthHeaderString(username, password));

        const options = {
            headers
        };

        console.log(`${API_URL}/auth/user`, options);
        return this.http.post(`${API_URL}/auth/user`, options).pipe(
            map(data => {
                console.log(data);
                sessionStorage.setItem(AUTHUSER, username);
                sessionStorage.setItem(AUTHTOKEN, this.createBasicAuthHeaderString(username, password));
                return data;
            })
        );
    }

    public getAuthUser(): string {
        return sessionStorage.getItem(AUTHUSER);
    }

    public getAuthToken(): string {
        return sessionStorage.getItem(AUTHTOKEN);
    }

    public isUserLoggedIn(): boolean {
        return this.getAuthUser() != null;
    }

    public logout(): void {
        sessionStorage.removeItem(AUTHUSER);
        sessionStorage.removeItem(AUTHTOKEN);
        // this.http.post(`${API_URL}/logout`, null).subscribe(res => {
        //     console.log(res);
        // }, err => {
        //     console.log(err);
        // });
    }

    // *****************************Temp*********************************/
    public getTempUser(): string {
        return this.tempUser;
    }

    public getTempPassword(): string {
        return this.tempPassword;
    }

    public getTempToken(): string {
        return this.tempToken;
    }
}
