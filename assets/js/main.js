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
}