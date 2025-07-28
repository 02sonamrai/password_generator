let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passbox = document.getElementById('passbox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let gnBtn = document.getElementById('gnBtn');
let copyIcon = document.getElementById('copyIcon');

//showing input slider value.....
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});
gnBtn.addEventListener('click', () => {
    passbox.value = generatePassword();
});
// function to generate password.......
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "@~#$&!&*^";
function generatePassword() {
    let genPassword = "";
    let allchars = "";
    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? allNumbers : "";
    allchars += symbols.checked ? allSymbols : "";

    if (allchars == "" || allchars.length == 0) {
        return genPassword;
    }
    
    for (let i = 1;i <= inputSlider.value; i++) {

        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
       
    }

    return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passbox.value!=""||passbox.value.length>=1){

        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerHTML="check";
        copyIcon.title="password Copied";

        setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";



        },2000)
    }
})
