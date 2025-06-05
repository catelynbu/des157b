(function(){
  "use strict";
  console.log('reading js');

  //variables

  const messages = document.querySelector(".messages");

  let vectorOpacity = 1; // Initial opacity


  let counter = 0;
  


  //running the title screen
  title();


  //title screen: hides option 2, event handler for option 1 -> starts scene 1, removes 'hide' from option2
  function title(){
    console.log(counter);

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




    //user selects OPTION1 -- reckless
    document.querySelector('#opt-1a').addEventListener('click', function() {
      counter--;
      opacity();
      console.log(counter);


      console.log('user picked reckless option');

      //user sends message
      messages.innerHTML += '<p class="user-message">I choose the reckless option.</p>';


      //options bar hides
      document.querySelector('#scene1-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the reckless option will affect you.</p>';

        setTimeout(function(){
          document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

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
      console.log(counter);

      console.log('user picked responsible option');

      //user sends message
      messages.innerHTML += '<p class="user-message">I choose the responsible option.</p>';


      //options bar hides
      document.querySelector('#scene1-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';

        setTimeout(function(){
          document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

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


    //user selects OPTION1 -- reckless
    document.querySelector('#opt-2a').addEventListener('click', function() {
      counter--;
      opacity();
      console.log(counter);


      console.log('user picked reckless option');

      //user sends message
      messages.innerHTML += '<p class="user-message">I choose the reckless option.</p>';


      //options bar hides
      document.querySelector('#scene2-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the reckless option will affect you.</p>';

        setTimeout(function(){
          document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

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
      console.log(counter);

      console.log('user picked responsible option');

      //user sends message
      messages.innerHTML += '<p class="user-message">I choose the responsible option.</p>';


      //options bar hides
      document.querySelector('#scene2-options').classList.add("hide");


      //chatbot responds
      console.log('peanut butter');
      document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';
      document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';
      messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

      // setTimeout(function(){
      //   document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';

      //   setTimeout(function(){
      //     document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

      //     setTimeout(function(){
      //       //chatbot asks if user is ready to move on
      //       messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

      //       //option bar shows, option2 hides, option1 text changes
      //       document.querySelector('#scene2-options').classList.remove('hide');
      //       document.querySelector('#opt-2a').classList.add('hide');
      //       document.querySelector('#opt-2b').classList.add('hide');
      //       document.querySelector('#opt-2c').classList.remove('hide');




      //     }, 2000)


      //   }, 2000);
      // }, 2000);
    })

  }



  function opacity(){

    if (counter--) {
      console.log('lower!');

      vectorOpacity = Math.max(0, vectorOpacity - 0.2); // Decrease but don’t go below 0
      document.querySelector('#vector1').style.opacity = vectorOpacity;
    }
  }







  //use this instead of calling scrollToBottom() in each option---- needs to be inside each event handler though meaning it will need to be refactored later
  // if (message) {
  //   document.querySelector('.messages').innerHTML += `<p class="user-message">${message}</p>`;
  //   scrollToBottom();
  // }



  //to make sure the messages always appear at the bottom --- not working
  // function scrollToBottom() {
  //   const messages = document.querySelector('.messages');
  //   messages.scrollTop = messages.scrollHeight;
  // }

  // scroll to bottom on initial load --- doesnt work?
  // window.addEventListener('load', scrollToBottom);


  //use onclick rather than click?
})();
