window.addEventListener("load", function()
{
  var canvas = document.querySelector('#myCanvas'); 
  var ctx = canvas.getContext('2d'); 

  var mouse = {
    x: undefined,
    y: undefined
  }

  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse)
    if ((mouse.x >= 90)&(mouse.x <= 420)&(mouse.y >= 646)&(mouse.y <= 727)) 
    {
      AnimalsHover();
    }
    else
    {
      ctx.font = "100px fantasy"
      Animals();
    }
  });  
  
  window.addEventListener('mousemove', function(event) {
    if ((mouse.x >= 80)&(mouse.x <= 323)&(mouse.y >= 735)&(mouse.y <= 815)) 
    {
      AboutHover();
    }
    else
    {
      ctx.font = "100px fantasy"
      About();
    }
  });

  window.addEventListener('mousemove', function(event) {
    if ((mouse.x >= 80)&(mouse.x <= 298)&(mouse.y >= 820)&(mouse.y <= 900)) 
    {
      NewsHover();
    }
    else
    {
      ctx.font = "100px fantasy"
      News();
    }
  });

  window.addEventListener('mousemove', function(event) {
    if ((mouse.x >= 90)&(mouse.x <= 430)&(mouse.y >= 420)&(mouse.y <= 500)) 
    {
      Backhover();
    }
    else
    {
      ctx.font = "100px fantasy"
      Back();
    }
  });

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 90)&(mouse.x <= 420)&(mouse.y >= 646)&(mouse.y <= 727)) 
    {
      Dog();
      Cat();
      Bird();
      Lizard();
    }
  });

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 90)&(mouse.x <= 430)&(mouse.y >= 420)&(mouse.y <= 500)) 
    {
      resize();
    }
  });



  function Animals()
  {
    ctx.fillStyle = "white";
    ctx.fillText("Animals", 90, 727);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("Animals", 90, 727);  
  }

  function Back()
  {
    ctx.fillStyle = "white";
    ctx.fillText("Back", 90, 500);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("Back", 90, 500);
  }

  function Backhover()
  {
    ctx.fillStyle = "purple";
    ctx.fillText("Back", 90, 500);
    ctx.strokeStyle = "purple"; 
    ctx.strokeText("Back", 90, 500);
  }

  function AnimalsHover()
  {
    ctx.font = "100px fantasy"
    ctx.fillStyle = "purple";
    ctx.fillText("Animals", 90, 727);
  }

  function About()
  {
    ctx.fillStyle = "white";
    ctx.fillText("About", 85, 815);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("About", 85, 815)
  }

  function AboutHover()
  {
    ctx.font = "100px fantasy"
    ctx.fillStyle = "purple";
    ctx.fillText("About", 85, 815);
  }

  function News()
  {
    ctx.fillStyle = "white";
    ctx.fillText("News", 80, 900);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("News", 80, 900); 
  }

  function NewsHover()
  {
    ctx.fillStyle = "purple";
    ctx.fillText("News", 80, 900);
  }

  function Dog()
  {
    ctx.font = "225px Fantasy";
    ctx.fillStyle = "white";
    ctx.fillText("DOG", 600, 200);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("DOG", 600, 200); 
  }

  function Cat()
  {
    ctx.font = "225px Fantasy";
    ctx.fillStyle = "white";
    ctx.fillText("Cat", 600, 400);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("Cat", 600, 400); 
  }

  function Bird()
  {
    ctx.font = "225px Fantasy";
    ctx.fillStyle = "white";
    ctx.fillText("Bird", 600, 600);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("Bird", 600, 600); 
  }

  function Lizard()
  {
    ctx.font = "225px Fantasy";
    ctx.fillStyle = "white";
    ctx.fillText("Lizard", 600, 800);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("Lizard", 600, 800); 
  }

  function draw()
  {
    ctx.font = "100px Fantasy";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.stroke();
  }

    function resize()
  {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
    Animals();
    About();
    News();
    Back();
  }
 
 

  window.addEventListener("resize", resize);
  resize(); 

});


//Original text sizes
//ctx.font = "250px Fantasy";
//ctx.fillStyle = "white";
//ctx.fillText("Animals", 100, 500);
//ctx.strokeStyle = "white"; 
//ctx.strokeText("Animals", 100, 500);

//ctx.fillStyle = "white";
//ctx.fillText("About", 90, 700);
//ctx.strokeStyle = "white"; 
//ctx.strokeText("About", 90, 700);  

//ctx.fillStyle = "white";
//ctx.fillText("News", 80, 900);
//ctx.strokeStyle = "white"; 
//ctx.strokeText("News", 80, 900); 

//After click sizing
//ctx.fillStyle = "white";
//ctx.fillText("About", 85, 815);
//ctx.strokeStyle = "white"; 
//ctx.strokeText("About", 85, 815)

//ctx.fillStyle = "white";
//ctx.fillText("Animals", 90, 727);
//ctx.strokeStyle = "white"; 
//ctx.strokeText("Animals", 90, 727)