function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation 
    let Code = "pet_"
    let isCode = input.slice(0,4)                  //chop the code-word
    let result = ""
    booli =false
    let isYear = input.slice(5,8)              //chop the date section
    let isName = input.slice(9,100)     //chop the name section
                                    


    //these are for determining if last bit is text
    function alphabetTester(){
    let regex = /^[a-zA-Z]+$/;                    // tests string for alphabets, brings true isf alphabets only else false
    return regex.test(isName)  
    }

    //test if index 5-8 are numerical entry
    function isNumber(isYear) {
        return !isNaN(parseInt(isYear)) && isFinite(isYear);           // tests string if it is a numerical value, if parseInt is NaN then is not numerical      
        }
        


    if(Code===isCode  && isNumber(isYear)===true && alphabetTester()===true)     // conditional statements for Ui output
    {booli = true}

    if(booli===true)
    {result= "Valid Index" }
    else if (input==="")
    { result=""}
    else {result="Invalid Index 🛑"}

 
    document.getElementById('result').innerText = result
    document.getElementById('petInput').innerText = ""
}
    

    
 