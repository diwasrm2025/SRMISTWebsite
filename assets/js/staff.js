let team_members=document.getElementById("team_members");

let staff_profile=[
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        block_name:"Block",
        warden_name:"Name",
        mobile:"9876543210",
        email:"name@gmail.com"
    }
]


staff_profile.map((data,index)=>{
    team_members.innerHTML+=`<div class="placement-card1">
                    <h2>Name of the ${data.block_name}</h2>
                    <h3>Warden ${data.warden_name}</h3>
                    <div class="contact-icons1">
                        <a href="mailto:"><i class="fas fa-envelope"></i>${data.email}</a>
                    </div>    
                    <div class="contact-icons1">
                        <a href="tel:${data.mobile}"><i class="fas fa-phone"></i>${data.mobile}</a>
                    </div>
                </div>`
})