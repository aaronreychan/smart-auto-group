import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Toggle() {
    if (window.innerWidth < 1200) {
      var x = document.getElementById("nav");
      var y = document.getElementById("menu-bars");
      x.classList.toggle("nav-expand");
      y.classList.toggle("change");
    }
  }

}
