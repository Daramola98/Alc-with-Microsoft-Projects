let leonardo = document.querySelector("#leonardo");

leonardo.addEventListener('click', function(){
    let span = document.querySelector('#result');
    span.style.color = 'green';
    span.innerHTML=" THIS ANSWER IS CORRECT MOVE ON TO THE NEXT QUESTION";
    document.getElementById("No2").style.display = "block";
} );

let bale = document.querySelector("#bale");
bale.addEventListener('click', function(evt){
    let span = document.querySelector('#result');
    console.log(evt.type);
    document.getElementById('result').style.color = 'red';
    span.innerHTML=" THIS ANSWER IS WRONG TRY AGAIN PLS";
} );

let cage = document.querySelector("#cage");
cage.addEventListener('click', function(){
    let span = document.querySelector('#result'); 
    document.getElementById('result').style.color = 'red';
    span.innerHTML=" THIS ANSWER IS WRONG TRY AGAIN PLS";
} );