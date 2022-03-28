(function() {

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgentData);

  if (isSafari) {
    document.getElementById("days").style.display="none";
    document.getElementById("hours").style.display="none";
    document.getElementById("minutes").style.display="none";
    document.getElementById("seconds").style.display="none";
    document.getElementById("headline").style.display="none";
    document.getElementById("countdown").style.display="none";
    document.getElementById("content").style.display="none";
  }
}
)
