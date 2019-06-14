import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Criteria } from '../../entities/criteria';
import { MyCookieService } from '../../services/cookieService';
import { AppConstants } from 'src/app/constants/AppConstants';

declare var $: any;

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, AfterViewInit {

  criteria: Criteria;

  constructor(private myCookieService: MyCookieService) { }

  ngOnInit() {
    this.myCookieService.storeCookie(AppConstants.cookieBudget, '250');
    this.myCookieService.storeCookie(AppConstants.cookieCarType, 'car');
    this.criteria = new Criteria();
    this.criteria.budget = this.myCookieService.getCookie(AppConstants.cookieBudget);

    $(".js-range-slider").ionRangeSlider({
      type: "single",
      prefix: "$",
      skin: "round",
      min: 200,
      max: 900,
      from: this.criteria.budget,
      step: 25,
      grid: true,
      onFinish: function (data) {
          // fired on changing slider with Update method
          console.log(data);
          debugger;
          document.cookie = AppConstants.cookieBudget + '=' + data.from + ';';
      }
    });

  }

  ngAfterViewInit(){
    var carType = this.myCookieService.getCookie(AppConstants.cookieCarType);
    $("#"+carType).prop('checked', true);
  }
  
  public storeCookie(name:any, val: any) {
    this.myCookieService.storeCookie(name, val);
  }

  carSelected() {
    var carSelectedType = $("input[type='radio'][name='car-select']:checked");
    console.log(carSelectedType);
  }

  mobileCarSelected() {
    var mobileCarSelectedType = $("input[type='radio'][name='mobile-car-select']:checked");
    console.log(mobileCarSelectedType);
  }

}
