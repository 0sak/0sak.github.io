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