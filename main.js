var canvas = new fabric.Canvas('myCanvas');//we can remove the var //

blockwidth = 30;//width of block/
blockheight = 30;//height of block/

 player_y = 10;
 player_x = 10;

 var player_object = "";//blank var/

 function player_update()//this function will add the player image on the canvas /
 {
     fabric.Image.fromURL("player.png", function(Img){
         player_object = Img;

         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set({
             top:player_y,
             left:player_x
         });
canvas.add(player_object);
     });
   }

    var block_object = "";
    function new_image(get_image)//this function will add the block image user is going to decide/
    {
        fabric.Image.fromURL(get_image, function(Img){
            block_object = Img;
   
            block_object.scaleToWidth(blockwidth);
            block_object.scaleToHeight(blockheight);
            block_object.set({
                top:player_y,
                left:player_x
            });
   canvas.add(block_object);
        });
       }


   window.addEventListener("keydown", my_keydown);
   
   function my_keydown(e)
   {
       keyPressed = e.keyCode;//keypressed is the variable which has the number of the ascii vslue of the key pressed by the user
       console.log(keyPressed);
       if(e.shiftKey == true && keyPressed == '80')
       {
           console.log("p and shift pressed together");
           blockwidth = blockwidth + 10;
           blockheight = blockheight +10;
           document.getElementById("width").innerHTML = blockwidth;
           document.getElementById("height").innerHTML = blockheight;
       }
       if(e.shiftKey && keyPressed =='77')
       {
        console.log("m and shift pressed together");
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("width").innerHTML = blockwidth;
        document.getElementById("height").innerHTML = blockheight;
    }

    // check the key pressed by user
    
    if(keyPressed == '38'){

    up();
    console.log("up");
    }

    if(keyPressed == '37'){

        left();
        console.log("left");
        }

        if(keyPressed == '39'){

            right();
            console.log("right");
            }

            if(keyPressed == '40'){

                down();
                console.log("down");
                }

                if(keyPressed == '87'){

                    new_image('wall.jpg');
                    console.log("w");
                    }

                    
                if(keyPressed == '71'){

                    new_image('ground.jpg');
                    console.log("g");
                    }

                    
                if(keyPressed == '76'){

                    new_image('light_green.png');
                    console.log("l");
                    }

                      
                if(keyPressed == '84'){

                    new_image('trunk.jpg');
                    console.log("t");
                    }

                      
                if(keyPressed == '82'){

                    new_image('roof.jpg');
                    console.log("r");
                    }

                      
                if(keyPressed == '89'){

                    new_image('yellow_wall.png');
                    console.log("y");
                    }

                      
                if(keyPressed == '68'){

                    new_image('dark_green.png');
                    console.log("d");
                    }

                      
                if(keyPressed == '85'){

                    new_image('unique.png');
                    console.log("u");
                    }

                      
                if(keyPressed == '67'){

                    new_image('cloud.jpg');
                    console.log("c");
                    }
   }

   function up()
   {
       if(player_y >=0){
           player_y = player_y - blockheight;
           console.log("block image height = " + blockheight);
           console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
           canvas.remove(player_object);
           player_update();
       }

   }

   function down()
   {
       if(player_y >=500){
           player_y = player_y + blockheight;
           console.log("block image height = " + blockheight);
           console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
           canvas.remove(player_object);
           player_update();
       }

   }

   function left()
   {
       if(player_x >0){
           player_x = player_x - blockwidth;
           console.log("block image width = " + blockwidth);
           console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
           canvas.remove(player_object);
           player_update();
       }

   }


   function right()
   {
       if(player_x >850){
           player_x = player_x +  blockwidth;
           console.log("block image width = " + blockwidth);
           console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
           canvas.remove(player_object);
           player_update();
       }}