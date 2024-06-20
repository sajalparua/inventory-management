var x = false;
var y = false;
var z = false;
function seenhide1() {
  y = false;
  z = false;
  // dropmenu2.style.display = "none";
  // dropmenu3.style.display = "none";
  hideDoc([dropmenu2, dropmenu3]);
  x = !x
  changeStyle(x,dropmenu1)
  /*if (x == true) {

    dropmenu1.style.display = "block";
  }
  else {

    dropmenu1.style.display = "none";
  }*/
}
function seenhide2() {
  x = false;
  z = false;
  // dropmenu1.style.display = "none";
  // dropmenu3.style.display = "none";
  hideDoc([dropmenu1, dropmenu3]);
  y = !y
  changeStyle(y, dropmenu2);
//   if (y == true) {

//     dropmenu2.style.display = "block";
//   }
//   else {

//     dropmenu2.style.display = "none";
//   }
 }
function seenhide3() {
  x = false;
  y = false;
  hideDoc([dropmenu1, dropmenu2]);
  /*dropmenu1.style.display = "none";
  dropmenu2.style.display = "none";*/
  z = !z
  changeStyle(z, dropmenu3);
 /* if (z == true) {

    dropmenu3.style.display = "block";
  }
  else {

    dropmenu3.style.display = "none";
  }*/
}

function changeStyle(isOpen, dropMenu) {
  if (isOpen == true) {
    dropMenu.style.display = "block";
  }
  else {
    dropMenu.style.display = "none";
  }
}

function hideDoc(docs) {
  docs.forEach(element => {
    element.style.display = "none";
  });
}