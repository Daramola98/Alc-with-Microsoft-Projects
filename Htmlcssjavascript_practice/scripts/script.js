function saveToCookie(key, value, onCompletion){
    var cookieValue = key + ':' + value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}

function saveTextValue(){
    var textValue = document.getElementsByName('position')[0].value;
    saveToCookie('Position', textValue, showTextSuccess );
}

function showTextSuccess(result){
    window.alert('You successfully saved [' + result + '] from  the text input to your cookie.');
}

function saveRadioValue(){
    var radioValue;
    var radioOptions = document.getElementsByName('department');
    for (var i = 0; i < radioOptions.length; i++){
        if(radioOptions[i].checked){
            radioValue = radioOptions[i].value;
            break;
        }
    }
    saveToCookie('Department', radioValue, function(result){
        window.alert('You did it! you saved [' + result + ']');
    }); 
}

function handleClick(callback){
    alert('This button has been clicked');
    if(callback){
        callback();
    }
}

function doMore(){
    alert('i could process more logic');
}

function doSomethingElse(){
    document.writeln('Test Message');
}

var section = document.getElementsByTagName('section');
var button = section[section.length-1];
button.onclick = sectionClicked;

function sectionClicked(event){
    current = this;
    origin = event.target;
    alert('Section has been clicked');
    if(origin.className = "firstPara"){
        event.stopPropagation();
    }
    
}

var canvas = document.getElementById('demoCanvas');
var context = canvas.getContext('2d');

context.fillStyle = "#A9B0B3";
context.strokeStyle = "#746C73";
context.lineWidth = 5;

context.moveTo(0,0);
context.lineTo(700,350);
context.stroke();

context.beginPath();
context.arc(160, 160, 100, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.moveTo(0,100);
context.lineTo(500,50);
context.stroke();

context.beginPath();
context.moveTo(650, 345)
context.lineTo(700, 350);
context.lineTo(665, 315)
context.stroke();

context.fillStyle = "#20293F";
context.strokeStyle = "#20293F";

context.font = "78px Segoe UI";
context.fillText("Andela",190,230);
context.strokeText("#ThisIsAndela",190,310);

var worker;

function startWorker(){
    worker = new Worker("scripts/worker.js");
    worker.onmessage = function(event){
        document.getElementById('output').innerHTML+='<li>'+ event.data + '</li>';
    }
}

function stopWorker(){
    worker.terminate();
}