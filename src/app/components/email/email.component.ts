import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyCookieService} from '../../services/cookieService';
import {AppConstants} from '../../constants/AppConstants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnDestroy {
    public form: FormGroup = this._builder.group({
        firstAndLastName: ['', [Validators.required]],
        tel: ['', [Validators.required, Validators]],
        email: ['', [Validators.required, Validators.email]],
    }, );
    public endpoint = 'https://us-central1-smart-auto-group.cloudfunctions.net/httpEmail';
    private unsubscribe: ReplaySubject<any> = new ReplaySubject<any>(1);
    public isSending: boolean = false;
    public isShowMsg: boolean = false;

    constructor(private http: HttpClient,
                private _builder: FormBuilder,
                private myCookieService: MyCookieService) {
    }

    send() {
        const headers: HttpHeaders = new HttpHeaders();
        const logoUrl: string = 'https://firebasestorage.googleapis.com/v0/b/smart-auto-group.appspot.com/' +
            'o/Logo_email.png?alt=media&token=d7b2d97f-9b19-4dae-8c28-aa4ed90e815c';
        this.form.value.tel = this.form.value.tel.substring(0, 14);
        const data = {
            from: this.form.value.email,
            content: `
                  <table cellpadding="0" cellspacing="0" border="0"
                  style="font-size: 15px; border-collapse: collapse; font-family: Arial, 'helvetica', sans-serif;">
                        <tbody>
                        <tr>
                            <td style="text-align: center">
                                <a href="https://smart-auto-group.firebaseapp.com">
                                    <img src="${logoUrl}"
                                        alt="Smart Auto Group" width="220" height="120">
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" style="font-size: 15px;
                    border-collapse: collapse; font-family: Arial,'helvetica', sans-serif;">
                        <tbody>
                        <tr style="margin-top: 20px;">
                            <td colspan="2" style="font-family: Michroma; font-size: 30px;">Smart Auto Group
                            </td>
                        </tr>
                        <tr style="margin-top: 40px;">
                            <td>Name</td>
                            <td style="font-weight: 600; margin-left: 30px;">
                                ${this.form.value.firstAndLastName}</td>
                        </tr>
                        <tr style="margin-top: 10px;">
                            <td>Mobile Phone</td>
                            <td style="font-weight: 600; margin-left: 30px;">${this.form.value.tel}</td>
                        </tr>
                        <tr style="margin-top: 10px;">
                            <td>E-mail</td>
                            <td style="font-weight: 600; margin-left: 30px;">${this.form.value.email}</td>
                        </tr>
                        <tr style="margin-top: 10px;">
                            <td>Budget</td>
                            <td style="font-weight: 600; margin-left: 30px;">
                                $${this.myCookieService.getCookie(AppConstants.cookieBudget)}</td>
                        </tr>
                        <tr style="margin-top: 10px;">
                            <td>Car type</td>
                            <td style="font-weight: 600; margin-left: 30px;">
                                ${this.myCookieService.getCookie(AppConstants.cookieCarType)}</td>
                        </tr>
                    </table>`
        };
        this.isSending = true;
        this.http.post(this.endpoint, JSON.stringify(data), {headers}).pipe(takeUntil(this.unsubscribe)).subscribe(
            val => {
                this.isSending = false;
                this.form.reset();
                this.showEmailMsg();
            },
            err => {
                this.isSending = false;
                this.form.reset();
                this.showEmailMsg();
            }
        );
    }

    showEmailMsg(): void {
        this.isShowMsg = true;
        setTimeout(() => {
            this.isShowMsg = false;
        }, 7000);
    }

    public ngOnDestroy() {
        this.unsubscribe.next(null);
        this.unsubscribe.complete();
    }
}
