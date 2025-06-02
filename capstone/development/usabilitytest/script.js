(function(){
  "use strict";
  console.log('reading js');

  alert("you are a busy college student going through midterm season. you turn to your ai tool of choice to help you through this intense time. go through the interactive experience to see what happens to you in the moment and in the future.")


  //start screen: user presses start, title hides, scene1 shows
  const startbtn = document.querySelector('#start-btn');
  startbtn.addEventListener('click', function(){
    document.querySelector('#title').className = 'hide';
    document.querySelector('#scene1').className = 'show';
  });


  
  //scene 1: user presses option 1 or 2
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');

  document.querySelector('.bottom-bar').addEventListener('click', function(event) {
    if (event.target.id === 'option1') {
      document.querySelector('.messages').innerHTML += '<p class="user-message">I chose option 1.</p>';
      // scrollToBottom();
      console.log('bleep');

      setTimeout(function(){
        document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how option 1 will affect you.</p>';

        setTimeout(function(){
          document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          //why no work idk
          setTimeout(transition(),3000);
        }, 2000);
      }, 2000);

   



    } else if (event.target.id === 'option2') {
      document.querySelector('.messages').innerHTML += '<p class="user-message">I chose option 2.</p>';
      // scrollToBottom();
      console.log('blop');

      setTimeout(function(){
        document.querySelector('.messages').innerHTML += '<p class="ai-message">Interesing choice, this is how option 2 will affect you.</p>';

        setTimeout(function(){
          document.querySelector('.messages').innerHTML += '<p class="ai-message">Here is some data to back up my claim.</p>';

          //why no work idk
          setTimeout(transition(),3000);
        }, 2000)
      }, 2000)
    }

    //after the uses selects option 1, the option bar disapears to prevent spam
    //eventually this should change to a better animation instead
    document.querySelector('.bottom-bar').classList.add("hide");

  });


  function transition(){
    document.querySelector('.messages').innerHTML += '<p class="ai-message">are you ready to move on?</p>';

    document.querySelector('.bottom-bar').classList.remove("hide");

    document.querySelector('.bottom-bar').addEventListener('click', function(event) {
      if (event.target.id === 'option1' || event.target.id === 'option2') {
        document.querySelector('#scene1').className = 'hide';
        document.querySelector('#scene2').className = 'show';
      }
    })
  }

  //eventually, the bottom bar should be targetable by the options inside of it to toggle visibility of options (giving the user 1 option only vs multiple options). additionally, the bottom bar will be reusable between pages -- text inside the options will be replaced and they will redirect to other outcomes, but they use the same base, empty html




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

})();
