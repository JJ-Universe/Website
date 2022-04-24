var countDate = new Date('Nov 20, 2022 17:00:00').getTime();

  function releaseDate() {
    var now = new Date().getTime();
    gap = countDate - now;
        
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap % (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / second);

        document.getElementByID('day').innerText = d;
        document.getElementByID('hour').innerText = h;
        document.getElementByID('minute').innerText = m;
        document.getElementByID('second').innerText = s;
  }
  setInterval(function(){
    releaseDate();
  },1000);