import { Component } from '@angular/core'

@Component({
  selector: 'navbar',
  templateUrl: 'Navbar.component.html',
  styleUrls: [ 'Navbar.component.css' ]
})
export class NavbarComponent {
  contentBody: any
  navBarHidden: boolean
  dropdownData = [
    { title: 'Company', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Games', children: [
       { title: 'J.A.C.G', href: '' } 
    ] },
    { title: 'Discord', children: [
      { title: 'Guild', href: '' },
      { title: 'Bots', href: '' }
    ] },
    { title: 'Twitch', children: [ 
      { title: 'Widgets', href: '' } 
    ] },
  ]
  
  ngOnInit() {
    this.contentBody = document.getElementsByClassName('content')[0]
  }

  changeNavState() {
    if(!this.navBarHidden) {
      this.contentBody.style.height = `100%`      
    } else {
      this.contentBody.style.height = `calc(100% - 100px)`
    }
    
    this.navBarHidden = !this.navBarHidden
  }
}