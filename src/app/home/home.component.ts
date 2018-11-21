import {  WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isBrowser= false;

  
  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId,
    private titleService: Title
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
    
    this.titleService.setTitle('DiDi Delivery');
  }

  ngOnInit() {
  }
}