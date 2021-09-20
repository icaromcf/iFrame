//side-menu
const sideMenu = document.querySelector('.side-menu')
const sideIcon = document.querySelector('.menu-icon')
function mouseEnter(){
    sideMenu.style.width='50vh'
    sideIcon.style.transform='rotate(180deg)'
}
function mouseOut(){
    sideMenu.style.width='8vh'
    sideIcon.style.transform='rotate(360deg)'
}
sideMenu.addEventListener('mouseover',mouseEnter,false)
sideMenu.addEventListener('mouseout',mouseOut,false)

//
const themes = [
    {
        title : "Home",
        source : "DefaultFrame.html"
    },
    {
        title : "Carros",
        source : "https://pt.wikipedia.org/wiki/Automóvel"
    },
    {
        title : "Jogos",
        source : "https://pt.wikipedia.org/wiki/Jogo"
    },
    {
        title : "Roupas",
        source : "https://pt.wikipedia.org/wiki/Roupa"
    },
    {
        title : "Fortaleza",
        source : "https://pt.wikipedia.org/wiki/Fortaleza"
    },
]
const controls = document.querySelector('.controls')
const screenFrame = document.querySelector('.screen')
function generateThemes(themes=[]){
    themes.map(e=>{
        const title = e.title
        const newButton = document.createElement('div')
        newButton.setAttribute('class','link')
        newButton.innerHTML= title
        newButton.addEventListener('click',()=>onClick(title),false)
        controls.appendChild(newButton)
    })
}
function onClick(name){
    themes.map(e=>{
        if(e.title==name){
            const source = e.source
            screenFrame.setAttribute('src',source)
        }
    })
}

generateThemes(themes)