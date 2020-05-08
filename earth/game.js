// GAME sFLOW
// --> COMPAIONO IN MODO CASUALE DELLE ROCCE E FRECCE
// --> LE DISTRUGGI e fai un punteggio
// GLI ATTACCHI AVVENGONO SU DELLE TORRI DIVERSE
// FAR COMPARIRE EFFETTI SPECIALI ED ANIMAZIONI

// VARIABLES
 var entityElCopy = new Array();
 var scorecopy;
 var play=0;

function game() {

     // VARIABLES
     var sceneEl = document.querySelector('a-scene');
     var background = document.querySelector('.back');
     background.components.sound.playSound();
     var boom = document.querySelector('.boom');
     var collect = document.querySelector('.collect');

   var entityEl = new Array();
   var score=document.createElement('a-plane');
   scorecopy=score;
   //PUNTEGGIO
   score.setAttribute('position', { x: 0, y: 11, z: -2});
   score.setAttribute('material', 'color', 'green');
   score.setAttribute('text', 'value', '0');
   score.setAttribute('text', 'color', 'white');
   score.setAttribute('text', 'align', 'center');
   score.setAttribute('text', 'width', '8');
   score.setAttribute('text', 'height', '5');
   score.setAttribute('geometry', 'height', '2');
   score.setAttribute('geometry', 'width', '2');
   sceneEl.appendChild(score);

     var colors= new Array();
     colors[0]='#FF6104';
     colors[1]='#DE0F1D';
     colors[2]='#600999';
     var shape= new Array();
     shape[0]='box';
     shape[1]='sphere';
     shape[2]='cylinder';

     var punt=0;
     score.setAttribute('text', 'value', '' + punt);

     for(var i=0; i<30; i++)
     {
       //generazione posizione
       var pos_x= Math.random() * (70 - (-50)) + (-50);
       var pos_y= Math.random() * (70 - (1)) + (1);
       var pos_z= Math.random() * (70 - (-50)) + (-50);

       //generazione scale
       var pos_xs= Math.random() * (2 - (0.5)) + (0.5);
       var pos_ys= Math.random() * (2 - (0.5)) + (0.5);
       var pos_zs= Math.random() * (2 - (0.5)) + (0.5);

       // COLORI
       var rand_colors = Math.random() * (2-0) + 0;
       rand_colors = Math.round(rand_colors);

       // FIGURE
       var rand_shape = Math.random() * (2-0) + 0;
       rand_shape = Math.round(rand_shape);

      // CUBI + ANIMAZIONE + EVENTI
       var entity= document.createElement('a-'+shape[rand_shape]);
       var duration = Math.random() * (200000-50000) + 50000;
       entityEl[i]=entity;
       entityElCopy[i]=entity;

       entityEl[i].setAttribute('scale', { x: pos_xs, y: pos_ys, z: pos_zs });
       entityEl[i].setAttribute('light', 'color', ''+colors[rand_colors]);
       entityEl[i].setAttribute('light', 'type', 'point');
       entityEl[i].setAttribute('position', { x: pos_x, y: pos_y, z: pos_z });
       entityEl[i].setAttribute('material', 'color', ''+colors[rand_colors]);
       entityEl[i].setAttribute('animation', 'property: position; to: 0 0 0; dur: 100000; easing: linear');
       entityEl[i].addEventListener('click', function(evt){
         this.sceneEl.removeChild(this);
         punt++;
         score.setAttribute('text', 'value', '' + punt);

         boom.components.sound.playSound();
         collect.components.sound.playSound();
         

       });
       //end function
       entityEl[i].addEventListener('animationcomplete', function(evt){
         this.sceneEl.removeChild(this);
       });
       //end remove
       entityEl[i].setAttribute('class','clickable');
       sceneEl.appendChild(entityEl[i]);
     }
     if(punt==30){
            score.setAttribute('text', 'value', 'You Win!');
     }
     //end for
     play++;
   }