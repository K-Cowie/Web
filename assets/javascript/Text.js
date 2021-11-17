window.addEventListener("load", function()
{
  /* Setting up canvas */
  var canvas = document.querySelector('#myCanvas'); 
  var ctx = canvas.getContext('2d'); 

  /* Setting up pictures */
  const Dogimage = document.querySelector('#Dog1');
  const Dogimage2 = document.querySelector('#Dog2');
  const Catimage = document.querySelector('#Cat1');
  const Catimage2 = document.querySelector('#Cat2');
  const Birdimage = document.querySelector('#Bird1');
  const Birdimage2 = document.querySelector('#Bird2');
  const Lizardimage = document.querySelector('#Lizard1');
  const Lizardimage2 = document.querySelector('#Lizard2');

  /* values for where text draws */
  let MenuStartHeight = 650;
  let offsetHeight = 100;
  let AnimalsStartHeight = 250;
  let AnimaloffsetHeight = 200;


  string = "False";
  

  //Function that will change text color when hovered over
  function drawHover(txt, x, y){
    ctx.font = "100px Fantasy";
    ctx.fillStyle = "Purple";
    ctx.fillText(txt, x, y);
  } 

  //setting up what will be drawn to screen
  let MenuAnimalsH = ["Animals"];
  let MenuAboutH = ["About"];
  let MenuNewsH = ["Adoption Page"];
  let MenuBackH = ["Back"];

  var mouse = {
    x: undefined,
    y: undefined
  }

  //This is an mouse move event that causes the color change when hovering over the text and will draw it normal when not hovering.
  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
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
      ctx.fillText("About", 9, 750);
    }

    if ((mouse.x >= 9)&(mouse.x <= 595)&(mouse.y >= 770)&(mouse.y <= 850)) 
    {
      MenuNewsH.forEach((s,i) => {
        drawHover(s, 10, MenuStartHeight + (offsetHeight * i) + 200)
      });
    }
    else
    {
      ctx.font = "100px fantasy"
      ctx.fillStyle = "white";
      ctx.fillText("Adoption Page", 9, 850);
    }

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
  



  //This is a click event that when clicking on the text will cause more text to pop up then
  //it will cause the string to be true which will allow you to click on more text to cause pictures to show
  //Also has where the text and pictures will be drawn to screen
  canvas.addEventListener('click', function(event) {
    if ((mouse.x >= 9)&(mouse.x <= 340)&(mouse.y >= 570)&(mouse.y <= 650)) 
    {
      StoreAnimals();
      string = "true"
    }

    if ((mouse.x >= 9)&(mouse.x <= 213)&(mouse.y >= 870)&(mouse.y <= 950))
    {
      resize();
      string = "false"
    }

    if ((mouse.x >= 660)&(mouse.x <= 999)&(mouse.y >= 71)&(mouse.y <= 250)&(string == "true")) 
   {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resize();
    StoreAnimals();
    DrawDogs();
   }
    

   if ((mouse.x >= 660)&(mouse.x <= 957)&(mouse.y >= 267)&(mouse.y <= 454)&(string == "true")) 
   {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     resize();
     StoreAnimals();
     DrawCats();
   }


   if ((mouse.x >= 660)&(mouse.x <= 1027)&(mouse.y >= 472)&(mouse.y <= 650)&(string == "true")) 
   {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     resize();
     StoreAnimals();
     DrawBirds();
   }

   if ((mouse.x >= 660)&(mouse.x <= 1180)&(mouse.y >= 671)&(mouse.y <= 850)&(string == "true")) 
   {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     resize();
     StoreAnimals();
     DrawLizards();
   }

   if ((mouse.x >= 8)&(mouse.x <= 246)&(mouse.y >= 670)&(mouse.y <= 749))  
   {
    location.href = "/About";
   }

   if ((mouse.x >= 8)&(mouse.x <= 595)&(mouse.y >= 770)&(mouse.y <= 850))  
   {
    location.href = "/Dogs";
   }
  });


  //Drawing images
  function DrawDogs()
  {
    ctx.drawImage(Dogimage, 1400, 10, 500, 450);
    ctx.drawImage(Dogimage2, 1400, 400, 500, 450);
  }

  function DrawCats()
  {
    ctx.drawImage(Catimage, 1400, 10, 500, 400);
    ctx.drawImage(Catimage2, 1400, 400, 500, 450);
  }

  function DrawBirds()
  {
    ctx.drawImage(Birdimage, 1400, 10, 500, 400);
    ctx.drawImage(Birdimage2, 1400, 400, 500, 450);
  }

  function DrawLizards()
  {
    ctx.drawImage(Lizardimage, 1400, 10, 500, 400);
    ctx.drawImage(Lizardimage2, 1400, 400, 500, 450);
  }

  function drawAnimals(txt, x, y){
    ctx.font = "225px Fantasy";
    ctx.fillStyle = "white";
    ctx.fillText(txt, x, y);
  }
  

  //What will pop up once animals has been clicked
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
  
  let Menu = ["Animals", "About", "Adoption Page","Back"];


  //draws the inital canvas to the screen that allows all the other text to be drawn on top
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