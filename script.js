let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
},3500)


function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

function exibirDataHora() {
    const agora = new Date();
    const dataHoraFormatada = agora.toLocaleString('pt-PT'); 
    
    const elementoDataHora = document.createElement('div');
    elementoDataHora.textContent = `${dataHoraFormatada}`;
    elementoDataHora.style.position = 'fixed'; 
    elementoDataHora.style.top = '6%'; 
    elementoDataHora.style.right = '9%';
    elementoDataHora.style.padding = '5px';
    elementoDataHora.style.background = '#f10b0b';
    elementoDataHora.style.color = 'white';
    //elementoDataHora.style.border = '1px solid #ccc';
    
    const atualizarDataHora = () => {
        const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const segundos = agora.getSeconds().toString().padStart(2, '0');
        
        const dataHoraFormatada = `${horas}:${minutos}:${segundos}`;
        elementoDataHora.textContent = ` ${dataHoraFormatada}`;
      };
    
      atualizarDataHora();
      setInterval(atualizarDataHora, 1000);
    
      document.body.appendChild(elementoDataHora);
    }
    
    exibirDataHora();




//STORAGE
    function clickCounter() {
        if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
        } else {
          document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
      }