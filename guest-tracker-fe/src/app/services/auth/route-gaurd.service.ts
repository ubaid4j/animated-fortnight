import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteGaurdService {
    constructor(private auth: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  {

        if (this.auth.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['welcome']).then();
        return false;
    }

}
