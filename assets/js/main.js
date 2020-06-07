window.onload = function() {
    let lvlBar = document.querySelectorAll('.level-bar-inner');
    let arr = [];
    for(let i = 0; i < lvlBar.length; i++) {
        lvlBar[i].style.width = '0px'; 
         arr.push(lvlBar[i]);
    }
    setTimeout(function() {
        arr[0].style.width = '362px'
        arr[0].style.transition = '2s'
    }, 800)

    setTimeout(function() {
        arr[1].style.width = '260px'
        arr[1].style.transition = '2s'
    }, 1600)

    setTimeout(function() {
        arr[2].style.width = '310px'
        arr[2].style.transition = '2s'
    }, 2400)

    let hdrTitle = document.querySelector('.name')
    let hdrDesc = document.querySelector('.desc')
    let hdrSocial = document.querySelector('.social')
    let hdrImg = document.querySelector('.profile-image')
    let hdrBtn = document.querySelector('.btn')
    let text = document.querySelector('.content-about')

    function opac() {
        hdrTitle.style.opacity = '1'
        hdrTitle.style.transitionDuration = '2s'
        hdrDesc.style.opacity = '1'
        hdrDesc.style.transitionDuration = '2s'
        hdrSocial.style.opacity = '1'
        hdrSocial.style.transitionDuration = '2s'
        hdrImg.style.opacity = '1'
        hdrImg.style.transitionDuration = '2s'
        hdrBtn.style.opacity = '1'
        hdrBtn.style.transitionDuration = '2s'
        text.style.opacity = '1'
        text.style.transitionDuration = '2s'
        text.style.opacity = '1'
        text.style.transitionDuration = '1s'
    }
    opac();
    
    
}