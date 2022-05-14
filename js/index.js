// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
var isSunMode = 1;
// Toggle Dark Mode

const modeBtn = document.querySelector('.theme-mode .mode-btn');
function switchModeIcon(){
    if(isSunMode){
        document.querySelector('.mode-btn i.gg-sun').style.display = "block"
        document.querySelector('.mode-btn i.gg-moon').style.display = "none";
        isSunMode = 0;
    } else{
        document.querySelector('.mode-btn i.gg-sun').style.display = "none"
        document.querySelector('.mode-btn i.gg-moon').style.display = "block";
        isSunMode = 1;
    }
}


modeBtn.addEventListener('click', function(){
    switchModeIcon();
})