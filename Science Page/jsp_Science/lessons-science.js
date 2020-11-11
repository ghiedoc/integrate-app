/**
 * Paano yung mga subcontent(description) parang katulad din
 * ba nung nasa baba keme
 */

if (sessionStorage.getItem("ID") === "1") {
  var titles = ["Main Body Parts", "Sense Organs"];
  var imageLoc = [
    "../Science Page/img/parts.png",
    "../Science Page/img/sense-organs.png",
  ];
  var subcontent = [
    "The human body is everything that makes up, well, you. The basic parts of the human body are the head, neck, torso, arms and legs.",
    "There are five sense organs in your body. Each of these organs performs something amazing for your body. The sense organs are your eyes, ears, nose, tongue, and skin.",
  ];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "2") {
  var titles = ["Living Things", "Non-living Things"];
  var imageLoc = [
    "../Science Page/img/livingt.png",
    "../Science Page/img/non-living.png",
  ];
  var subcontent = [
    "A living thing has life. Human beings, animals, and plants are living things too. Each has characteristics that set it aprt from others.",
    "Non-living things include things that do not need food, eat, reproduce, or breathe. A car does not eat or grow. It does not move unless a person is driving it.",
  ];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "3") {
  var titles = ["Parts of the Plants"];
  var imageLoc = ["../Science Page/img/plants.png"];
  var subcontent = [
    "They can be found in different places. They have characteristics that are similar to those of humans and animals.",
  ];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "4") {
  var titles = [
    "Tame and Wild Animals",
    "Animals and their Foods",
    "Habitat",
    "Mother and Baby Animals",
  ];
  var imageLoc = [
    "../Science Page/img/animals.png",
    "../Science Page/img/animals-food.png",
    "../Science Page/img/animals-habitat.png",
    "../Science Page/img/mother-baby.png",
  ];
  var subcontent = [
    "Students can explore different kind of animals such as Tame and Wild one's.",
    "There are a lot of variety of animals in which they also eat different foods.",
    "A habitat is a place that an animal lives. It provides the animal with food, water and shelter. There are many different sorts of habitats around the world.",
    "Let's learn about different kind of animals and the name of its babies.",
  ];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
  }
} else if (sessionStorage.getItem("ID") === "5") {
  var titles = ["Transportation", "Land Forms", "Water Forms"];
  var imageLoc = [
    "../Science Page/img/transportation.png",
    "../Science Page/img/land-forms.png",
    "../Science Page/img/water-forms.png",
  ];
  var subcontent = [
    "a vehicle that you can travel or carry goods.",
    "Landforms are features on the Earth's surface that is part of the terrain.",
    "Waterforms are natural stream of running water that flows into a larger body of water.",
  ];
  for (var temp = 1; temp <= titles.length; temp++) {
    Populate(temp, titles[temp - 1], imageLoc[temp - 1], subcontent[temp - 1]);
  }
}

function Populate(temp, Head_title, image_location, subcontent_text) {
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
  imgsrc.setAttribute("src", image_location);
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
  var content = document.createTextNode(subcontent_text);
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
  window.location.href = "../Science Page/vid-sci.html";
}
