function clock () {
        let now = new Date(); //получаем текущую дату
        let context = document.getElementById('canvas').getContext('2d'); //устанавливаем контекст
        context.width = 800;
        context.height = 80;
        context.save();
        context.clearRect(0,0, context.width, context.height);
        context.translate(30,20);
        context.textBaseline='top';
        context.font='bold 30px Arial';
        context.fillText(`${now.getHours()} ${now.getMinutes()} ${now.getSeconds()}`,0 ,0);
        context.restore();
        window.requestAnimationFrame(clock); 
     };
     window.requestAnimationFrame(clock);
