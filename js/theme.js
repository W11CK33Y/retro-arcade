const themes = [
{ bodyBg:"radial-gradient(circle at center, #1a0028 0%, #080010 80%)", text:"#d78aff", glow:"#a84aff" },
{ bodyBg:"radial-gradient(circle at center, #001a00 0%, #000800 80%)", text:"#00ff88", glow:"#00ffaa" },
{ bodyBg:"radial-gradient(circle at center, #2a001a 0%, #100008 80%)", text:"#ff00aa", glow:"#ff66cc" }
];


let currentTheme = parseInt(localStorage.getItem("retroTheme")) || 0;


function applyTheme(theme){
document.body.style.background = theme.bodyBg;
document.body.style.color = theme.text;
document.querySelectorAll("h1").forEach(h=>h.style.textShadow=`0 0 10px ${theme.text}, 0 0 25px ${theme.glow}`);
document.querySelectorAll("button").forEach(btn=>{
btn.style.border = `2px solid ${theme.text}`;
btn.style.color = theme.text;
btn.style.textShadow = `0 0 8px ${theme.text}`;
});
}


function initThemeButton(btnId){
const btn = document.getElementById(btnId);
if(!btn) return;
btn.addEventListener("click", ()=>{
currentTheme = (currentTheme+1) % themes.length;
localStorage.setItem("retroTheme", currentTheme);
applyTheme(themes[currentTheme]);
});
}


document.addEventListener("DOMContentLoaded", ()=>{
applyTheme(themes[currentTheme]);
});