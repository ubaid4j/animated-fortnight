import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../app.constants';
import {User} from '../../components/users/users.component';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    public getAllUsers(): Observable<object> {
        return this.http.get<User>(`${API_URL}/admin/`);
    }

    public deleteUser(id: number): Observable<object> {
        return this.http.delete(`${API_URL}/admin/${id}`);
    }

    public getUser(id: number): Observable<object> {
        return this.http.get(`${API_URL}/admin/${id}`);
    }

    public save(user: User): Observable<object> {
        if (user.id == null) {
            console.log(`Post Mapping`);
            return this.http.post(`${API_URL}/user/`, user);
        } else {
            console.log(`Put Mapping`);
            return this.http.put(`${API_URL}/admin/`, user);
        }
    }

}
