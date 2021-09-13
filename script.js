

let container = document.querySelector('.container');

function refresh() {
    location.reload();
    
}

gridDiv();

function gridDiv() {
  let gridDivs=prompt('Please enter a number between 2 to 64');
  container.style.setProperty('--gridDivs', gridDivs);
  if( gridDivs<65 && gridDivs>1){
    let i =0;
while(i<gridDivs*gridDivs){
    let gridDivs = document.createElement('div');
    gridDivs.style.backgroundColor = "pink"
    gridDivs.style.width = "1fr"
    gridDivs.style.height = "1fr"
    
    
    container.appendChild(gridDivs); 

    console.log("grid made successfully")
    


        gridDivs.addEventListener("mouseenter", function( event ) {
            event.target.style.backgroundColor = "purple";
        }); 

  i++
    }
    }
    else{
        alert('You entered an invalid number');

    }
}
