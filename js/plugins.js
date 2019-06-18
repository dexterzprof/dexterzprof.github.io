
function myFunction() {
  var bar1 = document.getElementById("Bar1");   
  var bar2 = document.getElementById("Bar2");
  var bar3 = document.getElementById("Bar3");
  var bar4 = document.getElementById("Bar4");
  var bar5 = document.getElementById("Bar5");
  var bar6 = document.getElementById("Bar6");
  var bar7 = document.getElementById("Bar7");
  var bar8 = document.getElementById("Bar8");
  var bar9 = document.getElementById("Bar9");
  var list1 = document.getElementById("Bar1").getElementsByTagName("span")[0];
  var list2 = document.getElementById("Bar2").getElementsByTagName("span")[0];
  var list3 = document.getElementById("Bar3").getElementsByTagName("span")[0];
  var list4 = document.getElementById("Bar4").getElementsByTagName("span")[0];
  var list5 = document.getElementById("Bar5").getElementsByTagName("span")[0];
  var list6 = document.getElementById("Bar6").getElementsByTagName("span")[0];
  var list7 = document.getElementById("Bar7").getElementsByTagName("span")[0];
  var list8 = document.getElementById("Bar8").getElementsByTagName("span")[0];
  var list9 = document.getElementById("Bar9").getElementsByTagName("span")[0];
  var width = 10;
  var width2 = 10;
  var width3 = 10;
  var width4 = 10;
  var width5 = 10;
  var width6 = 10;
  var width7 = 10;
  var width8 = 10;
  var width9 = 10;
  var id = setInterval(frame, 50);
  var id2 = setInterval(frame2, 60);
  var id3 = setInterval(frame3, 70);
  var id4 = setInterval(frame4, 80);
  var id5 = setInterval(frame5, 90);
  var id6 = setInterval(frame6, 100);
  var id7 = setInterval(frame7, 110);
  var id8 = setInterval(frame8, 120);
  var id9 = setInterval(frame9, 130);
  
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width++; 
      bar1.style.width = width + '%'; 
      list1.innerHTML = width * 1  + '%';
    }
    
  }
  function frame2() {
    if (width2 >= 90) {
      clearInterval(id2);
    } else {
      width2++; 
      bar2.style.width = width2 + '%'; 
      list2.innerHTML = width2 * 1  + '%';
    }
    
  }
   function frame3() {
    if (width3 >= 90) {
      clearInterval(id3);
    } else {
      width3++; 
      bar3.style.width = width3 + '%'; 
      list3.innerHTML = width3 * 1  + '%';
    }
    
  }
   function frame4() {
    if (width4 >= 70) {
      clearInterval(id4);
    } else {
      width4++; 
      bar4.style.width = width4 + '%'; 
      list4.innerHTML = width4 * 1  + '%';
    }
    
  }
   function frame5() {
    if (width5 >= 80) {
      clearInterval(id5);
    } else {
      width5++; 
      bar5.style.width = width5 + '%'; 
      list5.innerHTML = width5 * 1  + '%';
    }
    
  }
   function frame6() {
    if (width6 >= 70) {
      clearInterval(id6);
    } else {
      width6++; 
      bar6.style.width = width6 + '%'; 
      list6.innerHTML = width6 * 1  + '%';
    }
    
  }
   function frame7() {
    if (width7 >= 80) {
      clearInterval(id7);
    } else {
      width7++; 
      bar7.style.width = width7 + '%'; 
      list7.innerHTML = width7 * 1  + '%';
    }
    
  }
   function frame8() {
    if (width8 >= 75) {
      clearInterval(id8);
    } else {
      width8++; 
      bar8.style.width = width8 + '%'; 
      list8.innerHTML = width8 * 1  + '%';
    }
    
  }
   function frame9() {
    if (width9 >= 70) {
      clearInterval(id9);
    } else {
      width9++; 
      bar9.style.width = width9 + '%'; 
      list9.innerHTML = width9 * 1  + '%';
    }
    
  }
}

$(document).ready(function(){
    ;(function($) {

        $.fn.letterDrop = function() {
          // Chainability
          return this.each( function() { 
          
          var obj = $( this );
          
          var drop = {
            arr : obj.text().split( '' ),
            
            range : {
              min : 1,
              max : 9
            },
            
            styles : function() {
              var dropDelays = '\n', addCSS;
              
               for ( i = this.range.min; i <= this.range.max; i++ ) {
                 dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
               }
              
                addCSS = $( '<style>' + dropDelays + '</style>' );
                $( 'head' ).append( addCSS );
            },
            
            main : function() {
              var dp = 0;
              obj.text( '' );
              
              $.each( this.arr, function( index, value ) {
        
                dp = dp.randomInt( drop.range.min, drop.range.max );
                
                if ( value === ' ' )
                  value = '&nbsp'; //Add spaces
                
                  obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
                
              });
                  
            }
          };
           
          Number.prototype.randomInt = function ( min, max ) {
            return Math.floor( Math.random() * ( max - min + 1 ) + min );
          };
          
          
          // Create styles
          drop.styles();
        
        
            // Initialise
            drop.main();
          });
        
        };
        
        }(jQuery));
        
        
        // USAGE
        $( '.bnr_con h2' ).letterDrop();
// END        


});