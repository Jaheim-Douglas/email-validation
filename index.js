function validate(){
    let mail = document.getElementById("text").value;

    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(regx.test(mail)){
        alert("You have provided a valid Email ID")
        return true;
    }
    else{
        alert("Sorry incorrect email ID")
        return false;
    }
}