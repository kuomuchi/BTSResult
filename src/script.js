///infinite



var status=0;
var CODE=0;
var magic=0;
var APPLeft=0;
var ISSUELeft=0;

var audio = $("#audio")[0];  

var ref = "";

///0=off 1=on
var Switch=0;

function get_random_color() 
{
 var color ="";
 for(var i = 0; i <3; i++) {
 var sub = Math.floor(Math.random() * 256).toString(16);
 color += (sub.length == 1?"0" + sub : sub);
 }
 return"#" + color;
}

function get_rand_color()
{
 var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
 while(color.length <6) {
 color ="0" + color;
 }
 return"#" + color;
}



$(".APP").click(
  function(){
    status=1;
    APPLeft=0;
    $(".APP").addClass("APPopen");
    $(".APPcontrol").css('display', 'block');
    
    $(".APPcontrol").click(function(){
      if(APPLeft==0){
        $(".APPcontrol").css("left","-450px");
        APPLeft=1;
      }else if(APPLeft==1){
        $(".APPcontrol").css("left","-900px");
        APPLeft=2;
      }else if(APPLeft==2){
        $(".APPcontrol").css("left","-1350px");
        APPLeft=3;
      }else if(APPLeft==3){
        $(".APPcontrol").css("left","-1800px");
        APPLeft=4;
      }else if(APPLeft==4){
        $(".APPcontrol").css("left","-2250px");
        APPLeft=5;
      }else if(APPLeft==5){
        $(".APPcontrol").css("left","-2700px");
        APPLeft=6;
      }else if(APPLeft==6){
        $(".APPcontrol").css("left","0px");
        APPLeft=0;
      }
    });

    
    $(".CODE").addClass("CODEclose");
    $(".ISSUE").addClass("ISSUEclose");
    $(".MAGIC").addClass("MAGICclose");
    
    $(".BACKclose").addClass("BACKopen");
    
    
    $(".BACKopen").css('background-color', '#FF7744');
    
    
}
);

$(".ISSUE").click(
  function(){
    ISSUELeft=0;
    status=2;
    $(".ISSUE").addClass("ISSUEopen");
    
    $(".APP").addClass("APPclose");
    $(".CODE").addClass("CODEclose");
    $(".MAGIC").addClass("MAGICclose");
    
    $(".ISSUEtrol").css("display","block");
    
    $(".BACKclose").addClass("BACKopen");
    
    $(".BACKopen").css('background-color', '#FF0000');
    
    
    $(".ISSUEtrol").click(function(){
      if(ISSUELeft==0){
        $(".ISSUEtrol").css("left","-450px");
        ISSUELeft=1;

      }else if(ISSUELeft==1){
        $(".ISSUEtrol").css("left","-900px");
        ISSUELeft=2;

      }else if(ISSUELeft==2){
        $(".ISSUEtrol").css("left","-1350px");
         ISSUELeft=3;
        
      }else if(ISSUELeft==3){
        $(".ISSUEtrol").css("left","0px");
        ISSUELeft=0;
      }
    });
    
    
}
);

$(".CODE").click(
  
  function(){
    status=3;
    $(".CODE").addClass("CODEopen");
    
    $(".APP").addClass("APPclose");
    $(".ISSUE").addClass("ISSUEclose");
    $(".MAGIC").addClass("MAGICclose");
    $(".CODEURL").addClass("CODEURLadd");
    
    
    $(".CODEIntroduction").css("display", "block");
    $(".CODEURL").css("display","block");
    
    
    
    
    $(".CODEIntroduction").css("animation-play-state","running");
    
    $(".BACKclose").addClass("BACKopen");
    
    $(".BACKopen").css('background-color', '#CC0000');
    
    setTimeout(function(){
      $(".CODESwitch").css("display", "block");
    }, 3000);
    
    
  $(".controlOFF").click(
    function(){
      if(CODE==0){
        $(".controlOFF").addClass("controlON");
        $(".controlOFF").text("ON");
        CODE=1;
        ref = setInterval(function(){
          $(".BAC , html").css("background-color",get_rand_color());
        },100);
        
        document.getElementById("audio").controls.play();

        
      }else{
        $(".controlOFF").removeClass("controlON");
        $(".controlOFF").text("OFF");
        CODE=0;
        $(".BAC , html").css("background-color","white");
        clearInterval(ref);
        document.getElementById("audio").controls.stop();

      }
      
    }
  );
    
    
}
);




$(".MAGIC").click(
  function(){
    
    status=4;
    $(".MAGIC").addClass("MAGICopen");
    
    $(".APP").addClass("APPclose");
    $(".CODE").addClass("CODEclose");
    $(".ISSUE").addClass("ISSUEclose");
    
    $(".BACKclose").addClass("BACKopen");
    $(".MAGICBack").addClass("MAGICOpen");
    
    $(".BACKopen").css('background-color', '#AA0000');
    
    $(".MOT").css('display', 'block');
    $(".MOT2").css('display', 'block');
    $(".MOT3").css('display', 'block');
    $(".MOT4").css('display', 'block');
    $(".MOT5").css('display', 'block');
    $(".MOT6").css('display', 'block');
    
    
    
    $(".MAGICBack").click(
      function(){
        $(".MOT").removeClass('MOTop');
        $(".MAGICVID").removeClass('MAGICVIDop');
        $(".MOT2").removeClass('MOTop');
        $(".MOT3").removeClass('MOTop');
        $(".MOT4").removeClass('MOTop');
        $(".MOT5").removeClass('MOTop');
        $(".MOT6").removeClass('MOTop');
      }
    );

 
    
    $(".MOT").click(
      function(){
        if(status == 4){
          console.log(magic);
          magic=1;
          console.log(magic);
          $(".MOT").addClass('MOTop');
          $(".MAGICVID").addClass('MAGICVIDop');
        }
      }
    );
      
    $(".MOT2").click(
      function(){
        if(status == 4){
          $(".MOT2").addClass('MOTop');
          
        }
      }
    );
    $(".MOT3").click(
      function(){
        if(status == 4){
          $(".MOT3").addClass('MOTop');
          
        }
      }
    );
    
    $(".MOT4").click(
      function(){
        if(status == 4){
          $(".MOT4").addClass('MOTop');
          
        }
      }
    );
    
    $(".MOT5").click(
      function(){
        if(status == 4){
          $(".MOT5").addClass('MOTop');
          
        }
      }
    );
    
    
    $(".MOT6").click(
      function(){
        if(status == 4){
          $(".MOT6").addClass('MOTop');
          
        }
      }
    );
      
    
    
}
);
  
    
    
    
    
$(".BACKclose").click(
  function(){
    
    $(".MAGICBack").removeClass("MAGICOpen");
    $(".BACKclose").removeClass("BACKopen");
    status == 0;
    
    if(status == 1){
      $(".APP").removeClass("APPopen");
      
      $(".CODE").removeClass("CODEclose");
      $(".ISSUE").removeClass("ISSUEclose");
      $(".MAGIC").removeClass("MAGICclose");
      $(".APPcontrol").css('display', 'none');
      
    }else if(status == 2){
      $(".ISSUE").removeClass("ISSUEopen");

      $(".APP").removeClass("APPclose");
      $(".CODE").removeClass("CODEclose");
      $(".MAGIC").removeClass("MAGICclose");
      $(".CODEURL").removeClass("CODEURLadd");

      $(".ISSUEtrol").css("display","none");
      
    }else if(status == 3){
      $(".CODE").removeClass("CODEopen");

      $(".APP").removeClass("APPclose");
      $(".ISSUE").removeClass("ISSUEclose");
      $(".MAGIC").removeClass("MAGICclose");

      $(".CODEIntroduction").css("display", "none");
      $(".CODESwitch").css("display", "none");
      $(".CODEURL").css("display","none");
      
    }else if(status == 4){
      $(".MAGIC").removeClass("MAGICopen");

      $(".APP").removeClass("APPclose");
      $(".CODE").removeClass("CODEclose");
      $(".ISSUE").removeClass("ISSUEclose");

      //笨笨的做法
      $(".MOT").css('display', 'none');
      $(".MOT2").css('display', 'none');
      $(".MOT3").css('display', 'none');
      $(".MOT4").css('display', 'none');
      $(".MOT5").css('display', 'none');
      $(".MOT6").css('display', 'none');


      $(".MAGICVID").removeClass('MAGICVIDop');

      //笨笨的做法
      $(".MOT").removeClass('MOTop');
      $(".MOT2").removeClass('MOTop');
      $(".MOT3").removeClass('MOTop');
      $(".MOT4").removeClass('MOTop');
      $(".MOT5").removeClass('MOTop');
      $(".MOT6").removeClass('MOTop');
      
    }
}
);
