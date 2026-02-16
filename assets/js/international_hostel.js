const welcome_section=document.getElementById("welcome_section");

let staff_profile=[
    {
        hostel_name:"S Block – Phase 2",
        img:"3.JPG",
        content:"S Block Phase 2 is dedicated to international students and offers well-planned accommodation with attached bathroom facilities. The hostel provides two-sharing and four-sharing rooms in both air-conditioned and non-air-conditioned options, ensuring a comfortable stay for international residents.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },{
        hostel_name:"G Block – Phase 2",
        img:"3.JPG",
        content:"G Block Phase 2 is designated for international students and offers two-sharing and four-sharing rooms in AC and Non-AC configurations. All rooms include attached bathroom facilities, providing a comfortable and secure stay.",
        mobile:"9876543210",
        email:"name@gmail.com"
    }
]

staff_profile.map((data,index)=>{
         welcome_section.innerHTML+=`<div class="welcome-content">
                <div class="welcome-image">
                    <img src="assets/images/hostel/girls/${data.img}" alt="Dr. P. Madhusoodhanan">
                </div>
                <div class="welcome-text">
                    <h2>${data.hostel_name}</h2>
                    <p>${data.content}</p>
                    
                    <p><b>Email: </b> ${data.email}</p>
                    <p><b>Phone: </b> ${data.mobile}</p>
                </div>
            </div>`
   
})