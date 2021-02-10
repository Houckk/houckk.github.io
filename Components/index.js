fetch("./experience.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("experience").innerHTML = data;
  });

fetch("./projects.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("projects").innerHTML = data;
  });
