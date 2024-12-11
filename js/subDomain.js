let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('/js/projects.json')
.then(response => {
    return response.json();
}).then(projects => {
    proj = projects;
    findProject(projects);
    //parseData(projects);
}).catch(err => {
    console.log(`error ${err}`);
})

function findProject(projects){
    for(i = 0; i < projects.projects.length; i++)
    {
        if(projects.projects[i].subdomain == subdomain)
        {
            buildPage(projects.projects[i]);
            break;
        }
        else
        {
            continue;
        }
    }
}

function buildPage(project)
{
    console.log(project);
    document.getElementById("project").innerHTML += 
    `<div class="content">
        <div class="name">
            <h1>${project.name}</h1>
        </div>
        <div class="subtitle">
            <h3>${project.subtitle}</h3>
        </div>
        <div class="abstract">
            <p>${project.abstract}</p>
        </div>
        <div class="description">
            <p>${project.description}</p>
        </div>
    </div>
    <div class="img">
        <img src="/images/${project.mainimg}">
    </div>`
}