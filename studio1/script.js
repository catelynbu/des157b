(function(){
    'use strict';

    const mySection = document.querySelector('#mysection');
    const myLine = document.querySelector('#line1');

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
        if (1 < myVideo.currentTime && myVideo.currentTime < 5){
            myLine.className = 'showing';
        }else{
            myLine.className = 'hidden';
        }
        // if (5 < myVideo.currentTime && myVideo.currentTime < 7){
        //     myLine.className = 'showing';
        // }else{
        //     myLine.className = 'hidden';
        // }
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