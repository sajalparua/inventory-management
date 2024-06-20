
var isCheckboxChecked = false;
var a;

function op() {
  
  
  isCheckboxChecked = !isCheckboxChecked; //!isCheckboxChecked;

  if (isCheckboxChecked == true) {
    store.style.opacity = "1";
    
    a=b;
    
  } else {
    store.style.opacity = "0";
    
  }
  
}





// function signin() {
//   Document.getElementById("oname") = x;
//   alert(x);

// }

// var x = document.getElementById("nam").element;
// function myFunction() {

//   alert(x);
//   document.write(x);
// }
/*validation of input feilds*/
function submitRegistrationForm() {
  
  fname = document.getElementById("fname").value;

  if (fname) {
    
  } else {
    alert("Please enter first name");
  }

  lname = document.getElementById("lname").value;
  if (lname){

  }
  else{
    alert("please enter last name");
  }
  mail = document.getElementById("mail").value;

  if (mail){

  }
  else{
    alert("please enter your Email Id");
  }
  pass = document.getElementById("pass").value;
  if (pass){

  }
  else{
    alert("please enter password");
  }
  confpass = document.getElementById("confpass").value;
  if (confpass){

  }
  else{
    alert("please enter  confirm password");
  }

  if (isCheckboxChecked == true){
  b = document.getElementById("storname").value;
  
  if (b){
  console.log(a);
  
  }
  else{
    alert("please enter  store name");
  }
  }
  
  console.log(fname,lname,mail,pass,confpass,storname);

  // document.write(fname,lname,mail,pass,confpass,storname);
  // alert(fname,lname,mail,pass,confpass,storname);

}