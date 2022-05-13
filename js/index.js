const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var isSunMode = 1;
// Toggle Dark Mode

const modeBtn = $('.theme-mode .mode-btn');
function switchModeIcon(){
    if(isSunMode){
        $('.mode-btn i.gg-sun').style.display = "block"
        $('.mode-btn i.gg-moon').style.display = "none";
        isSunMode = 0;
    } else{
        $('.mode-btn i.gg-sun').style.display = "none"
        $('.mode-btn i.gg-moon').style.display = "block";
        isSunMode = 1;
    }
}


modeBtn.addEventListener('click', function(){
    switchModeIcon();
})