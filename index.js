var animationPos = 0
var slidePos = 0
var interval
var slideInterval
var navBarVisable = true
var footBarVisable = true
var bodyOffset = 210
var footerOffset = 220
var slides

var konami = false;
var konamiCode = [
  38, 38, 40, 40, 37, 39, 37, 39, 66, 65
]
var konamiCodeProgress = 0;

$(document).keydown(function(e) {
  if (!konami) {
    if (e.keyCode == konamiCode[konamiCodeProgress]) {
      if (++konamiCodeProgress == konamiCode.length) {
        konami = true;  
        for(var i = 0; i < slides.length; i++) {
          slides[i].classList.add('visible')
        }
        // Keeping all settings visible for reference even if same as default.
        $('body').jGravity({
          target: 'everything',
          ignoreClass: 'nonGravity',
          weight: 25,
          depth: 1,
          drag: true
        });
      }
    } else {
      konamiCodeProgress = 0;
    }
  }
});


window.onload = () => {
  var logo = document.getElementsByClassName('logo')[0]
  var navArrow = document.getElementsByClassName('topDownArrow')[0]
  var footArrow = document.getElementsByClassName('topDownArrow')[1]
  var navBar = document.getElementsByClassName('navbar')[0]
  var body = document.getElementsByClassName('content')[0] 
  var footer = document.getElementsByClassName('footer')[0]
  slides = document.getElementsByClassName('slide')
  var leftArrowBanner = document.getElementById('left-arrow-container')
  var rightArrowBanner = document.getElementById('right-arrow-container')

  slideInterval = setInterval(() => { changeSlide(slides, true) }, 5000)
  
  logo.addEventListener('mouseover', () => {
    clearInterval(interval)    
    interval = setInterval(() => {
      if(animationPos !== 24) {
        animationPos++
        logo.style.backgroundPosition = -animationPos * 182
      } 
    }, 25)
  })
  
  leftArrowBanner.addEventListener('click', () => {
    clearInterval(slideInterval)
    changeSlide(slides, false)
    slideInterval = setInterval(() => { changeSlide(slides, true) }, 5000)
  })

  rightArrowBanner.addEventListener('click', () => {
    clearInterval(slideInterval)
    changeSlide(slides, true)
    slideInterval = setInterval(() => { changeSlide(slides, true) }, 5000)
  })
  
  logo.addEventListener('mouseleave', () => {
    clearInterval(interval)
    interval = setInterval(() => {
      if(animationPos !== 0) {
        animationPos--
        logo.style.backgroundPosition = -animationPos * 182
      } else {
        clearInterval(interval)
      }
    }, 25)
  })

  navArrow.addEventListener('click', () => {
    if(navBarVisable) {
      bodyOffset -= 100
      footerOffset -= 100
      navBar.style.marginTop = '-100px';
      navArrow.children[0].style.transform = 'rotateX(180deg)'
    } else {
      bodyOffset += 100      
      footerOffset += 100
      navBar.style.marginTop = '0px';
      navArrow.style.marginTop = '0px'
      navArrow.children[0].style.transform = 'rotateX(0deg)'      
    }
    
    body.style.height = `calc(100% - ${bodyOffset}px)`
    footer.style.marginTop = `calc(100vh - ${footerOffset}px)`
    navBarVisable = !navBarVisable
  })

  footArrow.addEventListener('click', () => {
    if(footBarVisable) {
      bodyOffset -= 100
      footerOffset -= 110
      footArrow.children[0].style.transform = 'rotateX(180deg)'       
    } else {
      bodyOffset += 100    
      footerOffset += 110     
      footArrow.children[0].style.transform = 'rotateX(0deg)' 
    }

    body.style.height = `calc(100% - ${bodyOffset}px)`
    footer.style.marginTop = `calc(100vh - ${footerOffset}px)`
    footBarVisable = !footBarVisable
  })
}

function changeSlide(slides, forward) {
  var next = 0;

  if(forward) {    
    if(slidePos < slides.length - 1) {
      next = slidePos + 1
    } else {
      next = 0
    }
  } else {
    if(slidePos > 0) {
      next = slidePos - 1
    } else {
      next = slides.length - 1
    }
  }
  
  slides[slidePos].style.opacity = '0'
  slides[next].style.opacity = '1'

  slidePos = next
}
