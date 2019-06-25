import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  sendEmail() {

    let url = `https://us-central1-cloud-functions-jacinto.cloudfunctions.net/httpEmail`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', 'kingofpandora@gmail.com');
    params.set('from', 'jacintonwong@gmail.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    return this.http.post(url, params)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })

  }

}
