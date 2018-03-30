import { Component } from '@angular/core'

@Component({
  selector: 'animated-logo',
  templateUrl: 'Logo.component.html',  
  styleUrls: [ 'Logo.component.css' ]
})
export class LogoComponent {
  logo: any
  interval: any
  animatedPos: number = 0

  ngOnInit() {
    this.logo = document.getElementsByClassName('logo')[0]

    this.logo.addEventListener('mouseover', () => {
      clearInterval(this.interval)    
      this.interval = setInterval(() => { this.animate(true) }, 25)
    })
    
    this.logo.addEventListener('mouseleave', () => {
      clearInterval(this.interval)
      this.interval = setInterval(() => { this.animate(false) }, 25)
    })
  }

  animate(forward: boolean) {
    if(forward && this.animatedPos < 24) {
      this.animatedPos++
      this.logo.style.backgroundPosition = -this.animatedPos * 182 + 'px'
      return
    } 

    if(!forward && this.animatedPos !== 0) {
      this.animatedPos--
      this.logo.style.backgroundPosition = -this.animatedPos * 182 + 'px'
      return
    }
    
    clearInterval(this.interval)
  }
}