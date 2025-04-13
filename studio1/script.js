(function(){
    'use strict';

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');

    const intervalID = setInterval(checkTime, 1000);

    const video = document.querySelector('#myVideo');

    const fs = document.querySelector('.fa-expand');

    fs.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }else{
            document.exitFullscreen();
        }
    })

    function checkTime(){
        if (1 < video.currentTime && video.currentTime < 3){
            line1.className = 'showing';
        }else{
            line1.className = 'hidden';
        }
        if (2 < video.currentTime && video.currentTime < 4){
            line2.className = 'showing';
        }else{
            line2.className = 'hidden';
        }
        if (3 < video.currentTime && video.currentTime < 6){
            line3.className = 'showing';
        }else{
            line3.className = 'hidden';
        }
    }

    function hueRange(){
        const hueRange = document.querySelector('input');
        
        hueRange.addEventListener('input', function(e){
            console.log(hueRange.value);

            video.style.filter = `hue-rotate(${hueRange.value}deg)`;

        })

    }

    hueRange();

})();