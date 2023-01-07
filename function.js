function removerFiltro(){
    var iw = document.body.clientWidth;
    if (iw<1280){
    document.getElementById('img-filter').classList.remove("filter");
    document.getElementById('img-filter2').classList.remove("filter");
    document.getElementById('img-filter3').classList.remove("filter");
    document.getElementById('img-filter4').classList.remove("filter");
    document.getElementById('img-filter5').classList.remove("filter");
}}

function ativar(btn , elemento){
    var iw = document.body.clientWidth;
  var select=btn;
  if(iw > 1280){
    switch (select) {
        case 'btn1':
            document.getElementById('botao').click();
            if(elemento.classList[0]==='filter'){
                elemento.classList.remove("filter");
            }else{
                elemento.classList.add("filter");
            }
          break;
        case 'btn2':
            document.getElementById('botao1').click();
            if(elemento.classList[0]==='filter'){
                elemento.classList.remove("filter");
            }else{
                elemento.classList.add("filter");
            }
          break;
          case 'btn3':
            document.getElementById('botao2').click();
            if(elemento.classList[0]==='filter'){
                elemento.classList.remove("filter");
            }else{
                elemento.classList.add("filter");
            } 
          break;
          case 'btn4':
            document.getElementById('botao3').click();
            if(elemento.classList[0]==='filter'){
                elemento.classList.remove("filter");
            }else{
                elemento.classList.add("filter");
            }
          break;
          case 'btn5':
            document.getElementById('botao4').click();
            if(elemento.classList[0]==='filter'){
                elemento.classList.remove("filter");
            }else{
                elemento.classList.add("filter");
            }
          break;
          
        default:
            }
  }
}