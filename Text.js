window.addEventListener("load", function()
{
  var canvas = document.querySelector('#myCanvas'); 
  var ctx = canvas.getContext('2d'); 
  const Dogimage = document.querySelector('#Dog1');
  const Catimage = document.querySelector('#Cat1');
  const Birdimage = document.querySelector('#Bird1');
  const Lizardimage = document.querySelector('#Lizard1');
  let MenuStartHeight = 650;
  let offsetHeight = 100;
  let AnimalsStartHeight = 250;
  let AnimaloffsetHeight = 200;


  string = "False";
  

  function drawHover(txt, x, y){
    ctx.font = "100px Fantasy";
    ctx.fillStyle = "Purple";
    ctx.fillText(txt, x, y);
  } 

  let MenuAnimalsH = ["Animals"];
  let MenuAboutH = ["About"];
  let MenuNewsH = ["News"];
  let MenuBackH = ["Back"];

  var mouse = {
    x: undefined,
    y: undefined
  }

  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
    if ((mouse.x >= 9)&(mouse.x <= 340)&(mouse.y >= 570)&(mouse.y <= 650)) 
    {
      MenuAnimalsH.forEach((s,i) => {
        drawHover(s, 10, MenuStartHeight + (offsetHeight * i))
      });
    }
    else
    {
      ctx.font = "100px fantasy"
      ctx.fillStyle = "white";
      ctx.fillText("Animals", 9, 650);
    }
  });  
  
  window.addEventListener('mousemove', function(event) {
    if ((mouse.x >= 9)&(mouse.x <= 241)&(mouse.y >= 671)&(mouse.y <= 749)) 
    {
      MenuAboutH.forEach((s,i) => {
        drawHover(s, 10, MenuStartHeight + (offsetHeight * i) + 100)
      });
    }
    else
    {
      ctx.font = "100px fantasy"
      ctx.fillStyle = "white";
      ctx.fillText("About", 9, 749);
    }
  });

  window.addEventListener('mousemove', function(event) {
    if ((mouse.x >= 9)&(mouse.x <= 228)&(mouse.y >= 770)&(mouse.y <= 850)) 
    {
      MenuNewsH.forEach((s,i) => {
        drawHover(s, 10, MenuStartHeight + (offsetHeight * i) + 200)
      });
    }
    else
    {
      ctx.font = "100px fantasy"
      ctx.fillStyle = "white";
      ctx.fillText("News", 9, 850);
    }
  });

  window.addEventListener('mousemove', function(event) {
    if ((mouse.x >= 9)&(mouse.x <= 213)&(mouse.y >= 870)&(mouse.y <= 950)) 
    {
      MenuBackH.forEach((s,i) => {
        drawHover(s, 10, MenuStartHeight + (offsetHeight * i) + 300)
      });
    }
    else
    {
      ctx.font = "100px fantasy"
      ctx.fillStyle = "white";
      ctx.fillText("Back", 9, 950);
    }
  });

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 9)&(mouse.x <= 340)&(mouse.y >= 570)&(mouse.y <= 650)) 
    {
      StoreAnimals();
      string = "true"
    }
  });

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 9)&(mouse.x <= 213)&(mouse.y >= 870)&(mouse.y <= 950))
    {
      resize();
      string = "false"
    }
  });

  canvas.addEventListener('click', function(event) {
   if ((mouse.x >= 660)&(mouse.x <= 999)&(mouse.y >= 71)&(mouse.y <= 250)&(string == "true")) 
   {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resize();
    StoreAnimals();
    DrawDogs();
   }
  })

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 660)&(mouse.x <= 957)&(mouse.y >= 267)&(mouse.y <= 454)&(string == "true")) 
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resize();
      StoreAnimals();
      DrawCats();
    }
  })

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 660)&(mouse.x <= 1027)&(mouse.y >= 472)&(mouse.y <= 650)&(string == "true")) 
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resize();
      StoreAnimals();
      DrawBirds();
    }
  })

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 660)&(mouse.x <= 1180)&(mouse.y >= 671)&(mouse.y <= 850)&(string == "true")) 
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resize();
      StoreAnimals();
      DrawLizards();
    }
  })

  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 8)&(mouse.x <= 246)&(mouse.y >= 670)&(mouse.y <= 749))  
    {
     location.href = "About.html";
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

  function drawAnimals(txt, x, y){
    ctx.font = "225px Fantasy";
    ctx.fillStyle = "white";
    ctx.fillText(txt, x, y);
  }
  
  let Animals = ["Dog", "Cat", "Bird","Lizard"];

  function StoreAnimals()
  {
    Animals.forEach((s,i) => {
      drawAnimals(s, 650, AnimalsStartHeight + (AnimaloffsetHeight * i))
    });
  }

  function draw()
  {
    ctx.font = "100px Fantasy";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.stroke();
  }

  function drawMenu(txt, x, y){
    ctx.font = "100px Fantasy";
    ctx.fillStyle = "white";
    ctx.fillText(txt, x, y);
  }
  
  let Menu = ["Animals", "About", "News","Back"];

  function resize()
  {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();

    Menu.forEach((s,i) => {
      drawMenu(s, 10, MenuStartHeight + (offsetHeight * i))
    });

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