// Variables for Lottery Numbers, Powerball, Random Stuff
var ticketType = "";
var lotteryNumberPicks = 0;
var powerBallPick = 0;

// Variables for the UI Elements (radio buttons, textboxes)
var inputNum = document.getElementById('inputNum');
var basicTicketRadioButton = document.getElementById('');
var megaTicketRadioButton = document.getElementById('');

document.getElementById('btnA').addEventListener('click', () => {
    //alert('I got clicked!');
    inputNum.style.backgroundColor = 'green';
    alert('You picked ' + inputNum.value);
    console.log('This goes to web developer tools!');
})