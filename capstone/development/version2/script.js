(function(){
  "use strict";
  console.log('reading js');

  //variables
  const messages1 = document.querySelector('#messages1');
  const messages2 = document.querySelector('#messages2');
  const messages3 = document.querySelector('#messages3');
  const messages4 = document.querySelector('#messages4');
  const messages5 = document.querySelector('#messages5');



  let vectorOpacity = 1; // Initial opacity


  //counters
  let counter = 0; //overall score
  let responsibleScore = 0; //score for responsible ai usage
  let recklessScore = 0; //score for reckless ai usage
  


  //running the title screen
  title();


  //title screen: hides option 2, event handler for option 1 -> starts scene 1, removes 'hide' from option2
  function title(){
    console.log(`the counter is ${counter}`);
    console.log(`the responsbile score is ${responsibleScore}`);
    console.log(`the reckless score is ${recklessScore}`);


    document.querySelector('#title-option1').addEventListener('click', function(){
      console.log('title off, scene1 on');
      scene1();

    });
  };



  //scene 1
  function scene1(){
    //hiding showing title and scene1 + scene1 options
    document.querySelector('#title').className = 'hide';
    document.querySelector('#scene1').className = 'show';

    document.querySelector('#scene1-options').classList.add("hide");


    
    //beginning messages
    setTimeout(function(){
      messages1.innerHTML += '<p class="ai-message">Hello there.</p>';

      setTimeout(function(){
        messages1.innerHTML += '<p class="ai-message">This is the situation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fuga molestias sit perferendis dolorem maiores explicabo quas facilis sunt nisi nam, quos omnis! Eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, modi similique saepe aperiam, neque quia itaque aliquam beatae laudantium asperiores cum cupiditate, ad voluptate.</p>';

        setTimeout(function(){
          document.querySelector('#scene1-options').classList.remove("hide");

        }, 2000)

      }, 1000);

    }, 1000);


    //user selects OPTION1 -- reckless
    document.querySelector('#opt-1a').addEventListener('click', function() {
      recklessScore++;
      counter--;
      opacity();

      console.log(`the counter is ${counter}`);
      console.log(`the reckless score is ${recklessScore}`);


      console.log('user picked reckless option');

      //user sends message
      messages1.innerHTML += '<p class="user-message">I choose the reckless option.</p>';


      //options bar hides
      document.querySelector('#scene1-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages1.innerHTML += '<p class="ai-message">Interesing choice, this is how the reckless option will affect you.</p>';

        setTimeout(function(){
          messages1.innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages1.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows
            document.querySelector('#scene1-options').classList.remove('hide');
            document.querySelector('#opt-1a').classList.add('hide');
            document.querySelector('#opt-1b').classList.add('hide');
            document.querySelector('#opt-1c').classList.remove('hide');


          }, 2000)


        }, 2000);
      }, 2000);
    })


    //user selects OPTION2 -- responsible
    document.querySelector('#opt-1b').addEventListener('click', function() {
      counter++;
      responsibleScore++;
      console.log(`the counter is ${counter}`);
      console.log(`the responsbile score is ${responsibleScore}`);

      console.log('user picked responsible option');

      //user sends message
      messages1.innerHTML += '<p class="user-message">I choose the responsible option.</p>';


      //options bar hides
      document.querySelector('#scene1-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages1.innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';

        setTimeout(function(){
          messages1.innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages1.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows, option2 hides, option1 text changes
            document.querySelector('#scene1-options').classList.remove('hide');
            document.querySelector('#opt-1a').classList.add('hide');
            document.querySelector('#opt-1b').classList.add('hide');
            document.querySelector('#opt-1c').classList.remove('hide');




          }, 2000)


        }, 2000);
      }, 2000);
    })


    //THIRD OPTION APPEARS  
    document.querySelector('#opt-1c').addEventListener('click', function(){
      console.log('this is when scene 2 play')
      scene2();
      // opacity();
      // console.log(counter);
    });
  }

    

  //scene 2
  function scene2(){
    //hiding showing title and scene2 + scene2 options
    document.querySelector('#scene1').className = 'hide';
    document.querySelector('#scene2').className = 'show';

    document.querySelector('#scene2-options').classList.add("hide");

    //beginning messages
    setTimeout(function(){
      messages2.innerHTML += '<p class="ai-message">Hello there.</p>';

      setTimeout(function(){
        messages2.innerHTML += '<p class="ai-message">This is the situation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fuga molestias sit perferendis dolorem maiores explicabo quas facilis sunt nisi nam, quos omnis! Eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, modi similique saepe aperiam, neque quia itaque aliquam beatae laudantium asperiores cum cupiditate, ad voluptate.</p>';

        setTimeout(function(){
          document.querySelector('#scene2-options').classList.remove("hide");

        }, 2000)

      }, 1000);

    }, 1000);


    //user selects OPTION1 -- reckless
    document.querySelector('#opt-2a').addEventListener('click', function() {
      recklessScore++;
      counter--;
      opacity();

      console.log(`the counter is ${counter}`);
      console.log(`the reckless score is ${recklessScore}`);


      console.log('user picked reckless option');

      //user sends message
      messages2.innerHTML += '<p class="user-message">I choose the reckless option.</p>';


      //options bar hides
      document.querySelector('#scene2-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages2.innerHTML += '<p class="ai-message">Interesing choice, this is how the reckless option will affect you.</p>';

        setTimeout(function(){
          messages2.innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages2.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows
            document.querySelector('#scene2-options').classList.remove('hide');
            document.querySelector('#opt-2a').classList.add('hide');
            document.querySelector('#opt-2b').classList.add('hide');
            document.querySelector('#opt-2c').classList.remove('hide');


          }, 2000)


        }, 2000);
      }, 2000);
    })

    //user selects OPTION2 -- responsible
    document.querySelector('#opt-2b').addEventListener('click', function() {
      counter++;
      responsibleScore++;
      console.log(`the counter is ${counter}`);
      console.log(`the responsbile score is ${responsibleScore}`);

      console.log('user picked responsible option');

      //user sends message
      messages2.innerHTML += '<p class="user-message">I choose the responsible option.</p>';


      //options bar hides
      document.querySelector('#scene2-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages2.innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';

        setTimeout(function(){
          messages2.innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages2.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows, option2 hides, option1 text changes
            document.querySelector('#scene2-options').classList.remove('hide');
            document.querySelector('#opt-2a').classList.add('hide');
            document.querySelector('#opt-2b').classList.add('hide');
            document.querySelector('#opt-2c').classList.remove('hide');




          }, 2000)


        }, 2000);
      }, 2000);
    })

    //THIRD OPTION APPEARS  
    document.querySelector('#opt-2c').addEventListener('click', function(){
      scene3();
      opacity();
      console.log(counter);
    });
  }



  //scene 3
  function scene3(){
    //hiding showing title and scene2 + scene2 options
    document.querySelector('#scene2').className = 'hide';
    document.querySelector('#scene3').className = 'show';

    document.querySelector('#scene3-options').classList.add("hide");

    //beginning messages
    setTimeout(function(){
      messages3.innerHTML += '<p class="ai-message">Hello there.</p>';

      setTimeout(function(){
        messages3.innerHTML += '<p class="ai-message">This is the situation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fuga molestias sit perferendis dolorem maiores explicabo quas facilis sunt nisi nam, quos omnis! Eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, modi similique saepe aperiam, neque quia itaque aliquam beatae laudantium asperiores cum cupiditate, ad voluptate.</p>';

        setTimeout(function(){
          document.querySelector('#scene3-options').classList.remove("hide");

        }, 2000)

      }, 1000);

    }, 1000);


    //user selects OPTION1 -- reckless
    document.querySelector('#opt-3a').addEventListener('click', function() {
      recklessScore++;
      counter--;
      opacity();

      console.log(`the counter is ${counter}`);
      console.log(`the reckless score is ${recklessScore}`);


      console.log('user picked reckless option');

      //user sends message
      messages3.innerHTML += '<p class="user-message">I choose the reckless option.</p>';


      //options bar hides
      document.querySelector('#scene3-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages3.innerHTML += '<p class="ai-message">Interesing choice, this is how the reckless option will affect you.</p>';

        setTimeout(function(){
          messages3.innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages3.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows
            document.querySelector('#scene3-options').classList.remove('hide');
            document.querySelector('#opt-3a').classList.add('hide');
            document.querySelector('#opt-3b').classList.add('hide');
            document.querySelector('#opt-3c').classList.remove('hide');


          }, 2000)


        }, 2000);
      }, 2000);
    })

    //user selects OPTION2 -- responsible
    document.querySelector('#opt-3b').addEventListener('click', function() {
      counter++;
      responsibleScore++;
      console.log(`the counter is ${counter}`);
      console.log(`the responsbile score is ${responsibleScore}`);

      console.log('user picked responsible option');

      //user sends message
      messages3.innerHTML += '<p class="user-message">I choose the responsible option.</p>';


      //options bar hides
      document.querySelector('#scene3-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages3.innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';

        setTimeout(function(){
          messages3.innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages3.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows, option2 hides, option1 text changes
            document.querySelector('#scene3-options').classList.remove('hide');
            document.querySelector('#opt-3a').classList.add('hide');
            document.querySelector('#opt-3b').classList.add('hide');
            document.querySelector('#opt-3c').classList.remove('hide');




          }, 2000)


        }, 2000);
      }, 2000);
    })

    //THIRD OPTION APPEARS  
    document.querySelector('#opt-3c').addEventListener('click', function(){
      // summary();
      // opacity();
      // console.log(counter);

        if (recklessScore > responsibleScore){
          console.log('ending 1');
          summary1();
        } else{
          console.log('ending 2');
          summary2();
        }
    });
  }





  //ending: summary 1
  function summary1(){
    document.querySelector('#scene3').className = 'hide';     //replace #scene3 with the last scene
    document.querySelector('#summary1').className = 'show';

    document.querySelector('#reckless-score').innerHTML = `<p>You chose the reckless option <span>${recklessScore}</span> out of 5 times.</p>`
  }

  //ending: summary 2
  function summary2(){
    document.querySelector('#scene3').className = 'hide';     //replace #scene3 with the last scene
    document.querySelector('#summary2').className = 'show';

    document.querySelector('#reckless-score').innerHTML = `<p>You chose the responsible option <span>${responsibleScore}</span> out of 5 times.</p>`
  }








  //function to trigger the opacity changes
  function opacity(){

    if (counter--) {
      console.log('lower!');

      vectorOpacity = Math.max(0, vectorOpacity - 0.2); // Decrease but don’t go below 0
      document.querySelector('#vector1').style.opacity = vectorOpacity;
      document.querySelector('#vector2').style.opacity = vectorOpacity;
    }
  }





  //use onclick rather than click?
})();
