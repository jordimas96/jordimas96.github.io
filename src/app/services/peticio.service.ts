import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class PeticioService {
  
    constructor(private http: HttpClient) { }

    public get(url: string, onSuccess, onFail = (e) => console.error(e)) {
        this.http.get(url).subscribe({
            next: (data) => onSuccess(data),
            error: (e) => onFail(e),
        });
    }
    public getText(url: string, onSuccess, onFail = (e) => console.error(e)) {
        this.http.get(url,{ responseType: 'text' }).subscribe({
            next: (data) => onSuccess(data),
            error: (e) => onFail(e),
        });
    }

}
