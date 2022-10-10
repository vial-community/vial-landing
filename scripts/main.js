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
        "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj0ztqV5r_6AhXSXvEDHa_GC0kQFnoECA4QAQ&url=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Finstagram%2Fid389801252&usg=AOvVaw2-hB8WmiL6qNksivdTGruH";
      break;
    case "iOS":
      appDownloadLink =
        "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj0ztqV5r_6AhXSXvEDHa_GC0kQFnoECAwQAQ&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26hl%3Den%26gl%3DUS&usg=AOvVaw2EI4stwXyzT-WkJHN9sOSe";
    default:
      appDownloadLink = "https://www.instagram.com/";
      break;
  }

  return appDownloadLink;
}
