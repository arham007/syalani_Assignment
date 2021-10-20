let g = document.getElementsByClassName("arr");

let b = document.getElementById("result");

let m1g = document.querySelectorAll(".matrix1 .arr"), i;
let m2g = document.querySelectorAll(".matrix2 .arr"), j;
let m3g = document.querySelectorAll(".matrix3 .arr")
document.getElementById("resultbox").style.display="none";

let arr = [];


b.addEventListener('click', (e) => {
    for(let i=0;i<m1g.length;i++) {
        
        if (g[i].value == '') {
            alert("Matrix is Empty");
            window.location.reload();
            break;
        }
        else {
            b.style.display="none"
            let x = parseInt(m1g[i].value);   
            let y = parseInt(m2g[i].value); 
      
            arr[i] = x+y;
            console.log(arr[i])
            m3g[i].value=arr[i]
            document.getElementById("resultbox").style.display="block"
            
    }

    
    
  }
  

 
  
  
})

