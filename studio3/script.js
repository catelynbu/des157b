(function(){
    "use strict";
    console.log('reading js');


    
    // target elements with the "draggable" class
    interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
        })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,

        }
    })

    function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    }




    const myImg = document.querySelector('#cat1')

      

    const filterBoxes = document.querySelectorAll('.filter');
    const filter1 = document.querySelector('#filter1')

    for (let i=0; i<filterBoxes.length; i++){
        filterBoxes[i].addEventListener('click', function(event){
            event.preventDefault();
            if(event.target === filter1){
                console.log('bang');
                if (myImg.complete) {
                    pixelsJS.filterImg(myImg, "horizontal_lines");
                } else {
                    // If the image is not loaded, set up an onload event handler
                    myImg.onload = function () {
                        pixelsJS.filterImg(myImg, "horizontal_lines");
                    };
                }       
            }else if(event.target === filter2){
                console.log('boom');
                if (myImg.complete) {
                    pixelsJS.filterImg(myImg, "perfume");
                } else {
                    // If the image is not loaded, set up an onload event handler
                    myImg.onload = function () {
                        pixelsJS.filterImg(myImg, "perfume");
                    };
                }
            }else if(event.target === filter3){
                console.log('boof');
                if (myImg.complete) {
                    pixelsJS.filterImg(myImg, "vintage");
                } else {
                    // If the image is not loaded, set up an onload event handler
                    myImg.onload = function () {
                        pixelsJS.filterImg(myImg, "vintage");
                    };
                }
            }else if(event.target === filter4){
                console.log('boof');
                if (myImg.complete) {
                    pixelsJS.filterImg(myImg, "extra_offset_blue");
                } else {
                    // If the image is not loaded, set up an onload event handler
                    myImg.onload = function () {
                        pixelsJS.filterImg(myImg, "extra_offset_blue");
                    };
                }
            }
        });
    }

})();