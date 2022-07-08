'use strict';
console.log('Ready to go!');

// NOTE: Use Arrow function syntax when adding event listeners!

// PRO TIP: A string is nothing more than an array of characters
const main = () => {


  // Exercise 1:
  // Create a page with a blank label and a text area. 
  let ex1Div = document.createElement('div');
  ex1Div.setAttribute('id', 'ex1-container');
  //add div to html
  document.body.append(ex1Div);
  let label = document.createElement('label');
  let textarea = document.createElement('textarea');
  //add label and text area to div
  ex1Div.append(label);
  ex1Div.append(textarea);
  //label needs to have for attribute tying it to the textarea
  label.setAttribute('for', 'my-text-area');
  //label needs default writing
  label.textContent = 'Write in the text area!';
  //textarea needs id and name
  textarea.setAttribute('id', 'my-text-area');
  textarea.setAttribute('name', 'my-text-area');

  // When someone types into the text area, change the label to show what the person has typed.
  //keydown event works when any key is pressed down
   textarea.addEventListener('keydown', () => {
    //set the label's text content to whatever value is in the textarea, we can use .value b/c textarea is input
    label.textContent = textarea.value;
   });


  //   Exercise 2:
  // Using the exercise above, replace the user's typing with the string below. 
  // Each time they press a key, a letter from the string below should display in the label instead. 
  // There's no need to have the text start over from the beginning.

  let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED.Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
  //okay...a string is nothing more than an array of characters...
  //use str.split('') method to split all string characters up, then push them into an array, 
  //then iterate through the array each time the key is pressed down.
  //wait, string.split returns an array, i just need to declare one
  //the default of a keydown event would be the key being pressed down? if i press a key, the character i pressed will be typed, could i preventDefault so character typed isn't printed, but what i wanted to print?
  //preventDefault does in fact prevent the typing, but why isn't it printing out each character with the .forEach method??
  //something is wrong with the logic of that...oh...i'm replacing the label, not the textarea
  //since it's an input, if i use textarea.value, i can get whatever's typed in the textarea and print it as the label's text content

  //create a new array using the .split() method to split each individual character of the codecrewstring into individual characters
  let codeCrewStringArray = codeCrewString.split('');

  // codeCrewStringArray.forEach(char => textarea.addEventListener('keydown', ()=>{
  //   console.log(char);
  // }));
  //NOTE: this isn't working, i'm attaching an event listener to the textarea for each character in the array, each time i keydown, it's printing the entire array, i want it to print one at a time
  //maybe i need the array.map() method instead

  //NOTE: this is literally printing out the entire array all at once each time the key is pressed down, i want it to go one at a time
  // textarea.addEventListener('keydown', ()=>{
  //   //print each character in the textarea, then take the textarea.value and print it as the label's textcontent
  //   codeCrewStringArray.forEach(char => console.log(char));
  //   label.textContent = textarea.value;
  //   // e.preventDefault();
  // })
 // NOTE: what if i used the .shift() method, removed the first item of the array, printed it out, and looped through the length of the codeCrewStringArray doing that?
//  for(let i=0; i<codeCrewStringArray.length; i++){
//   console.log(codeCrewStringArray.shift());
//  }

//NOTE: this prints out a each character from array one at a time, the way i want, but it keeps setting the textContent as an individual letter, i want it to hold its value
//there's gotta be an easy way to do this
//hard way, save each array value being shifted into local storage as a string, then each time the key is pressed, localStorage.getItem, then add more text?? feel like that's doing too much and wouldn't really work
//  textarea.addEventListener('keydown', (e)=>{
//   e.preventDefault();
//   label.textContent = codeCrewStringArray.shift();
//  })
//NOTE: Just realized i did the first exercise wrong, just updated so label changes to what the user types in instead of label change to random string i came up with
//with that in mind, i can just 
//textarea.value to string[i]
//NOTE: lets rethink this
//what if i push all the shifted characters into a new array, then immediately set the text content to that array?
//need to use array.join() method to add the array characters together
//NOTE: i have no idea how to get rid of the commas once the characters are printing
// //declare empty array
// let newArr = [];
// textarea.addEventListener('keydown', (e) => {
//   //set the label's text content to whatever value is in the textarea, we can use .value b/c textarea is input
//   e.preventDefault();
//   //push all shifted array items to newArr
//   newArr.push(codeCrewStringArray.shift());
//   //.join method to join each newArr character together
//   newArr.join(' ');
//   //set the textarea's text content to newArr so whenever the user presses the key, a new character from newArr is put in the textarea, gives illusion of ghost typing
//   textarea.textContent = newArr;
//   //set the label's textcontent to whatever value is in the textarea
//   label.textContent = textarea.value
//  });


  // Exercise 3:
  // Enhance your solution by creating a reset button that will erase everything from the label
  //  so the user can start over.
  //create div to hold button
  let buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('id', 'button-div');
  //add div to html
  document.body.append(buttonDiv);
  //create button and add to div
  let resetButton = document.createElement('input');
  buttonDiv.append(resetButton);
  //set reset button's type=,name,id attributes
  resetButton.setAttribute('type', 'reset');
  resetButton.setAttribute('name', 'reset');
  resetButton.setAttribute('id', 'reset-button');
  //add event listener to reset button
  //when reset button is clicked, set textarea's text content to nothing
  //set label's text content to string i had previously
  resetButton.addEventListener('click', ()=>{
    textarea.textContent = '';
    label.textContent = 'Write in the text area!';
  })



  // Exercise 4: Repeating timer
  // Create a button with the text Start Countdown!.
  let countdownDiv = document.createElement('div');
  document.body.append(countdownDiv);
  let printCountdownHere = document.createElement('div');
  countdownDiv.append(printCountdownHere);
  let countdownButton = document.createElement('button');
  countdownButton.textContent = 'Start Countdown!';
  countdownDiv.append(countdownButton);
  //  When the User clicks the button, display a countdown sequence in the browser 
  //  as an <h2> from 10 to LIFTOFF!!.
  let countdownH2 = document.createElement('h2');
  printCountdownHere.append(countdownH2);
  //initialize a counter, we wanna start at 10 then count down, counter -= 1
  let counter = 10; 
  //cr
  let countDownSequence = ()=>{
    if(counter <= 0){
      //clearInterval stops whatever setInterval we create
      //i could create a function to do this then call it when i want, but since i'm setting this if else statement, i'll just put it in the code to run if the counter = 0
      clearInterval(countDownSequence);
      countdownH2.textContent = 'LIFTOFF!!';
    }else{
      //set the text content of whatever the counter is, we'll decrement at the end of the function
      countdownH2.textContent = `${counter} seconds to LIFTOFF!!`;
    }
    //decreases the counter by one after if and else statements are checked
    counter -= 1;
  }
  let displayCountdownSequence = ()=>{
    //sets the timing of the function to 1 second, so basically, function runs every second until the clearInterval is called
    setInterval(countDownSequence, 1000);
  }
  countdownButton.addEventListener('click', ()=>{
    //im pretty sure there's a js method than tracks time...
    //there's the setTimeout and setInterval that i was playing with during the stretch goal of last lab
    //stop execution with clearTimeout
    countDownSequence();
    displayCountdownSequence();
  })
  //  Display each number during the countdown each second (1000 ms),
  //   leading up to the word LIFTOFF!!!. Be sure to stop the timer once liftoff achieved.


  //   Challenge 1
  // Create additional strings and load them in an array
  let vForVendetta = 'Voila! In view humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of fate. This visage, no mere veneer of vanity, is a vestige of the “vox populi” now vacant, vanished. However, this valorous visitation of a bygone vexation stands vivified, and has vowed to vanquish these venal and virulent vermin, van guarding vice and vouchsafing the violently vicious and voracious violation of volition. The only verdict is vengeance; a vendetta, held as a votive not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily this vichyssoise of verbiage veers most verbose, so let me simply add that it’s my very good honour to meet you and you may call me V.';

  let vForVendettaArray = vForVendetta.split('');

  let iagoOthello = 'How am I then a villain To counsel Cassio to this parallel course, Directly to his good? Divinity of hell! When devils will the blackest sins put on, They do suggest at first with heavenly shows, As I do now: for whiles this honest fool Plies Desdemona to repair his fortunes And she for him pleads strongly to the Moor, I’ll pour this pestilence into his ear, That she repeals him for her body’s lust;And by how much she strives to do him good, She shall undo her credit with the Moor.So will I turn her virtue into pitch, And out of her own goodness make the net That shall enmesh them all.';

  let iagoOthelloArray = iagoOthello.split('');

  // then randomly select one of the three each time the page is reloaded.
  //i need to create an array, push each of the 3 arrays into it, then create a randomizer variable with math.random to pick a random index value 0-2 as the array to use for the browsing session
  //this will return random index between 0 and 2
  let randomIndex = Math.floor(Math.random() * 3);

  //array holding 3 arrays to choose from
  let trioArray = [];
  trioArray.push(codeCrewStringArray, vForVendettaArray, iagoOthelloArray);

  //array we're gonna push each character into
  let randomizedArray = trioArray[randomIndex];
  let newEmptyArray = [];
  textarea.addEventListener('keydown', (e) => {
    e.preventDefault();
    //push all shifted array items to newArr
    newEmptyArray.push(randomizedArray.shift());
    //.join method to join each newArr character together
    newEmptyArray.join(' ');
    //set the textarea's text content to newArr so whenever the user presses the key, a new character from newArr is put in the textarea, gives illusion of ghost typing
    textarea.textContent = newEmptyArray;
    //set the label's textcontent to whatever value is in the textarea
    label.textContent = textarea.value
  });


};

main();
