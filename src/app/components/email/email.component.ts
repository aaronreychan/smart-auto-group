import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

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
    var jsonBody = {
      budget: 200
    };
    this.http.post('https://us-central1-cloud-functions-jacinto.cloudfunctions.net/httpEmail', jsonBody)
  }

}
