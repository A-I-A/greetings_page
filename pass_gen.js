function passGen (){
           letters = "abcdefghijklmnopqrstuvwxyz";
           big_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
           numbers = "1234567890";
           symbols = "!@#$%^&*=?";
           let result =[];
           for (i=0; i<2; i++){
             result.push(randomChoice(letters));           //Эта функция генерирует восьмизначный пароль
             result.push(randomChoice(big_letters));       //в пароль закладывается по 2 символа из наборов
             result.push(randomChoice(numbers));
             result.push(randomChoice(symbols));
           }
           result = shuffle(result);
           let finalString = result.join("");
           //alert(finalString);

           document.getElementById("pass").innerHTML=finalString;
           
         }
         
        function randomChoice (arr){
         let char = "";
         char = arr[Math.floor(Math.random(0) * arr.length)];
         return char;
         }
            
         function shuffle(arr) {
           for (i = 0; i < arr.length; i++){
             let index = Math.floor(Math.random(0) * arr.length);
             let item1 = arr[i];
             let item2 = arr[index];
             if (item1 != item2){                             //страхуемся от дубликатов
               arr[i] = item2;
               arr[index] = item1;
             }
           }  
         return arr;  
         }
