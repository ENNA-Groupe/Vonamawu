import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Magasinier } from '../../Models/magasinier.model';
import { SearchService } from '../../services/search.service';
import { Registrer } from '../../data/registrer.data';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  user: Magasinier;
  subs: Subscription;
  constructor(
     public searchService: SearchService,
     public registrer: Registrer,
     public authService: AuthService,
     public router: Router
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      (user) => {
        this.user = user;
        if (this.user.deleted_at) this.onLogout();
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  showDropdown() {
    $('.dropcard').toggle();
    $(".content").click(
      function() {
        $('.dropcard').hide();
      }
    )
  }



  onLogout() {
    this.authService.logout().then(
      (ok) => {
        if (ok) {
          this.router.navigate(['/public']);
        }
      }
    );
  }

}
