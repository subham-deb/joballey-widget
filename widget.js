// widget.js
function myFunction(content) {
  const clickedAl = alert("Redirecting to application page!"+ content);
//   if (clickedAl) {
    window.location.href = `http://app.joballey.com:3000/jobs/${content}/details`;
//   }
}
function updateWidgetContent(content) {
  console.log("widget!");

  document.getElementById("widget-container").innerHTML =
    content +
    "<br>" +
    `<div class="parent-class"><button class="button-style" onclick="myFunction('${content}')"> Apply Now</button></div>`;
}
