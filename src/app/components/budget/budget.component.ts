import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Criteria } from '../../entities/criteria';
import { MyCookieService } from '../../services/cookieService';
import { AppConstants, } from 'src/app/constants/AppConstants';
import { allCar, Car} from '../../entities/car';

declare var $: any;

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, AfterViewInit {
  public allCar: Car[] = allCar;
  public chosenCarNumber = 0;
  criteria: Criteria;

  constructor(private myCookieService: MyCookieService) { }

  ngOnInit() {
    this.myCookieService.storeCookie(AppConstants.cookieBudget, '250');
    this.myCookieService.storeCookie(AppConstants.cookieCarType, 'car');
    this.criteria = new Criteria();
    this.criteria.budget = this.myCookieService.getCookie(AppConstants.cookieBudget);

    $('.js-range-slider').ionRangeSlider({
      type: 'single',
      prefix: '$',
      skin: 'round',
      min: 100,
      max: 1900,
      from: this.criteria.budget,
      step: 5,
      grid: true,
      onFinish: function (data) {
          // fired on changing slider with Update method
          console.log(data);
          document.cookie = AppConstants.cookieBudget + '=' + data.from + ';';
      }
    });
  }

  ngAfterViewInit() {
    $('#' + this.myCookieService.getCookie(AppConstants.cookieCarType)).prop('checked', true);
  }

  carSelected(index) {
    this.chosenCarNumber = index;
  }

  public addValueToCookie() {
    this.myCookieService.storeCookie(AppConstants.cookieCarType,  allCar.filter((val, i) => this.chosenCarNumber === i)[0].name);
  }
}
