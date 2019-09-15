const listOpt = document.getElementsByClassName('option-format')
var x = listOpt[0]
var o = listOpt[1]
var checkValueCell = false;
var painelRestart = document.getElementsByClassName('painel-restart')[0]
painelRestart.style.display = "none";
const main = document.querySelector('.main')
//evetListener para mudar a cor de fundo do X e do O
x.addEventListener('click',(evt)=>{
            if(evt.target.style.background === "" && o.style.background == "")
                evt.target.style.background = "rgb(52, 84, 52)"
            else if(evt.target.style.background === "" && o.style.background == "rgb(52, 84, 52)"){
                evt.target.style.background = "rgb(52, 84, 52)"
                o.style.background = ""
            }
})

o.addEventListener('click',(evt)=>{
            if(evt.target.style.background === "" && x.style.background == "")
                evt.target.style.background = "rgb(52, 84, 52)"
            else if(evt.target.style.background === "" && x.style.background == "rgb(52, 84, 52)"){
                evt.target.style.background = "rgb(52, 84, 52)"
                x.style.background = ""
            }
        
})
main.addEventListener('click',(e)=>{
    
    if(e.target.classList[0]==="item-main")
        setXO(e.target)
    
})

function setXO(cell){
    for(var i = 0;i<listOpt.length;i++){
        if(listOpt[i].style.background == "rgb(52, 84, 52)"){
            if(cell.textContent=="")
            cell.textContent = listOpt[i].textContent

            var cellTableGameOld = document.getElementsByClassName('item-main')
            if(cellTableGameOld[0].textContent!="" && cellTableGameOld[0].textContent==cellTableGameOld[1].textContent && cellTableGameOld[1].textContent==cellTableGameOld[2].textContent)
                callPainelRestartGame(cellTableGameOld[0].textContent)
            if(cellTableGameOld[3].textContent!="" && cellTableGameOld[3].textContent==cellTableGameOld[4].textContent && cellTableGameOld[4].textContent==cellTableGameOld[5].textContent)
                callPainelRestartGame(cellTableGameOld[3].textContent)
            if(cellTableGameOld[6].textContent!="" && cellTableGameOld[6].textContent==cellTableGameOld[7].textContent && cellTableGameOld[7].textContent==cellTableGameOld[8].textContent)
                callPainelRestartGame(cellTableGameOld[6].textContent)
            if(cellTableGameOld[0].textContent!="" && cellTableGameOld[0].textContent==cellTableGameOld[3].textContent && cellTableGameOld[3].textContent==cellTableGameOld[6].textContent)
                callPainelRestartGame(cellTableGameOld[0].textContent)
            if(cellTableGameOld[1].textContent!="" && cellTableGameOld[1].textContent==cellTableGameOld[4].textContent && cellTableGameOld[4].textContent==cellTableGameOld[7].textContent)
                callPainelRestartGame(cellTableGameOld[1].textContent)
            if(cellTableGameOld[2].textContent!="" &&  cellTableGameOld[2].textContent==cellTableGameOld[5].textContent && cellTableGameOld[5].textContent==cellTableGameOld[8].textContent)
                callPainelRestartGame(cellTableGameOld[2].textContent)
            if(cellTableGameOld[0].textContent!="" && cellTableGameOld[0].textContent==cellTableGameOld[4].textContent && cellTableGameOld[4].textContent==cellTableGameOld[8].textContent)
                callPainelRestartGame(cellTableGameOld[0].textContent)
            if(cellTableGameOld[2].textContent!="" && cellTableGameOld[2].textContent==cellTableGameOld[4].textContent && cellTableGameOld[4].textContent==cellTableGameOld[6].textContent)
                callPainelRestartGame(cellTableGameOld[2].textContent)
        }
    }
}
function callPainelRestartGame(winner){
    var cellTableGameOld = document.getElementsByClassName('item-main')
    var fieldWinner = painelRestart.getElementsByTagName('b')[0]
    fieldWinner.textContent = winner;
    for(var i=0;i<cellTableGameOld.length;i++){
        cellTableGameOld[i].textContent = ""
    }
    main.style.display = "none";
    painelRestart.style.display = "flex"
}
function restartGame(){
    main.style.display = "grid";
    painelRestart.style.display = "none"
}
