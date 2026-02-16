 const websiteData = {
            siteConfig: {
                description: "SRM Institute of Science and Technology Career Centre",
                logo: "./assets/images/srm-1920w.webp",
                contactEmail: "placementsrmtrchy@srmist.edu.in",
                contactPhone: "1800 202 4565",
                helpdeskEmail: "helpdesk@ist.srmtrichy.edu.in"
            },

            gateway: {
                title: "Welcome to Our Career & Placement Centre",
                description: [
                    "Your future begins here. Our Placement Cell is dedicated to guiding students from classrooms to careers, connecting talent with opportunities, and shaping leaders for tomorrow. With strong industry partnerships and personalized training, we ensure every student is prepared to step confidently into the professional world."
                ],
                stats: [
                    { icon: "fa-user", count: "892+", label: "Students" ,suffix:""},
                    { icon: "fa-users", count: "35+", label: "Faculty" ,suffix:""},
                    { icon: "fa-award", count: "73+", label: "Events" ,suffix:""},
                    { icon: "fa-book", count: "125+", label: "Publications" ,suffix:""}
                ]
            },
            directorMessage: {
                title: "Director's Message",
                director: {
                    name: "Dr.D.Francis Xavier Christopher",
                    position: "Dean- Faculty of Science and Humanities",
                    image: "./assets/images/leaders/dean_humanity.JPG",
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
           

        };

      

        // Build Director's Message
        function buildDirectorMessage(data) {
            const section = document.getElementById('directorSection');
            const { title, director, message, quickLinks } = data;

            let html = `<div class="director-content">`;
            html += `
                <div class='image_content'>
                    <div class="director-image">
                        <img src="${director.image}" alt="${director.name}">
                    </div>
                    
                    <div class="director-info">
                        <h3>${director.name}</h3>
                        <p>${director.position}</p>
                        <p>Phone: ${director.phone}</p>
                    </div>
                </div>
                <div class="director-text">
                <h2 class="director-title">${title}</h2>
            `;

            message.forEach(para => {
                html += `<p>${para}</p>`;
            });
            html += `</div></div>`;
            html += `<div class="director-links">`;
            html += `</div>`;
            section.innerHTML = html;
        }

    
        function buildGateway(data) {
            const section = document.getElementById('gatewaySection');
            let html = `<div class="counter_section"><div class="stats-grid">`;
            data.stats.forEach(stat => {
                html += `
                    <div class="stats-card">
                        <div class="stats-content">
                            <h1><i class='fa ${stat.icon}'></i></h1>
                            <h3><span class="stats-count" data-target="${stat.count}">${stat.count}</span><span class="lpa">${stat.suffix}</span></h3>
                            <p class="stats-label">${stat.label}</p>    
                        </div>
                    </div>
                `;
            });

            html += `</div></div>`;
            section.innerHTML = html;
        }
        
        function initializeCounterAnimations() {
            function animateCounter(element, target, duration) {
                const start = 0;
                const numericTarget = parseFloat(target.replace('+', ''));
                const hasPlus = target.includes('+');
                const increment = numericTarget / (duration / 16);
                let current = start;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericTarget) {
                        element.textContent = hasPlus ? `${Math.floor(numericTarget)}+` : Math.floor(numericTarget);
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current);
                    }
                }, 16);
            }

            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                        const number = entry.target.querySelector('.stats-count');
                        if (number) {
                            const targetValue = number.getAttribute('data-target');
                            animateCounter(number, targetValue, 2000);
                            entry.target.classList.add('animated');
                        }
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.stats-card').forEach(stat => {
                statsObserver.observe(stat);
            });
        }

       

        // ============================================
        // MAIN INITIALIZATION
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            // Set site configuration
            document.getElementById('siteLogo').src = websiteData.siteConfig.logo;
            buildDirectorMessage(websiteData.directorMessage);
            buildGateway(websiteData.gateway);

            
            
            initializeCounterAnimations();
            console.log('SRM Unniversity Tiruchirapalli - Website loaded successfully!');
        });