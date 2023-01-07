function ativar(btn , elemento){
   
  var select=btn;
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