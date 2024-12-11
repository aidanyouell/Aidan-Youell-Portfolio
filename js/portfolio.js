let proj;
fetch('/js/projects.json')
.then(response => {
    return response.json();
}).then(projects => {
    console.log(projects);
    proj = projects;
    parseData(projects);
}).catch(err => {
    console.log(`error ${err}`);
})

function parseData(data){
    for(i = 0; i < data.projects.length; i++)
    {
        document.getElementById("projects").innerHTML += `<a href="/html/${data.projects[i].subdomain}.html"><div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="/images/${data.projects[i].mainimg}"></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
        <p class="abstract">${data.projects[i].abstract}</p></div></div></a>`
    }
}

for(button of document.querySelectorAll("#buttons button")){
    button.addEventListener("click", e =>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "clear")
    {
        for(i = 0; i < proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined)
    {
        for(i = 0; i < proj.projects.length; i++)
        {
            if(proj.projects[i].category.includes(button) == true)
            {
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }
            else
            {
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }
    else
    {
        console.log("error, button is undefined");
    }
}