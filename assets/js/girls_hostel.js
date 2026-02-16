const welcome_section=document.getElementById("welcome_section");

let staff_profile=[
    {
        hostel_name:"Tower A – Ganga",
        img:"1.JPG",
        content:"Tower A Ganga is an eight-floor girls’ hostel offering one-sharing and two-sharing rooms in both AC and Non-AC categories. All rooms come with attached bathrooms, providing a secure and comfortable living space for female students.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Tower B – Kavery",
        img:"2.JPG",
        content:"Tower B Kavery is an eight-floor girls’ hostel that provides two-sharing rooms in air-conditioned and non-air-conditioned formats. The hostel features attached bathroom facilities and offers a well-maintained residential environment.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Tower C – Narmada",
        img:"3.JPG",
        content:"Tower C Narmada is an eight-floor hostel offering dormitory-style accommodation. The hostel is equipped with common bathroom facilities and is designed to accommodate students in a shared living arrangement.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Tower D – Yamuna",
        img:"3.JPG",
        content:"Tower D Yamuna is an eight-floor hostel that provides dormitory accommodation with common bathroom facilities. It is suitable for students seeking shared housing with essential amenities.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"G Block – Phase 1",
        img:"3.JPG",
        content:"G Block Phase 1 is an eight-floor hostel offering three-sharing and six-sharing rooms in both AC and Non-AC categories. All rooms are equipped with attached bathrooms, ensuring comfort and privacy for residents.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"G Block – Phase 2",
        img:"3.JPG",
        content:"G Block Phase 2 is designated for international students and offers two-sharing and four-sharing rooms in AC and Non-AC configurations. All rooms include attached bathroom facilities, providing a comfortable and secure stay.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Thirumalai Hostel",
        img:"3.JPG",
        content:"Thirumalai Hostel is an eight-floor facility that offers six-sharing non-air-conditioned rooms. The hostel features common bathroom facilities and provides a simple and functional residential option for students.",
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