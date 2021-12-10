import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(
        private http: HttpClient
    ) { }

    public getLogs(): Observable<any> {
        let url = `https://energy-consumption-catolica.herokuapp.com/api/consumption`;
        return this.http.get<any>(url);
    }
    
    public getStatus(): Observable<any> {
        let url = `https://energy-consumption-catolica.herokuapp.com/api/system/`;   
        return this.http.get<any>(url);
    }

    public getCoast(): Observable<any> {
        let url = `https://energy-consumption-catolica.herokuapp.com/api/consumption/calculate`;   
        return this.http.get<any>(url);
    }

    
}
