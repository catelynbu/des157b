(function(){
  "use strict";
  console.log('reading js');

  //variables
  const messages1 = document.querySelector('#messages1');
  const messages2 = document.querySelector('#messages2');



  let vectorOpacity = 1; // Initial opacity


  let counter = 0;

  let responsibleScore = 0;

  let recklessScore = 0;
  


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
    //hiding showing title and scene1
    document.querySelector('#title').className = 'hide';
    document.querySelector('#scene1').className = 'show';

    document.querySelector('#scene1-options').classList.add("hide");


    

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
    //hiding showing title and scene1
    document.querySelector('#scene1').className = 'hide';
    document.querySelector('#scene2').className = 'show';

    document.querySelector('#scene2-options').classList.add("hide");


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
      console.log('peanut butter');
      // document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';
      // document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';
      // messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

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

  }



  function opacity(){

    if (counter--) {
      console.log('lower!');

      vectorOpacity = Math.max(0, vectorOpacity - 0.2); // Decrease but don’t go below 0
      document.querySelector('#vector1').style.opacity = vectorOpacity;
    }
  }





  //use onclick rather than click?
})();
