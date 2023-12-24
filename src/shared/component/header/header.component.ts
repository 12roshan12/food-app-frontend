import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderCoponent implements OnInit {
    isAuthorized = true
  ngOnInit(): void {
  }


  goto(link:any){
    if(link == "") return
    window.open(link, "_blank");
  }

  signout() {

  }

}
