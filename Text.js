window.addEventListener("load", function()
{
  var canvas = document.querySelector('#myCanvas'); 
  var ctx = canvas.getContext('2d'); 
  const Dogimage = document.querySelector('#Dog1')
  const Catimage = document.querySelector('#Cat1')
  const Birdimage = document.querySelector('#Bird1')
  const Lizardimage = document.querySelector('#Lizard1')

  string = "False";
  

  var mouse = {
    x: undefined,
    y: undefined
  }

  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse)
    if ((mouse.x >= 90)&(mouse.x <= 420)&(mouse.y >= 546)&(mouse.y <= 627)) 
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
    if ((mouse.x >= 80)&(mouse.x <= 323)&(mouse.y >= 635)&(mouse.y <= 715)) 
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
    if ((mouse.x >= 80)&(mouse.x <= 298)&(mouse.y >= 720)&(mouse.y <= 800)) 
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
    if ((mouse.x >= 80)&(mouse.x <= 282)&(mouse.y >= 820)&(mouse.y <= 900)) 
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
    if ((mouse.x >= 90)&(mouse.x <= 420)&(mouse.y >= 546)&(mouse.y <= 627)) 
    {
      StoreAnimals();
      string = "true"
    }
  });

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 80)&(mouse.x <= 282)&(mouse.y >= 820)&(mouse.y <= 900)) 
    {
      resize();
    }
  });

  canvas.addEventListener('click', function(event) {
   if ((mouse.x >= 608)&(mouse.x <= 963)&(mouse.y >= 18)&(mouse.y <= 204)&(string == "true")) 
   {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resize();
    StoreAnimals();
    DrawDogs();
   }
  })

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 606)&(mouse.x <= 906)&(mouse.y >= 217)&(mouse.y <= 404)&(string == "true")) 
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resize();
      StoreAnimals();
      DrawCats();
    }
  })

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 608)&(mouse.x <= 976)&(mouse.y >= 420)&(mouse.y <= 601)&(string == "true")) 
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resize();
      StoreAnimals();
      DrawBirds();
    }
  })

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 608)&(mouse.x <= 1130)&(mouse.y >= 619)&(mouse.y <= 801)&(string == "true")) 
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resize();
      StoreAnimals();
      DrawLizards();
    }
  })

  function DrawDogs()
  {
    ctx.drawImage(Dogimage, 1400, 10, 500, 400);
  }

  function DrawCats()
  {
    ctx.drawImage(Catimage, 1400, 10, 500, 400);
  }

  function DrawBirds()
  {
    ctx.drawImage(Birdimage, 1400, 10, 500, 400);
  }

  function DrawLizards()
  {
    ctx.drawImage(Lizardimage, 1400, 10, 500, 400);
  }

  function StoreAnimals()
  {
    Dog();
    Cat();
    Bird();
    Lizard();
  }

  function Animals()
  {
    ctx.fillStyle = "white";
    ctx.fillText("Animals", 90, 627);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("Animals", 90, 627);  
  }

  function Back()
  {
    ctx.fillStyle = "white";
    ctx.fillText("Back", 80, 900);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("Back", 80, 900);
  }

  function Backhover()
  {
    ctx.fillStyle = "purple";
    ctx.fillText("Back", 80, 900);
    ctx.strokeStyle = "purple"; 
    ctx.strokeText("Back", 80, 900);
  }

  function AnimalsHover()
  {
    ctx.font = "100px fantasy"
    ctx.fillStyle = "purple";
    ctx.fillText("Animals", 90, 627);
  }

  function About()
  {
    ctx.fillStyle = "white";
    ctx.fillText("About", 85, 715);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("About", 85, 715)
  }

  function AboutHover()
  {
    ctx.font = "100px fantasy"
    ctx.fillStyle = "purple";
    ctx.fillText("About", 85, 715);
  }

  function News()
  {
    ctx.fillStyle = "white";
    ctx.fillText("News", 80, 800);
    ctx.strokeStyle = "white"; 
    ctx.strokeText("News", 80, 800); 
  }

  function NewsHover()
  {
    ctx.fillStyle = "purple";
    ctx.fillText("News", 80, 800);
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