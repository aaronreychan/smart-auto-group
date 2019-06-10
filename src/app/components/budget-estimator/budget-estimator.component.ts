import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-budget-estimator',
  templateUrl: './budget-estimator.component.html',
  styleUrls: ['./budget-estimator.component.css']
})
export class BudgetEstimatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".js-range-slider-1").ionRangeSlider({
      type: "single",
      prefix: "$",
      skin: "round",
      min: 5000,
      max: 75000,
      from: 15000,
      step: 500,
      // values: [ "5000", "40000", "75000" ],
      grid: true,
      onUpdate: function (data) {
        // fired on changing slider with Update method
        console.log(data);
    }
    });

    var custom_values = [ 12, 24, 36, 48, 60, 72, 84, 96 ];
    var my_from = custom_values.indexOf(72);

    $(".js-range-slider-2").ionRangeSlider({
      type: "single",
      skin: "round",
      min: 12,
      max: 96,
      from: my_from,
      step: 12,
      values: custom_values,
      grid: true,
      onUpdate: function (data) {
        // fired on changing slider with Update method
        console.log(data);
    }
    });
  }

}
