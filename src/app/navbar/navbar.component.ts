import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import {UserService} from '../user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition(':enter',[animate(300)]),
      transition(':leave',[animate(500)]),
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService:UserService,
    @Inject(DOCUMENT) document
  ) { }

  ngOnInit() { 
    this.onWindowScroll();
  }

  @HostListener('window:scroll',['$event'])
  onWindowScroll(){
    if (window.pageYOffset >0) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    }
    // else {
    //  let element = document.getElementById('navbar');
    //    element.classList.remove('sticky'); 
    // }
  }
  
}
