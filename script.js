//Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// 
// var str= "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,,s,t,u,v,w,x,y,z,A,B,A,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9,!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>, ?,@,[,\,],^,_,`,{,|,},~";

// LETS THINK OF ALL OF THESE VARIABLES ARE OUR AVAILABLE DATASETS
// -->   ll[1]
// --> Zero Indexed ll[0] = "a"
var ll = "abcdefghijklmnopqrstuvwxyz";
var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var char ="!#$%&'()*+-./:;<=>?@[\]^_`{|}~";
var possiblepassword = "";
var passlength;  // --> "undefined"

//var obj = [{ key: "value" },  ] // --> obj.key = "value"
 // Write password to the #password input

function writePassword() {
    var yesprompts = getinfo(); 
   // getinfo(); needed a true statement
    if (yesprompts){
    var newpassword = generatePassword();
    var passwordText = document.querySelector("#password");
        console.log("elemnt: ", passwordText);
   // passwordText.value = newpassword;
    passwordText.value = newpassword;
} 
}
function generatePassword() {
    var password = "";
    for(var i = 0; i<passlength; i++) {
        var randomindex = Math.floor( Math.random() * possiblepassword.length);  // --> 0 - 1 | 0.9873462387634 * 26 = 
        password= password + possiblepassword[randomindex]
    }
    return password;
}
// writePassword(pass,str);  --> we want to wait for th USER to CLICK the BUTTON
// use a new function for prompts (to store data)
function getinfo() {
    possiblepassword= "";
    passlength = parseInt(prompt("How long would you like your password? (8-128 characters"));
    // parseInt turns the string to an integer
    console.log("Length: ", passlength);
    console.log("Type: ", typeof passlength);
    // isNan for characters (false)
    if(isNaN(passlength)|| passlength < 8 || passlength >128){
        alert("character length needs to be 8 - 128");
        return false;
    }
    if (confirm("Would you like lowerrcase letters in your password?")){
        possiblepassword = possiblepassword.concat(ll);
    }    
    if (confirm("Would you like uppercase letters in your password?")){
        possiblepassword = possiblepassword.concat(uc);
    }
    if (confirm("Would you like numbers in your password?")){
        possiblepassword = possiblepassword.concat(num);
    }
    if (confirm("Would you like special characrters in your password?")){
        possiblepassword = possiblepassword.concat(char);
    }
    return true;
}
// concat adds the value of the variable together
// need a true statement to run the function write password 

// function generatePassword() 
    
   
    // very often when we get data from the USER/browser we want to VALIDATE that data
   

    
    
                
        
        
     // trying to validate my random lowercase code and store it 
    
   
   

    
    // based on the RESULT WE DO some action (--> if yes we add ths dataset to our Possible/Available Password  
    
        
   
    

    
        
    
    
    
        
    
    
    // console.log("answer",password);
    
    
        
    
      
    
    
    


    
    
 
    

    // return password;


//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);