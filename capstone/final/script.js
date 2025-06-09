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

    // setTimeout(() => {
    //   messages1.innerHTML += '<p class="ai-message split">Hello there. lknefowneflwnlwndqlnqlnfwegwbgwnslkdnfenofineonfoisnoifnwofinoin</p>';

    //   animateSplit('.split:last-child', () => {
    //     messages1.innerHTML += '<p class="ai-message split">This is the situation Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>';

    //     animateSplit('.split:last-child', () => {
    //       document.querySelector('#scene1-options').classList.remove("hide");
    //     });
    //   });
    // }, 200);



      // messages1.innerHTML += '<p class="ai-message split">Hello there.</p>';

      // messages1.innerHTML += '<p class="ai-message split">This is the situation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fuga molestias sit perferendis dolorem maiores explicabo quas facilis sunt nisi nam, quos omnis! Eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, modi similique saepe aperiam, neque quia itaque aliquam beatae laudantium asperiores cum cupiditate, ad voluptate.</p>';
      // animateSplit('.split');

      // document.querySelector('#scene1-options').classList.remove("hide");

     setTimeout(function(){
       messages1.innerHTML += '<p class="ai-message split">You are a college student with a 10-page research paper swiftly approaching its deadline. You\'re feeling overwhelmed with other classes and extracurriculars, making it difficult to find the time to fully write out your paper. Luckily, your professor allows the usage of AI tools for ideation purposes.</p>';

      setTimeout(function(){
        messages1.innerHTML += '<p class="ai-message split">How would you handle this situation?</p>';

        // animateSplit('.split');

        setTimeout(function(){
          document.querySelector('#scene1-options').classList.remove("hide");

        }, 2000)

      }, 5000);

    }, 500);


    //user selects OPTION1 -- reckless
    document.querySelector('#opt-1a').addEventListener('click', function() {
      recklessScore++;
      counter--;
      opacity();

      console.log(`the counter is ${counter}`);
      console.log(`the reckless score is ${recklessScore}`);


      console.log('user picked reckless option');

      //user sends message
      messages1.innerHTML += '<p class="user-message">I would use AI to generate a thesis and paragraphs based off of basic ideas I have. I\'ll edit the text to sound more like me.</p>';


      //options bar hides
      document.querySelector('#scene1-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages1.innerHTML += '<p class="ai-message"> Interesting choice. Although using AI to brainstorm ideas is permitted, don\'t let AI write the paper for you.</p>';

        setTimeout(function(){
          messages1.innerHTML += '<p class="ai-message">Even if you rewrite a couple sentences or change a few words, the generated text is not your original thoughts.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages1.innerHTML += '<p class="ai-message">Let\'s move onto the next scenario.</p>';

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
      messages1.innerHTML += '<p class="user-message">I would use AI to brainstorm ideas, aid in finding research points, and use it for constructive critiques.</p>';


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
      messages2.innerHTML += '<p class="ai-message">You\'re trying to find your summer internship and are applying as fast as you can to multiple places. You find a really good internship opportunity that has everything you\'re looking for. But they\'re asking for a cover letter that captures your personality and goals, and you don\'t have one.</p>';

      setTimeout(function(){
        messages2.innerHTML += '<p class="ai-message">What will you do?</p>';

        setTimeout(function(){
          document.querySelector('#scene2-options').classList.remove("hide");

        }, 2000)

      }, 5000);

    }, 500);


    //user selects OPTION1 -- reckless
    document.querySelector('#opt-2a').addEventListener('click', function() {
      recklessScore++;
      counter--;
      opacity();

      console.log(`the counter is ${counter}`);
      console.log(`the reckless score is ${recklessScore}`);


      console.log('user picked reckless option');

      //user sends message
      messages2.innerHTML += '<p class="user-message">I would put in my resume and the internship posting and ask AI to write a cover letter off of that. I makes some tweaks afterwards.</p>';


      //options bar hides
      document.querySelector('#scene2-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages2.innerHTML += '<p class="ai-message">Does this method really capture you though?</p>';

        setTimeout(function(){
          messages2.innerHTML += '<p class="ai-message">It\'s easy to use AI to generate a persuasive piece of writing, especially when you\'re tired and overwhelmed, but being able to verbalize your own ideas is a vital skill. What if someone asked you this question in the workplace? Would you be able to tell them your career goals?</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages2.innerHTML += '<p class="ai-message">Let\'s try another scenario.</p>';

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


  // function animateSplit(target, onComplete) {
  //   document.fonts.ready.then(() => {
  //     let split = SplitText.create(target, { type: "words" });

  //     gsap.from(split.words, {
  //       duration: 1.5,
  //       y: 0,
  //       autoAlpha: 0,
  //       stagger: 0.05,
  //       onComplete: onComplete
  //     });
  //   });
  // }




  //GSAP

  // gsap.registerPlugin(SplitText);

  // // split elements with the class "split" into words and characters
  // let split = SplitText.create(".split", { type: "words, chars" });

  // // now animate the characters in a staggered fashion
  // gsap.from(split.chars, {
  //   duration: 1, 
  //   y: 100,       // animate from 100px below
  //   autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  //   stagger: 0.05 // 0.05 seconds between each
  // });





  //function to trigger the opacity changes
  function opacity(){

    if (counter--) {
      console.log('lower!');

      vectorOpacity = Math.max(0, vectorOpacity - 0.2); // Decrease but don’t go below 0
      document.querySelector('#vector1').style.opacity = vectorOpacity;
      document.querySelector('#vector2').style.opacity = vectorOpacity;

      document.querySelector('#vector3a').style.opacity = vectorOpacity;
      document.querySelector('#vector3b').style.opacity = vectorOpacity;

      document.querySelector('#vector4a').style.opacity = vectorOpacity;
      document.querySelector('#vector4b').style.opacity = vectorOpacity;

    }
  }





//gsap.registerPlugin(Draggable, InertiaPlugin);
gsap.registerPlugin(InertiaPlugin) 


  const spin = gsap.timeline({repeat:-1})
  .set("#vector1", { opacity: 1 })
  .fromTo("#vector1", {
    transformOrigin: "50%",
    x: 30,
    y: 30
  },{
    duration: 40,
    rotation: 360,
    ease: "none",
  });

Draggable.create("#vector1", {
  type: "rotation",
  trigger: "#vector1",
  inertia: true,
  onPressInit: () => spin.pause(),
  onDrag: setSpinProgress,  // on drag & throw, use rotation as a progress value for the spin timeline
  onThrowUpdate: setSpinProgress,
  onThrowComplete: () => {
    spin.resume();
    gsap.fromTo(spin, { timeScale: 0 }, { timeScale: 1, ease: "power1.in" });
  }
});

function setSpinProgress() {
  spin.progress(gsap.utils.wrap(0, 360, this.rotation) / 360);
}

// Draggable.create("#vector2", {
//   type: "rotation",
//   inertia: true
// });

// Draggable.create("#vector3a", {
//   type: "rotation",
//   inertia: true
// });

// Draggable.create("#vector3b", {
//   type: "rotation",
//   inertia: true
// });


// const messages = [
//     "Start your journey now",
//     "What path will you take?",
//     "Let's get going",
//     "I wonder what's next"
//   ];

//   const textBox = document.querySelector("#cycle");
//   let index = 0;

//   function typeMessage(message, callback) {
//     textBox.textContent = ""; // Clear previous text
//     const chars = message.split("");
//     chars.forEach((char, i) => {
//       gsap.delayedCall(i * 0.05, () => {
//         textBox.textContent += char;
//         if (i === chars.length - 1 && callback) {
//           gsap.delayedCall(1.5, callback); // Wait a bit before next message
//         }
//       });
//     });
//   }

//   function cycleMessages() {
//     typeMessage(messages[index], () => {
//       index = (index + 1) % messages.length;
//       cycleMessages();
//     });
//   }

//   // Start the cycle
//   cycleMessages();

})();
