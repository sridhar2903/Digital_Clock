function clock()
{
    var hours,minutes,am;
     hours=document.getElementById("hours") ;
     minutes=document.getElementById("minutes");
     seconds=document.getElementById("seconds");
     am=document.getElementById("amorpm");

     var time=new Date();
     var a,b,c;
      a=time.getHours();
      b=time.getMinutes();
     c=time.getSeconds(); 
     hours.innerHTML=a;
     minutes.innerHTML=b;
     seconds.innerHTML=c;
     if(a>=00&&a<12)
     {
          am.innerHTML="AM"
     }
     else
     {
          am.innerHTML="PM"
     }


     if(a==13)
     {
          hours.innerHTML=1;
     }
     if(a==14)
     {
          hours.innerHTML=2;
     }
     if(a==15)
     {
          hours.innerHTML=3;
     }
     if(a==16)
     {
          hours.innerHTML=4;
     }
     if(a==17)
     {
          hours.innerHTML=5;
     }
     if(a==18)
     {
          hours.innerHTML=6;
     }
     if(a==19)
     {
          hours.innerHTML=7;
     }
     if(a==20)
     {
          hours.innerHTML=8;
     }
     if(a==21)
     {
          hours.innerHTML=9;
     }
     if(a==22)
     {
          hours.innerHTML=10;
     }
     if(a==23)
     {
          hours.innerHTML=11;
     }
     if(a==00)
     {
          hours.innerHTML=12;
     }

}

setInterval(clock,1000);



function hello()
{
    
     var v= document.getElementById("dropdown").value;
     var v1= document.getElementById("dropdown1").value;
     var v2= document.getElementById("dropdown2").value;
     var hourr=new Date().getHours();

   if(v==hourr)
   {
     document.getElementById("imagecontainer").style.backgroundImage="url(wakeup_image.png)";
     document.getElementById("textcontainer").innerHTML="WAKE UP !!";     
}
else if(v1==hourr)
{
  document.getElementById("imagecontainer").style.backgroundImage="url(lunch_image.png)";
  document.getElementById("textcontainer").innerHTML="LETS HAVE SOME LUNCH !!";     
}
else if(v2==hourr)
{
  document.getElementById("imagecontainer").style.backgroundImage="url(goodnight_image.png)";
  document.getElementById("textcontainer").innerHTML="GOOD NIGHT !!";     
}


}
