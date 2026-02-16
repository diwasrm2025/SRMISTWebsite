const new_activities = document.getElementById('new_activities');

for(let i=1;i<=36;i++){
    new_activities.innerHTML+=
    `<div class="collab-card">
        <div class="img">
            <img src="./assets/images/collaboration/${i}.png" alt="">
        </div>
    </div>`
}
    
