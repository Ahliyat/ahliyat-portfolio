let projectDetail = document.getElementById("project");
const data = [
  {
    id: 1,
    img: "./assets/images/DMS-picture.PNG",
    title: "Delivery Management Service",
    description:
      " DMS helps you to manage your rides and deliveries effectively whether as a logistics company or as a regular local business that needs a reliable delivery system ",
  },
  {
    id: 2,
    img: "./assets/images/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
  {
    id: 3,
    img: "./assets/images/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
  {
    id: 4,
    img: "./assets/images/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
  {
    id: 5,
    img: "./assets/images/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
];
console.log(data);
const fetchProjects = () => {
  let projects = "";
  data.map((project) => {
    projects += `
      
          <section class="project-content">
            <img src="${project.img}" alt="" />
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">
            ${project.description} 
            </p>
            <button type="button" class="project-btn">View Project</button>
          </section>
     `;
  });

  projectDetail.innerHTML = projects;
};
// projectDetail.style.display = "flex"

//   projectDetail.style.gap = "2rem"
//   projectDetail.style.flexWrap = "wrap"
//   projectDetail.style.justifyContent = "center"
//   projectDetail.style.alignItems = "center"
//   projectDetail.style.marginTop = "2rem"
//   projectDetail.style.marginBottom = "5rem"

fetchProjects();

