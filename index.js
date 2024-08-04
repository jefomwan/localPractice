 document.getElementById('restart').onclick = function(){
        location.reload();
     }



     let message = document.getElementById('message');

     const easy = document.getElementById('easy')
     const medium = document.getElementById('medium')
     const hard = document.getElementById('hard')

     let guesses = 0;

    let answer;




document.getElementById('select').onclick = function(){

    if(easy.checked){
        answer = Math.floor(Math.random() * 26 + 1);
        message.innerHTML = 'Enter a number from 1 - 25';
    }
    else if(medium.checked){
        answer = Math.floor(Math.random() * 50 + 1);
        message.innerHTML = 'Enter a number from 1 - 50';
        
    }
    else if(hard.checked){
        answer = Math.floor(Math.random() * 101 + 1);
        message.innerHTML = 'Enter a number from 1 - 100';
    }
    else{
        message.innerHTML = 'pick a difficulty'
    }
}






document.getElementById('submit').onclick = function(){
    
    let guess = document.getElementById('guess').value;
    guesses += 1;

    if((!(answer == undefined)) && (!(guess == '')) ){

          if(guess < answer){
                alert('Too small, Try again')
                document.getElementById('guesses').innerHTML = `Number of guesses = ${guesses}`
        
            }
            else if(guess > answer){
                alert('Too big, Try again')
                document.getElementById('guesses').innerHTML = `Number of guesses = ${guesses}`
        
            }
        
            else if(guess == answer){
                alert(`Correct!, it took you ${guesses} guesses`)
                document.getElementById('guesses').innerHTML = `Number of guesses = ${guesses}`
            }
        
            else {
                alert('Enter a number')

            }




        }
        else if((answer == undefined)){
            alert('select a difficulty');
            guesses = 0;
        }
        else{
        alert('Enter a number');
        guesses = 0;

    }

    
}




function handleKeyPress(event) {
    // Check if the Enter key is pressed (key code 13)
    if (event.key === 'Enter') {
        // Programmatically click the button
        document.getElementById('submit').click();
    }
}




document.addEventListener('keypress', handleKeyPress);
