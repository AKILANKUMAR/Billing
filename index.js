let dom = document.getElementById("name").addEventListener("keyup",function(){
    // dom = this.value;
    
    document.getElementById("name2").innerHTML=this.value;
 });


 let nummber = document.getElementById("number").addEventListener("keyup",function(){
    // dom = this.value;
    
    document.getElementById("number2").innerHTML=this.value;
 });
 

 let sugar_price = 50;
 let sugar_q =0;
 let SugarPriceShow="";
 document.getElementById("sugar").addEventListener("keyup",function(){
    if (this.value==""|| this.value==0) {
      //   document.getElementById("bill").innerHTML="";
        SugarPriceShow="";
        sugar_q =0;
        ShowMovie();
    }else{
    
    
    sugar_q = this.value;
    SugarPriceShow = "<tr><td>Sugar</td><td>Rs."+sugar_price+"</td><td>"+sugar_q+"</td><td>"+sugar_price+"*"+sugar_q+" = "+sugar_price*sugar_q+"</td></tr>";
    ShowMovie();
    } 
}) ;

let Maida_price = 100;
 let Maida_q =0;
 let MaidaPriceShow="";

 document.getElementById("maida").addEventListener("keyup",function(){
    if (this.value==""|| this.value==0) {
      MaidaPriceShow="";
      Maida_q =0;
      ShowMovie();
        
    }else{
    
    
      Maida_q = this.value;
      MaidaPriceShow = "<tr><td>maida</td><td>Rs."+Maida_price+"</td><td>"+Maida_q+"</td><td>"+Maida_price+"*"+Maida_q+" = "+Maida_price*Maida_q+"</td></tr>";
      ShowMovie();
    } 
}) ;


let Rava_price = 100;
 let Rava_q =0;
 let RavaPriceShow="";

 document.getElementById("rava").addEventListener("keyup",function(){
    if (this.value==""|| this.value==0) {
      RavaPriceShow="";
      Rava_q =0;
      ShowMovie();
        
    }else{
    
    
      Rava_q = this.value;
      RavaPriceShow = "<tr><td>rava</td><td>Rs."+Rava_price+"</td><td>"+Rava_q+"</td><td>"+Rava_price+"*"+Rava_q+" = "+Rava_price*Rava_q+"</td></tr>";
      ShowMovie();
    } 
}) ;

function ShowMovie(){
   document.getElementById("bill").innerHTML = SugarPriceShow+MaidaPriceShow+RavaPriceShow;
   document.getElementById("amount").innerHTML = sugar_price*sugar_q+Maida_price*Maida_q+Rava_price*Rava_q;
}


// let popup = document.getElementById("popup");

// function OpenPopup(){
//   popup.classList.add("open-popup");
// }

// function ClosePopup(){
//   popup.classList.remove("open-popup");
  
// }



let popupm = document.getElementById("popup");


function OpenPopup(){
  popup.classList.add("open-popup");

}

function ClosePopup(){

  popup.classList.remove("open-popup");

}
