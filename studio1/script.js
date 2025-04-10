(function(){
    'use strict';

    // const mySection = document.querySelector('#mysection');
    // const myLine = document.querySelector('#caption');
    // const myPic = document.querySelector('#mypicture');

    // const intervalID = setInterval(checkTime, 1000);

    const video = document.querySelector('#myVideo');

    const fs = document.querySelector('.fa-expand');

    fs.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }else{
            document.exitFullscreen();
        }
    })

    // function checkTime(){
    //     if (1 < myVideo.currentTime && myVideo.currentTime < 3){
    //         myLine.className = 'showing';
    //     }else{
    //         myLine.className = 'hidden';
    //     }
    //     if (5 < myVideo.currentTime && myVideo.currentTime < 7){
    //         myPic.className = 'showing';
    //     }else{
    //         myPic.className = 'hidden';
    //     }

    //     if (4 < myVideo.currentTime && myVideo.currentTime < 6){
    //         myVideo.classList.add('filter');
    //     }else{
    //         myVideo.classList.remove('filter');
    //     }
    // }

    function hueRange(){
        const hueRange = document.querySelector('input');
        
        hueRange.addEventListener('input', function(e){
            console.log(hueRange.value);

            video.style.filter = `hue-rotate(${hueRange.value}deg)`;

        })

    }

    hueRange();

})();