import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {
    constructor(private auth: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('15------------------------15------------------------15');
        if (this.auth.isUserLoggedIn()) {
            console.log('15------------------------15------------------------15');
            const headers = new HttpHeaders({
                Authorization : this.auth.getAuthToken()
            });
            req = req.clone({
                headers
            });
        }
        return next.handle(req);
    }
}
