function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  return "unknown";
}

function appDownloadLinkGenerator() {
  let systemCheck = getMobileOperatingSystem();
  let appDownloadLink = "";

  switch (systemCheck) {
    case "Android":
      appDownloadLink =
        "https://play.google.com/store/apps/details?id=com.vial.mobile";
      break;
    case "iOS":
      appDownloadLink =
        "https://apps.apple.com/al/app/vial-move-towards-web3/id6444441586";
    default:
      appDownloadLink = "https://play.google.com/store/apps/details?id=com.vial.mobile";
      break;
  }

  document.getElementById('header-link').href = appDownloadLink;

  return appDownloadLink;
}

getMobileOperatingSystem();
appDownloadLinkGenerator();

function yesnoCheck(that) {

  const conditionalDiv = document.getElementById('ifYes');

  console.log(that.value);
  if (that && that.value == "other") {
      conditionalDiv.style.display = "block";
  } else {
      conditionalDiv.style.display = "none";
  }
}