var count = 0;
var counter = document.getElementById("myh1");
counterinnerHTML = count;


function myIncrease() {
    count = count + 1;
    counter.innerHTML = count;
}

function myReset() {
    count = 0;
    counter.innerHTML = count;

}

function myDecrease() {
    if(count > 0) {
        count = count - 1;
        counter.innerHTML = count;
    }
    
}