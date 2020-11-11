let url = "";

// UNIT 1": HUMAN BODY PARTS
if (
  sessionStorage.getItem("ID") == 1 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url =
    "https://drive.google.com/file/d/1d9wEDarBtZuxfX3AcyLwe1sy9qK7rYAu/preview";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 1 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url =
    "https://drive.google.com/file/d/1cqB0GglQDarDbBNN90vZMw7hb8E-WPvF/preview";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 2: LIVING THINGS
else if (
  sessionStorage.getItem("ID") == 2 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url =
    "https://drive.google.com/file/d/1buo19-TU73lbg_3IBr7HsZ_AaDeh_wH0/preview";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 2 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url =
    "https://drive.google.com/file/d/1F2wTxBsohWEbUeGEX8F3Gv5AkWHX21jx/preview";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 3: PLANTS
else if (
  sessionStorage.getItem("ID") == 3 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url =
    "https://drive.google.com/file/d/1Rde9tKGZ1vesg-2zKmigBzarEUb3So9B/preview";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 4: ANIMALS
else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url =
    "https://drive.google.com/file/d/1ym6jsqXgMBBySB9r_c-mDiM5tIp0SlKq/preview";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 2
) {
  url =
    "https://drive.google.com/file/d/1Q1cx4_IFQcqfOe5R1UBEy25eiVjUl1TX/preview";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 3
) {
  url =
    "https://drive.google.com/file/d/1GZSh6yOGri2bPJK4uFSF9AwVi7Nsd5Zn/preview";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 4 &&
  sessionStorage.getItem("lessonID") == 4
) {
  url =
    "https://drive.google.com/file/d/1TQjcM1ajxCdm1jXoUEJkYHKMbKhu7Kzx/preview";
  youtubeVid(url);
  createAssessmentBtn();
}

// UNIT 5: NON-LIVING THINGS
else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 1
) {
  url =
    "https://drive.google.com/file/d/1trZmr9BN0P3yv7emI29bNmYjyIqSrG95/preview";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 2
) {
  // weather
  url = "";
  powerpoint(url);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 3
) {
  url =
    "https://drive.google.com/file/d/1nJNgt4wCWKCrusZDWn7ZOsa8oXmzpTlN/preview";
  youtubeVid(url);
} else if (
  sessionStorage.getItem("ID") == 5 &&
  sessionStorage.getItem("lessonID") == 4
) {
  url =
    "https://drive.google.com/file/d/1RVNM59Ua_LcFfgPMdELL2Xnndv-jYhax/preview";
  youtubeVid(url);
  createAssessmentBtn();
}

//6
else if (
  sessionStorage.getItem("ID") == 6 &&
  sessionStorage.getItem("lessonID") == 1
) {
} else if (
  sessionStorage.getItem("ID") == 6 &&
  sessionStorage.getItem("lessonID") == 2
) {
}

//7
else if (
  sessionStorage.getItem("ID") == 7 &&
  sessionStorage.getItem("lessonID") == 1
) {
} else if (
  sessionStorage.getItem("ID") == 7 &&
  sessionStorage.getItem("lessonID") == 2
) {
}

//8
else if (
  sessionStorage.getItem("ID") == 8 &&
  sessionStorage.getItem("lessonID") == 1
) {
} else if (
  sessionStorage.getItem("ID") == 8 &&
  sessionStorage.getItem("lessonID") == 2
) {
}

//9
else if (
  sessionStorage.getItem("ID") == 9 &&
  sessionStorage.getItem("lessonID") == 1
) {
} else if (
  sessionStorage.getItem("ID") == 9 &&
  sessionStorage.getItem("lessonID") == 2
) {
} else {
}

function youtubeVid(url) {
  let container = document.createElement("div");
  container.className = "container";
  container.setAttribute("style", "width:100%;height:80%");

  let framePane = document.createElement("iframe");
  framePane.setAttribute("style", "width:100%;height:80%");
  framePane.setAttribute("src", url);
  // framePane.setAttribute("frameborder","0");
  // framePane.setAttribute("allow","accelerometer");
  // framePane.setAttribute("allow","autoplay");
  // framePane.setAttribute("allow","clipboard-write");
  // framePane.setAttribute("allow","encrypted-media");
  // framePane.setAttribute("allow","gyroscope");
  // framePane.setAttribute("allow","picture-in-picture");
  // framePane.setAttribute("allowfullscreen");

  //video frame edit here
  var el = document.getElementById("marker");
  el.setAttribute("style", "width:60%;height:100%;margin:auto;");
  container.appendChild(framePane);

  el.appendChild(container);
}

function powerpoint(url) {
  var el = document.getElementById("container");
  el.setAttribute("style", "width:100%;height:100%");
  el.innerHTML =
    '<iframe src="' +
    url +
    '/_layouts/15/Doc.aspx?sourcedoc={25063ca0-8135-448e-9bef-64f0ef613e66}&amp;action=embedview&amp;wdAr=1.4148802017654476" width="1089px" height="793px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';
}

function hi() {
  window.location.href = "../Science Page/assessment_sci.html";
}

function createAssessmentBtn() {
  var myDiv = document.getElementById("marker");
  // creating button element
  var button = document.createElement("BUTTON");
  // creating text to be
  //displayed on button
  var text = document.createTextNode("Assessment");
  // appending text to button
  button.appendChild(text);
  button.onclick = hi;
  // appending button to div
  myDiv.appendChild(button);
}
