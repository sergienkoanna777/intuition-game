let text="Do you want to test your intuition?";
let i=0;
let speed=150;

function type(){
    if(i<text.length){
        document.querySelector("#question").textContent += text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}
type();