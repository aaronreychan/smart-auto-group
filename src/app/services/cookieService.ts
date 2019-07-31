import { CookieService } from 'ngx-cookie';
import { Injectable } from '@angular/core';

@Injectable()
export class MyCookieService {

constructor(private cookieService: CookieService) { }
    getCookie(name: string): string {
        return this.cookieService.get(name);
    }

    storeCookie(name: string, value: any) {
        this.cookieService.put(name, value);
    }
}
