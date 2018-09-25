function changeColor(){
   var pickColor = blingNewColor();
   var getButton = document.getElementById('color').style.backgroundColor = pickColor;
   
}

   function blingNewColor(){
       var empArr = [];
       for (var i =0; i < 3;i++){
           var rgb = Math.floor(Math.random() * 255) 
           empArr.push(rgb);
           
       }    
    return "rgb:(" + empArr[0] + ','+ empArr[1] + ','+ empArr[2]+ ')'
      };
//console.log(changeColor())
//console.log(blingNewColor());
//console.log(pickColor);
