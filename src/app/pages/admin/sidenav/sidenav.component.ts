import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public loginService:LoginService,
                private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.loginService.logout();
    //window.location.reload();
    this.router.navigate(['login']);
  }

  routerClick(path : any)
  {
    this.router.navigate([`${path}`]);
  }  
}
