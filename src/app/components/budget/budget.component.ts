import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
