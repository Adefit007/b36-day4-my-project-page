let projects = [];

function addProjects() {
  let title = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("upload-image").files[0];

  console.log(title);
  console.log(startDate);
  console.log(endDate);
  console.log(description);
  console.log(image);

  let logoTechlist = [];
  // Check if checkbox technology is checked, then add to array list
  if (document.getElementById("node-js").checked) {
    logoTechlist.push("node-js");
  }
  if (document.getElementById("react-js").checked) {
    logoTechlist.push("react-js");
  }
  if (document.getElementById("next-js").checked) {
    logoTechlist.push("next-js");
  }
  if (document.getElementById("typeScript-js").checked) {
    logoTechlist.push("typeScript-js");
  }

  console.log(logoTechlist);

  image = URL.createObjectURL(image);

  let project = {
    title: title,
    description: description,
    logoTechlist: logoTechlist,
    image: image,
  };

  projects.push(project);

  renderProjects();
}

function checkTechLogoifExists(list) {
  let logoTech = "";

  // Check if checkbox technology is checked, then return their logo
  if (list.includes("node-js")) {
    logoTech += '<img src="assets/nodejs-icon.svg" alt="">';
  }
  if (list.includes("react-js")) {
    logoTech += '<img src="assets/react.svg" alt="">';
  }
  if (list.includes("next-js")) {
    logoTech += '<img src="assets/nextjs.svg" alt="">';
  }
  if (list.includes("typeScript-js")) {
    logoTech += '<img src="assets/typescript.svg" alt="">';
  }
  return logoTech;
}

function renderProjects() {
  let projectsContainer = document.getElementById("contents-projects");

  projectsContainer.innerHTML = "";

  projects.forEach((data) => {
    projectsContainer.innerHTML += `<div class="grid-item" >
                <img src="${data.image}" alt="">
                <div class="title">
                    <h2><a href="project-detail.html"target="_blank" style="text-decoration: none; color: black">${
                      data.title
                    }</a></h2>
                    <p>durasi : 1 bulan</p>
                </div>
                <div class="title2">
                <p> ${data.description} </p>
                </div>
                <div class="tech-icon">
                    ${checkTechLogoifExists(data.logoTechlist)}
                </div>
                <div class="button">
                    <button type="button" onclick="">edit</button>
                    <button type="button" onclick="">delete</button>
                </div>
            </div>`;
  });
}
