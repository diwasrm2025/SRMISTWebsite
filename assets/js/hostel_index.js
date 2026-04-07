 const websiteData = {
            siteConfig: {
                description: "SRM Institute of Science and Technology Career Centre",
                logo: "./assets/images/srm-1920w.webp",
                contactEmail: "madhavat1@srmist.edu.in",
                contactPhone: "1800 202 4565",
                helpdeskEmail: "helpdesk@ist.srmtrichy.edu.in"
            },


            gateway: {
                title: "All about Student accommodation & facilities",
                description: [
                    "We, at SRM Institute of Science and Technology (formerly known as SRM University), provide a wide choice in selecting the type or rooms in a hostel to suit every budget, with an aim of providing a decent stay and the best possible learning environment.<br>The quality of life is one of the most important factors considered by the students deciding to stay in the College/University hostels. By quality, it is not just the rooms but also the overall environment of the University campus. Ours is one of the greenest Campuses’ in the country with all the facilities that are expected from global Universities. The stay at our campus provides a wealth of experience by developing qualities such as camaraderie and social responsibility. Our students comprise a cosmopolitan mix from all parts of India as well as many countries across the globe. <br>The students staying at SRM hostels are provided with healthy and sumptuous food options at highly subsidized rates. They can choose to have North Indian or South Indian menu in the dining halls that are co-located. For the benefit of our international students, the hostels also offer a multi-cuisine dining facility providing Thai, Chinese and continental food.<br>Life on campus helps the students not only to study but also to socialize with the peers. Friendships formed on the campus last a lifetime. SRM provides a comfortable and safe housing to all its students. The students housed in the campus are encouraged to use the gymnasium, playground, and all indoor gaming facilities."
                ],
                
            },

            directorMessage: {
                title: "Director's Message",
                director: {
                    name: "Name",
                    position: "Designation",
                    image: "./assets/images/leaders/director_hostel.JPG",
                    phone: "9876543210"
                },
                message: [
                    "As per our Founder Chancellor’s wish, the mission of our directorate  is to provide a safe, supportive, and comfortable living environment that fosters academic success and personal growth of every SRMISTian.<br>We encourage you to take care of the hostel facilities and report any concerns or needs for improvements.  Should you have any personal, academic, or social concerns, our hostel staff, including Wardens and support personnel, are always available to assist.<br>We also encourage students to participate in the various cultural, recreational, and educational activities hosted by the Directorate throughout the year.<br>“A hostel is not a place: It is a state of mind- open, adventurous and full of possibilities”"
                ],
                quickLinks: [
                        { label: "Meet Our Staff", url: "./hostel_staff.html", newTab:false},
                        { label: "Hostel Rules", url: "./assets/pdf/rules.pdf",newTab:true},
                ]
            },
           

            reachUs: {
                title: "Reach Us",
                address: {
                    line1: "SRM Institute of Science and Technology",
                    line2:"SRM Nagar,   " ,
                    line3: "Chennai - Trichy Hwy,Dist,",
                    line4: "Irungalur, Tamil Nadu 621105",
                    email: "madhavat1@srmist.edu.in"
                },
                image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400"
            },

            journey: {
                title: "Where Could Your Journey At University Take You?",
                buttons: [
                    { icon: "fa-graduation-cap", label: "Academics", url: "#" },
                    { icon: "fa-flask", label: "Research", url: "#" },
                    { icon: "fa-briefcase", label: "Placements", url: "#" }
                ]
            }
        };

      

        // Build Gateway Section
        function buildGateway(data) {
            const section = document.getElementById('gatewaySection');
            let html = `<h2 class="section-title">${data.title}</h2>`;
            html += `<div class="gateway-content">`;

            data.description.forEach(para => {
                html += `<p>${para}</p>`;
            });
            html +="</div>"
            section.innerHTML = html;
        }

        // Build Director's Message
        function buildDirectorMessage(data) {
            const section = document.getElementById('directorSection');
            const { title, director, message, quickLinks } = data;

            let html = `<div class="director-content">`;
            html += `
                <div class="director-image">
                    <img src="${director.image}" alt="${director.name}">
                    <h3>${director.name}</h3>
                    <p>${director.position}</p>
                    <p>Phone: ${director.phone}</p>
                </div>
                <div>
                <h2 class="director-title">${title}</h2>
                <div class="director-text">
            `;

            message.forEach(para => {
                html += `<p>${para}</p>`;
            });
            html += `</div></div>`;
            html += `<div class="director-links">`;
            quickLinks.forEach(link => {
                if(link.newTab){
                    html += `<a href="${link.url}" target='_blank'><i class="fas fa-arrow-right"></i> ${link.label}</a>`;
                }
                else{
                    html += `<a href="${link.url}"><i class="fas fa-arrow-right"></i> ${link.label}</a>`;
                }
            });

            html += `</div></div>`;
            section.innerHTML = html;
        }

    
       

        // Initialize Mobile Menu
        function initializeMobileMenu() {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuClose = document.getElementById('mobileMenuClose');

            if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
                mobileMenuToggle.addEventListener('click', () => {
                    mobileMenu.classList.add('active');
                });

                mobileMenuClose.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });

                document.addEventListener('click', (e) => {
                    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                        mobileMenu.classList.remove('active');
                    }
                });
            }
        }

       

        // ============================================
        // MAIN INITIALIZATION
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            // Set site configuration
            document.getElementById('siteLogo').src = websiteData.siteConfig.logo;

            buildGateway(websiteData.gateway);
            buildDirectorMessage(websiteData.directorMessage);
            console.log('SRM Unniversity Tiruchirapalli - Website loaded successfully!');
        });