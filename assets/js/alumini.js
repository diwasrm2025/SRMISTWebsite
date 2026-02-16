 const websiteData = {
           
            testimonials: {
                items: [
                    {
                        id: 1,
                        name: "Kushagra Singh",
                        degree: "B. Tech - CSE",
                        company: "Senior consultant in Microsoft Analyst in Infilure",
                        text: "SRM has helped me in amplify my skills in various directions. The ambient culture of SRM helped me become well of various student learns and startups which eventually helped me to become a good team player."
                    },
                    {
                        id: 2,
                        name: "Priya Sharma",
                        degree: "B. Tech - ECE",
                        company: "Software Engineer at Google",
                        text: "The placement cell at SRM provided excellent training and preparation for interviews. The faculty's constant support and industry exposure through workshops helped me secure my dream job."
                    },
                    {
                        id: 3,
                        name: "Rahul Verma",
                        degree: "MBA",
                        company: "Business Analyst at Deloitte",
                        text: "SRM Institute has been instrumental in shaping my career. The comprehensive curriculum, combined with practical exposure through internships and live projects, prepared me well for the corporate world."
                    },
                    {
                        id: 4,
                        name: "Anjali Reddy",
                        degree: "B. Tech - IT",
                        company: "Data Scientist at Amazon",
                        text: "The technical skills and soft skills training I received at SRM were exceptional. The placement team worked tirelessly to bring top companies to campus."
                    },
                    {
                        id: 5,
                        name: "Vikram Patel",
                        degree: "B. Tech - Mechanical",
                        company: "Design Engineer at Tata Motors",
                        text: "SRM's focus on practical learning and industry collaboration gave me a competitive edge. The state-of-the-art laboratories and experienced faculty helped me develop both theoretical knowledge and practical skills."
                    }
                ]
            }
        };

      
        // Build Testimonials
        function buildTestimonials(data) {
            const wrapper = document.getElementById('testimonialsWrapper');
            let html = '';

            data.items.forEach(testimonial => {
                html += `
                    <div class="swiper-slide">
                        <div class="testimonial-card" style='background:#ececec'>
                            <p class="testimonial-text"><i class="fas fa-quote-left"></i> ${testimonial.text} <i class="fas fa-quote-right"></i></p>
                            <br>
                            <div style='text-align:right;'>
                                <h3>-${testimonial.name}, ${testimonial.degree}</h3>
                                <p class="testimonial-company">${testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            wrapper.innerHTML = html;
            initializeTestimonialSwiper();
        }

        
        

      

        function initializeTestimonialSwiper() {
            new Swiper('.testimonial-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                speed: 800
            });
        }

        

     
        // ============================================
        // MAIN INITIALIZATION
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            

            // Build all sections
            buildTestimonials(websiteData.testimonials);

            // Initialize features
            initializeAdditionalFeatures();

            console.log('SRM Career Centre - Website loaded successfully!');
        });