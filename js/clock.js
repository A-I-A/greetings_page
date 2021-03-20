function clock () {
        let now = new Date(); //получаем текущую дату
        let canvas = document.getElementById('clock');
        canvas.width=800;
        canvas.height=35;
        let context = document.getElementById('clock').getContext('2d'); //устанавливаем контекст
        context.width = 800;
        context.height = 100;
        context.save();
        context.clearRect(0,0, context.width, context.height);
        context.textBaseline='top';
        context.font='bold 14pt Arial';
        time = now.toLocaleTimeString();
        day = formatDay(now.getDay());
        date = `${now.getMonth()}.${now.getFullYear()}`;
        context.fillText(`${time}`,250 ,10);
        context.fillText(`${date}, ${day}`,400 ,10);
        context.restore();
        window.requestAnimationFrame(clock); 
     };
     window.requestAnimationFrame(clock);



function formatDay (d){
  switch (d){
    case 0 : return "Воскресенье";
    break;
    case 1 : return "Понедельник";
    break;
    case 2 : return "Вторник";
    break;
    case 3 : return "Среда";
    break;
    case 4 : return "Четверг";
    break;
    case 5 : return "Пятница";
    break;
    case 6 : return "Суббота";
    break;
   }
}


  
