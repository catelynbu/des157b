(function(){
    "use strict";
    console.log('reading js');

    const btn = document.querySelector('button');

    const canvas = document.querySelector('canvas');

    const dwnl = document.querySelector('#dwnl');

    const here = document.querySelector('#gohere');


    btn.addEventListener('click', function(){
        console.log('click');

        here.innerHTML += '<p>add this to the canvas<p>'
    })

    dwnl.addEventListener('click', function(){
        
        // const pic = document.getElementById("canvas");
        // let dataURL = pic.toDataURL("image/png, 0.5");
        // console.log(dataURL);


        let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
        console.log(canvasUrl);
        const createEl = document.createElement('a');
        createEl.href = canvasUrl;
        createEl.download = "download-this-canvas";
        createEl.click();
        createEl.remove();

        // const data =  canvas.toDataURL();
        // console.log(data);
    })


})();