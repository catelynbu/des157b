(function(){
  "use strict";
  console.log('reading js');

  //variables
  const option1 = document.querySelector('#option1');
  const option1text = document.querySelector('#option1 p');

  const option2 = document.querySelector('#option2');
  const option2text = document.querySelector('#option2 p');

  const messages = document.querySelector(".messages");
  


  //running the title screen
  title();


  //title screen: hides option 2, event handler for option 1 -> starts scene 1, removes 'hide' from option2
  function title(){
    option2.classList.add('hide');

    option1text.textContent = 'Start';

    option1.addEventListener('click', function(){
      scene1();

      option2.classList.remove('hide');

    });
  };



  //scene 1
  function scene1(){
    //hiding showing title and scene1
    document.querySelector('#title').className = 'hide';
    document.querySelector('#scene1').className = 'show';


    //filling text for options
    option1text.textContent = 'reckless option';
    option2text.textContent = 'responsible option';



    //user selects OPTION1
    option1.addEventListener('click', function(event) {
      console.log('mustard');

      //user sends message
      messages.innerHTML += '<p class="user-message">I choose the reckless option.</p>';


      //options bar hides
      document.querySelector('.bottom-bar').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the reckless option will affect you.</p>';

        setTimeout(function(){
          document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows, option2 hides, option1 text changes
            document.querySelector('.bottom-bar').classList.remove('hide');
            option2.classList.add('hide');
            option1text.textContent = "Let's move on";

            option1.addEventListener('click', function(){
              scene2();
            });


          }, 2000)


        }, 2000);
      }, 2000);
    })



    //user selects OPTION2
    option2.addEventListener('click', function(event) {
      console.log('mustard');

      //user sends message
      messages.innerHTML += '<p class="user-message">I choose the responsible option.</p>';


      //options bar hides
      document.querySelector('.bottom-bar').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how the responsible option will affect you.</p>';

        setTimeout(function(){
          document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages.innerHTML += '<p class="ai-message">are you ready to move on?</p>';

            //option bar shows, option2 hides, option1 text changes
            document.querySelector('.bottom-bar').classList.remove('hide');
            option2.classList.add('hide');
            option1text.textContent = "Let's move on";

            option1.addEventListener('click', function(){
              scene2();
            });


          }, 2000)


        }, 2000);
      }, 2000);
    })

  }

    

  //scene 2
  function scene2(){
    //hiding showing scene1 and scene2
    document.querySelector('#scene1').className = 'hide';
    document.querySelector('#scene2').className = 'show';


    //showing the options again
    document.querySelector('.bottom-bar').classList.remove('hide');


    //filling text for options
    option1text.textContent = 'responsible option';
    option2text.textContent = 'reckless option';






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
