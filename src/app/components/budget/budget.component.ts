import { Component, OnInit } from '@angular/core';
import { Criteria } from '../../entities/criteria';
import { MyCookieService } from '../../services/cookieService';
import { AppConstants } from 'src/app/constants/AppConstants';

declare var $: any;

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  criteria: Criteria;

  constructor(private myCookieService: MyCookieService) { }

  ngOnInit() {
    this.myCookieService.storeCookie(AppConstants.cookieBudget, '200');
    //this.criteria.budget = this.myCookieService.getCookie(AppConstants.cookieBudget);

    $(".js-range-slider").ionRangeSlider({
      type: "single",
      prefix: "$",
      skin: "round",
      min: 200,
      max: 900,
      from: 500,
      step: 25,
      grid: true,
      onUpdate: function (data) {
        // fired on changing slider with Update method
        console.log(data);
    }
    });
  }

}
