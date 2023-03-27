let tablinks = document.querySelectorAll(".spheres-page-nav__link");
let tabcontent = document.querySelectorAll(".shperes-content");

document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {

 for (let i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
 }

 for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace("active", "");
 }


 document.getElementById(tabName).style.display = "block";
 evt.currentTarget.className += " active";
}