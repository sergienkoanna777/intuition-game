const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress",function(e){
    if(e.keyCode===13)
    play()
})
button.addEventListener("click",play);


function play(){
    const userNumber = document.querySelector("#guess").value;
    if(userNumber <1 || userNumber>20){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must enter a number from 1 to 20...',
            
        })
    }
    else if(isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must enter a number',
            
        })
    }
    else{
        if(userNumber<answer){
            Swal.fire('Please enter a higher number')
        }
        else if(userNumber>answer){
            Swal.fire('Please enter a lower number');
        }
        else{
            Swal.fire({
                title: 'Victory!!!',
                imageUrl: 'https://images.pexels.com/photos/6658693/pexels-photo-6658693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                imageWidth: 500,
                imageHeight: 700,
                imageAlt: 'Victory!',
              })
        }
    }

}
