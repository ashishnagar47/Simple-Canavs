

window.addEventListener("load",()=>{
    const canvas=document.querySelector("#canvas");
    let color="red";
    color=document.getElementById('red').addEventListener("click",redColor);
     color=document.getElementById('blue').addEventListener("click",blueColor);
     color=document.getElementById('green').addEventListener("click",greenColor);
     color=document.getElementById('yellow').addEventListener("click",yellowColor);
    const ctx=canvas.getContext("2d");
    

    let painting=false;
    canvas.height=window.innerHeight-300;
    canvas.width=window.innerWidth-500;

    function redColor(){
        color=red;
        ctx.strokeStyle="red";
    }
    function greenColor(){
        ctx.strokeStyle="green";
    }
    function yellowColor(){
        ctx.strokeStyle="yellow";
    }
    function blueColor(){
        ctx.strokeStyle="blue";
    }

    function startPosition(e){
        painting=true;
        draw(e)
    }

    function finishPosition(){
        painting=false;
        ctx.beginPath();
    }
    ctx.strokeStyle=color;
    //console.log(color)

    function draw(e){
        if(!painting) return;
        ctx.lineWidth=10;
        ctx.lineCap='round';
        // ctx.strokeStyle="red"

        ctx.lineTo(e.clientX-200,e.clientY-150)
        console.log(e.clientX,e.clientY)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX-200,e.clientY-150)
    }

    
      download.addEventListener('click', function () {
        let width = canvas.width; 
        let height = canvas.height;
    
        var doc=new jsPDF();
       
        if(width > height){
          pdf = new jsPDF('l', 'px', [width, height]);
        }
        else{
          pdf = new jsPDF('p', 'px', [height, width]);
        }
        
        width = doc.internal.pageSize.getWidth();
        height = doc.internal.pageSize.getHeight();
        pdf.addImage(canvas, 'PNG', 0, 0,width+800,height);
        pdf.save("download.pdf");
      });


    canvas.addEventListener('mousedown',startPosition);
    canvas.addEventListener('mouseup',finishPosition);
    canvas.addEventListener('mousemove',draw);

})