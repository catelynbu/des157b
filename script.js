(function() {
    'use strict';
    console.log('reading js');

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const links = document.querySelectorAll('a');
    const whtsparkle = document.querySelectorAll('.white');
    const blksparkle = document.querySelectorAll('.black');

    let mode = 'light';

    // for (let i=0; i<links.length; i++){
    //     links[i].addEventListener('mouseover', function(){
    //         links[i].innerHTML += 'add svg';
    //     })

    //     links[i].addEventListener('mouseout', function(){
    //         links[i].innerHTML - 'add svg';
    //     })

    // }



    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.className = 'switch';

            for (let i=0; i<links.length; i++){
                links[i].className = 'switch';


            }



            for (let i=0; i<blksparkle.length; i++){
                blksparkle[i].classList.add('hidden');
            }

            
            for (let i=0; i<blksparkle.length; i++){
                whtsparkle[i].classList.remove('hidden');
            }


            

            mode = 'dark';
        } else {
            body.removeAttribute('class');

            for (let i=0; i<links.length; i++){
                links[i].removeAttribute('class');
            }

            for (let i=0; i<blksparkle.length; i++){
                blksparkle[i].classList.remove('hidden');
            }

            for (let i=0; i<blksparkle.length; i++){
                whtsparkle[i].classList.add('hidden');
            }

            mode = 'light'
        }
    })
})()