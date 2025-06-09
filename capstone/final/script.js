(function(){
  "use strict";
  console.log('reading js');

  //variables
  const messages1 = document.querySelector('#messages1');
  const messages2 = document.querySelector('#messages2');
  const messages3 = document.querySelector('#messages3');
  const messages4 = document.querySelector('#messages4');


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
      messages2.innerHTML += '<p class="user-message">I would use AI to give me pointers of what makes a strong cover letter. Then I would draft a letter off of that and use AI to make refinements.</p>';


      //options bar hides
      document.querySelector('#scene2-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages2.innerHTML += '<p class="ai-message">That seems like an efficient approach.</p>';

        setTimeout(function(){
          messages2.innerHTML += '<p class="ai-message">It\'s hard to start from scratch so getting an outline would help your process while still giving you the opportunity to share your story with your added personality</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages2.innerHTML += '<p class="ai-message">Let\'s try another scenario.</p>';

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
      messages3.innerHTML += '<p class="ai-message">You are planning to attend a college career fair, seeking to make good impressions with employers and alumni to make career boosting connections. You\'re feeling a bit nervous about starting conversations with these people.</p>';

      setTimeout(function(){
        messages3.innerHTML += '<p class="ai-message">How would you prepare for this situation?</p>';

        setTimeout(function(){
          document.querySelector('#scene3-options').classList.remove("hide");

        }, 2000)

      }, 1000);

    }, 1000);


    //user selects OPTION1 -- responsible
    document.querySelector('#opt-3a').addEventListener('click', function() {
      counter++;
      responsibleScore++;
      console.log(`the counter is ${counter}`);
      console.log(`the responsbile score is ${responsibleScore}`);

      console.log('user picked responsible option');

      //user sends message
      messages3.innerHTML += '<p class="user-message">I would use AI to research the employers and alumni that are attending to understand their backgrounds and then recall personal experiences to connect with them.</p>';


      //options bar hides
      document.querySelector('#scene3-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages3.innerHTML += '<p class="ai-message">That approach seems like a good way to prepare yourself to ease your nervousness.</p>';

        setTimeout(function(){
          messages3.innerHTML += '<p class="ai-message">Social interactions can be nerve-wracking, especially with seniors in your field of study.  Using AI to aid your research and find opportunities for personal connections can help you smoothly engage in conversations.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages3.innerHTML += '<p class="ai-message">Let\'s see what\'s next.</p>';

            //option bar shows, option2 hides, option1 text changes
            document.querySelector('#scene3-options').classList.remove('hide');
            document.querySelector('#opt-3a').classList.add('hide');
            document.querySelector('#opt-3b').classList.add('hide');
            document.querySelector('#opt-3c').classList.remove('hide');




          }, 2000)


        }, 2000);
      }, 2000);
    })

    //user selects OPTION2 -- reckless
    document.querySelector('#opt-3b').addEventListener('click', function() {
      recklessScore++;
      counter--;
      opacity();

      console.log(`the counter is ${counter}`);
      console.log(`the reckless score is ${recklessScore}`);


      console.log('user picked reckless option');

      //user sends message
      messages3.innerHTML += '<p class="user-message">I would use to summarize information about the attendees and then ask it to write a script I can memorize and repeat later when I see them.</p>';


      //options bar hides
      document.querySelector('#scene3-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages3.innerHTML += '<p class="ai-message">Would this approach improve your conversation skills or your memorization skills?</p>';

        setTimeout(function(){
          messages3.innerHTML += '<p class="ai-message">It\'s easy to ask AI to tell you what you should say, but that doesn\'t prepare you for a conversation that doesn\'t follow AI\'s prediction. Would this approach actually prepare you and make a meaningful connection?</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages3.innerHTML += '<p class="ai-message">Let\'s see what\'s next.</p>';

            //option bar shows
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
      scene4();
      console.log(counter);
    });
  }



  //scene 4
  function scene4(){
    document.querySelector('#scene3').className = 'hide';
    document.querySelector('#scene4').className = 'show';

    document.querySelector('#scene4-options').classList.add("hide");

    //beginning messages
    setTimeout(function(){
      messages4.innerHTML += '<p class="ai-message">You have a big midterm next week in a tough class. You/’re short on time and feeling stressed about how much material you need to review. You want to make the most of the next few days and need to prepare efficiently.</p>';

      setTimeout(function(){
        messages4.innerHTML += '<p class="ai-message">How would you study for the exam?</p>';

        setTimeout(function(){
          document.querySelector('#scene4-options').classList.remove("hide");

        }, 2000)

      }, 1000);

    }, 1000);


    //user selects OPTION1 -- responsible
    document.querySelector('#opt-4a').addEventListener('click', function() {
      counter++;
      responsibleScore++;
      console.log(`the counter is ${counter}`);
      console.log(`the responsbile score is ${responsibleScore}`);

      console.log('user picked responsible option');

      //user sends message
      messages4.innerHTML += '<p class="user-message">I would use AI to generate break down difficult concepts and create custom flashcards based on my class notes.</p>';


      //options bar hides
      document.querySelector('#scene4-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages4.innerHTML += '<p class="ai-message">This method tackles studying in a proactive manner.</p>';

        setTimeout(function(){
          messages4.innerHTML += '<p class="ai-message">Creating your own flash cards could be time-consuming and using AI would speed the process up, giving you more time to study. Verifying that the content is accurate to your notes also prevents you from studying false information.</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages4.innerHTML += '<p class="ai-message">Let\'s see what\'s next.</p>';

            //option bar shows, option2 hides, option1 text changes
            document.querySelector('#scene4-options').classList.remove('hide');
            document.querySelector('#opt-4a').classList.add('hide');
            document.querySelector('#opt-4b').classList.add('hide');
            document.querySelector('#opt-4c').classList.remove('hide');




          }, 2000)


        }, 2000);
      }, 2000);
    })

    //user selects OPTION2 -- reckless
    document.querySelector('#opt-4b').addEventListener('click', function() {
      recklessScore++;
      counter--;
      opacity();

      console.log(`the counter is ${counter}`);
      console.log(`the reckless score is ${recklessScore}`);


      console.log('user picked reckless option');

      //user sends message
      messages4.innerHTML += '<p class="user-message">I would use AI to generate summaries of each of the course\'s readings and quizzes for the sake of time, since it will cover everything I need to know.</p>';


      //options bar hides
      document.querySelector('#scene4-options').classList.add("hide");


      //chatbot responds
      setTimeout(function(){
        messages4.innerHTML += '<p class="ai-message">How would you verify those summaries are accurate?</p>';

        setTimeout(function(){
          messages4.innerHTML += '<p class="ai-message">Using AI to summarize is a powerful tool to absorb information quickly, but it discourages verification or any deeper engagement. Would summaries be the best way to learn course concepts to ensure you actually understand the content?</p>';

          setTimeout(function(){
            //chatbot asks if user is ready to move on
            messages4.innerHTML += '<p class="ai-message">Those are all of the scenarios I have for you. Let\'s review your responses.</p>';

            //option bar shows
            document.querySelector('#scene4-options').classList.remove('hide');
            document.querySelector('#opt-4a').classList.add('hide');
            document.querySelector('#opt-4b').classList.add('hide');
            document.querySelector('#opt-4c').classList.remove('hide');


          }, 2000)


        }, 2000);
      }, 2000);
    })



    //THIRD OPTION APPEARS  
    document.querySelector('#opt-4c').addEventListener('click', function(){
      scene4();
      console.log(counter);

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
    document.querySelector('#scene4').className = 'hide';
    document.querySelector('#summary1').className = 'show';

    document.querySelector('#reckless-score').innerHTML = `<p>You chose the reckless option <span>${recklessScore}</span> out of 4 times.</p>`
  }

  //ending: summary 2
  function summary2(){
    document.querySelector('#scene4').className = 'hide';
    document.querySelector('#summary2').className = 'show';

    document.querySelector('#responsible-score').innerHTML = `<p>You chose the responsible option <span>${responsibleScore}</span> out of 4 times.</p>`
  }


  //restart button
  const againbtn = document.querySelectorAll('.again');

  for (let i=0; i<againbtn.length; i++){
    againbtn[i].addEventListener('click', function(){
      location.reload();
    })
  }
    



  //function to trigger the opacity changes
  function opacity(){
    if (counter--) {
      console.log('lower!');

      vectorOpacity = Math.max(0, vectorOpacity - 0.2);
      document.querySelector('#vector1').style.opacity = vectorOpacity;
      document.querySelector('#vector2').style.opacity = vectorOpacity;

      document.querySelector('#vector3a').style.opacity = vectorOpacity;
      document.querySelector('#vector3b').style.opacity = vectorOpacity;

      document.querySelector('#vector4a').style.opacity = vectorOpacity;
      document.querySelector('#vector4b').style.opacity = vectorOpacity;

    }
  }





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

})();
