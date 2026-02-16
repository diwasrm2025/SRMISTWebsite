const welcome_section=document.getElementById("welcome_section");

let staff_profile=[
    {
        hostel_name:"Imayam Hostel",
        img:"1.JPG",
        content:"Imayam Hostel is an eight-floor boys’ hostel offering a variety of room-sharing options to suit different preferences. The hostel provides one-sharing and two-sharing rooms in both air-conditioned and non-air-conditioned categories. All rooms are equipped with attached bathrooms, ensuring privacy and convenience for residents.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Nilgiris Hostel",
        img:"2.JPG",
        content:"Nilgiris Hostel is an eight-floor facility designed for comfortable student living. It offers two-sharing rooms in both AC and Non-AC configurations. All rooms come with attached bathrooms, providing a convenient and hygienic residential environment.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Elagiri Hostel",
        img:"3.JPG",
        content:"Elagiri Hostel is a four-floor building that offers five-sharing non-air-conditioned rooms. The hostel features common bathroom facilities and is suitable for students looking for economical accommodation with essential amenities.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Javadhu Hostel",
        img:"4.JPG",
        content:"Javadhu Hostel is a three-floor hostel that provides five-sharing non-AC rooms. Common bathroom facilities are available for residents, making it a practical option for students seeking shared accommodation.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"S Block – Phase 1",
        img:"5.JPG",
        content:"S Block Phase 1 is an eight-floor hostel offering multiple room-sharing options, including three-sharing and six-sharing rooms in both AC and Non-AC categories. All rooms are provided with attached bathrooms, ensuring comfort and convenience for students.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"S Block – Phase 2",
        img:"6.JPG",
        content:"S Block Phase 2 is dedicated to international students and offers well-planned accommodation with attached bathroom facilities. The hostel provides two-sharing and four-sharing rooms in both air-conditioned and non-air-conditioned options, ensuring a comfortable stay for international residents.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"East Campus A",
        img:"7.JPG",
        content:"East Campus A offers dormitory-style accommodation for students. The hostel is equipped with common bathroom facilities and is suitable for students who prefer shared living spaces in a structured residential environment.",
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