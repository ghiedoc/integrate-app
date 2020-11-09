/**
 * Paano yung mga subcontent(description) parang katulad din
 * ba nung nasa baba keme
 */

if (sessionStorage.getItem("ID") === "1") {
  var titles = ["Main Body Parts", "Sense Organs"];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "2") {
  var titles = ["Living Things", "Non-living Things"];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "3") {
  var titles = ["Parts of the Plants"];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "4") {
  var titles = [
    "Tame and Wild Animals",
    "Animals and their Foods",
    "Habitat",
    "Mother and Baby Animals",
  ];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "5") {
  var titles = ["Transportation", "Weather", "Land Forms", "Water Forms"];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1]);
  }
}

function Populate(temp, Head_title) {
  //lesson content
  let container = document.createElement("div");
  container.className = "container-sci";
  container.setAttribute("onclick", "showIDLesson(" + temp + ")");

  //div > row
  let container_row = document.createElement("div");
  container_row.className = "row";

  //div > column_img
  let container_column_img = document.createElement("div");
  container_column_img.className = "column-img";

  //content of column_img
  let imgsrc = document.createElement("img");
  imgsrc.className = "image";
  imgsrc.setAttribute("src", "");
  container_column_img.appendChild(imgsrc);

  //div  > column_desc
  let container_column_desc = document.createElement("div");
  container_column_desc.className = "column-desc";

  //content of column_desc
  let title = document.createElement("h1");
  var titletext = document.createTextNode(Head_title);
  title.appendChild(titletext);

  let hrline = document.createElement("hr");

  let textcontent = document.createElement("h3");
  var content = document.createTextNode("Subcontent");
  textcontent.appendChild(content);
  //

  //appendingChild to container_column_desc
  container_column_desc.appendChild(title);
  container_column_desc.appendChild(hrline);
  container_column_desc.appendChild(textcontent);

  //appendingChild to container and container_row
  container.appendChild(container_row);
  container_row.appendChild(container_column_img);
  container_row.appendChild(container_column_desc);
  document.body.appendChild(container);
}

function showIDLesson(id) {
  // alert(id);
  sessionStorage.setItem("lessonID", id);
  window.location.href = "/Science Page/vid-sci.html";
}
