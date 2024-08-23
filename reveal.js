function toggle_visibility(cl){
    var els = document.getElementsByClassName(cl);
    for (var i = 0; i < els.length; i++){
       var s = els[i].style;
       s.visibility = "visible";
    }
 }

setTimeout(function() {
    toggle_visibility('showMe');
}, 5000);

setTimeout(function() {
  toggle_visibility('showMore');
}, 8000);

fetch("code_resources/reveal.txt")
.then((res) => res.text())
.then((text) => {
  console.log(text);
  document.getElementById("thisProject").innerHTML=text;
  })
.catch((e) => console.error(e));

fetch("code_resources/Driver.txt")
.then((res) => res.text())
.then((text) => {
  console.log(text);
  document.getElementById("windowsDriver").innerHTML=text;
  })
.catch((e) => console.error(e));

fetch("code_resources/TestReference.txt")
.then((res) => res.text())
.then((text) => {
  console.log(text);
  document.getElementById("testingLanguage").innerHTML=text;
})
.catch((e) => console.error(e));

fetch("code_resources/FlaskBackend.txt")
.then((res) => res.text())
.then((text) => {
  console.log(text);
  document.getElementById("flaskBackend").innerHTML=text;
})
.catch((e) => console.error(e));

window.onscroll = function () {
  document.getElementById("scrollDown").style.display = "block";
  document.getElementById("scrollDown").style.visibility = "hidden";
};