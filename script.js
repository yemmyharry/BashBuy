let myindex=0;
let x;

function stuff(){
    let i;
    x = document.getElementsByClassName("sliding");

    for(i=0;i < x.length; i++){
        x[i].style.display = "none";
    }

    myindex++;
    if (myindex > x.length) {myindex = 1};
    x[myindex-1].style.cssText = "display:block;opacity:0.7"
    setTimeout(stuff,2000);

}


document.addEventListener("DOMContentLoaded", stuff)