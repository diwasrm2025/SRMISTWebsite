const new_activities = document.getElementById('new_activities');
const activity_content=[
    {
        title:"CDC Training",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur at minima sed quidem corporis."
    },
    {
        title:"CCC Training",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur at minima sed quidem corporis."
    },
    {
        title:"Face Prep",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur at minima sed quidem corporis."
    },
    {
        title:"CCC Training",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur at minima sed quidem corporis."
    },
    {
        title:"CCC Training",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur at minima sed quidem corporis."
    },
    {
        title:"CCC Training",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur at minima sed quidem corporis."
    }
]
activity_content.map((e,i)=>{
    new_activities.innerHTML+=
    `<div class="activities-card">
        <div class="img">
            <img src="./assets/images/activities/${i+1}.png" alt="">
        </div>
        <div class="activities-content">
            <h3>${e.title}</h3>
        </div>
    </div>`
})
    
