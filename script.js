function validateSyntax() {
    let input =/* "xrdtfcvubhknj645o';"*/document.getElementById('petInput').value;
    // Validation logic goes here
    let Code = "pet_"
    let isCode = input.slice(0,4)  
    let result =  // Placeholder for validation result
    booli =false
    let isYear = input.slice(5,8)
    let isName = input.slice(9,100)


    //these are for determining if last bit is text
    function alphabetTester(){
        let regex = /^[a-zA-Z]+$/;
        return regex.test(isName)  
        }


    function isNumber(isYear) {
        return !isNaN(parseInt(isYear)) && isFinite(isYear);                
        }


    if(Code===isCode && isNumber(isYear)===true && alphabetTester()===true)
    {booli = true}
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if(booli===true)
        {result= "Valid Index" }
        else if (input==="")
        { result=""}
        else {result="Invalid Index 🛑"}
           document.getElementById('result').innerText = result;
           document.getElementById('petInput').innerText = ""
           return result
}


console.log(validateSyntax())