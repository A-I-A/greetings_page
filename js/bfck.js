      function translate_bfck (){
        let input = document.getElementById('bfckmessage').value; 
        let initialArray = new Array (1000);
        initialArray.fill(0);  
        let carriage = 0;
        let index =0;
        let finalString = "";
        
        for (; index < input.length; index++ ){
          switch (input[index]){
          case "+" : initialArray[carriage] +=1;
          break;
          case "-" : initialArray[carriage] -=1;
          break;
          case "." : finalString += String.fromCharCode(initialArray[carriage]);
          break;
          case "," : initialArray[carriage]=prompt("Введите число",0);
          break;
          case ">" : carriage++;
          break;
          case "<" : carriage--;
          break;
          case "[" : if (initialArray[carriage] == 0)
                         {index = findRightBrace(input, index) + 1;}
                     break;
          case "]" : if (initialArray[carriage] != 0)
                         {index = findLeftBrace(input, index);}           
                     break;
          }
        }

       document.getElementById("bfckmessage").value=finalString;
      } 
      
      function findRightBrace (input, index){
          while (input[index] != "]") {
              index++;
          }
          /*alert(index);*/
          return index;
      }
      
      function findLeftBrace (input, index){
          while (input[index] != "[") {
              index--;
          }
          /*alert(index);*/
          return index;
      }
      

      


