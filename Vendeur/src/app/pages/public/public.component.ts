import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    // $("#hero .rotating").Morphext({
    //   animation: "flipInX",
    //   separator: ",",
    //   speed: 3000
    // });
  }

  // Hero rotating text
  
}
