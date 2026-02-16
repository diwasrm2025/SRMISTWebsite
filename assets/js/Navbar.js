    let myData =document.getElementById("myData");
    let myTopbar=document.getElementById("topBanner");
    
    myData.innerHTML=`<!-- Navbar -->
                    <nav class="navbar">
                        <div class="nav-container">
                            <div class="nav-brand">
                                <img id="siteLogo" class="logo" src="" alt="SRM Logo">
                            </div>
                            <div class="nav-menu" id="navMenu"></div>
                            <div class="nav-buttons" id="navButtons"></div>
                            <div class="mobile-menu-toggle" id="mobileMenuToggle">
                                <i class="fas fa-bars"></i>
                            </div>
                        </div>
                    </nav>

                    <!-- Mobile Menu -->
                    <div class="mobile-menu" id="mobileMenu">
                        <div class="mobile-menu-header">
                            <div class="nav-brand" style="margin: 10px;">
                                <img  class="logo" src="./assets/images/srm-1920w.webp" alt="SRM Logo">
                            </div>
                            <div class="mobile-menu-close" id="mobileMenuClose">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="mobile-menu-content" id="mobileMenuContent"></div>
                    </div>

                    <!-- Mobile Menu -->
                    <div class="mobile-menu" id="mobileMenu">
                        <div class="mobile-menu-header">
                            <h3>Menu</h3>
                            <div class="mobile-menu-close" id="mobileMenuClose">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="mobile-menu-content" id="mobileMenuContent"></div>
                    </div>`;
    const websiteNavData = {
            siteConfig: {
                description: "SRM Institute of Science and Technology Career Centre",
                logo: "./assets/images/srm-1920w.webp",
                contactEmail: "placementsrmtrchy@srmist.edu.in",
                contactPhone: "1800 202 4565",
                helpdeskEmail: "helpdesk@ist.srmtrichy.edu.in"
            },

            topBanner: {
                message: "Admissions open for 2026",
                applyLink: "#",
                secondaryNav: [
                    { label: "Students", url: "#" },
                    { label: "Faculty & Staff", url: "#" },
                    { label: "Examinations", url: "#" },
                    { label: "Parents", url: "#" },
                    { label: "Alumni", url: "#" },
                    { label: "News letter", url: "#" }
                ]
            },

            navigation: {
                mainNav: [
                    { label: "About us", url: "#", hasDropdown: false },
                    { label: "Academics", url: "#", hasDropdown: true,
                         dropdown: [
                             { label: "Academic Calendar", url: "#" },

                            // Engineering & Core Streams
                            { label: "Engineering & Technology", url: "#" },
                            { label: "Science & Humanities", url: "sciene_humanities.html" },
                            { label: "College of Management", url: "#" },
                            { label: "Institute of Hotel Management", url: "#" },

                            // Medical & Health Sciences (Section)
                            { label: "Medical and Health Sciences", url: "#" },
                            { label: "College of Physiotherapy", url: "#" },
                            { label: "College of Occupational Therapy", url: "#" },
                            { label: "College of Allied Health Sciences", url: "#" },
                            { label: "<img src='./assets/images/gallery/2.JPG'>", url: "#" },
                            { label: "<img src='./assets/images/gallery/7.JPG'>", url: "#" }
                        ]
                     },
                    { label: "Research", url: "#", hasDropdown: false },
                    {
                        label: "Campus Life",
                        hasDropdown: true,
                        dropdown: [
                            { label: "Accommodation", url: "index.html" },  
                            { label: "Girls Hostel", url: "girls_hostel.html" },
                            { label: "Boys Hostel", url: "boys_hostel.html" },
                            { label: "International Hostel", url: "international_hostel.html" },
                            { label: "How to Apply", url: "#" },
                            { label: "Dining & Eateries", url: "#" },
                            { label: "Safety & Security", url: "#" },
                            { label: "Contact us", url: "#" }
                        ]
                    },
                    { label: "News & Events", url: "#", hasDropdown: false },
                    { label: "Placement", url: "./placement.html", hasDropdown: false },
                    { label: "Apply Now", url: "#", hasDropdown: false }
                ],
                rightButtons: [
                    { label: "Fee Payment", url: "#" },
                    { label: "Campus Life", url: "#" }
                ],
                siteConfig: {
                    description: "SRM Institute of Science and Technology Career Centre",
                    logo: "./assets/images/srm-1920w.webp",
                    contactEmail: "placementsrmtrchy@srmist.edu.in",
                    contactPhone: "1800 202 4565",
                    helpdeskEmail: "helpdesk@ist.srmtrichy.edu.in"
                },
            }
        };
        // Build Top Banner
        function buildTopBanner(data) {
            const banner = document.getElementById('topBanner');
            const { message, applyLink, secondaryNav } = data;

            let html = `
                <center class="top-bar">
                    <span>${message} <a href="${applyLink}" class="apply-link">Apply Now</a></span>
                    <div class="secondary-nav-container">
            `;

            secondaryNav.forEach(item => {
                html += `<a href="${item.url}">${item.label}</a>`;
            });

            html += `</div></center>`;
            banner.innerHTML = html;
        }

        // Build Navigation
        function buildNavigation(data) {

            const navMenu = document.getElementById('navMenu');
            const navButtons = document.getElementById('navButtons');
            const mobileMenuContent = document.getElementById('mobileMenuContent');

            // =========================
            // Desktop Navigation
            // =========================
            let navHtml = '';

            data.mainNav.forEach(item => {

                if (item.hasDropdown && item.dropdown) {

                    const isAcademics = item.label.toLowerCase() === "academics";
                    const isCampusLife = item.label.toLowerCase() === "campus life";

                    navHtml += `
                        <div class="nav-dropdown">
                            <a href="${item.url || '#'}" class="nav-link">
                                ${item.label} <i class="fas fa-chevron-down"></i>
                            </a>

                            <div class="dropdown-menu
                                ${isAcademics ? 'dropdown-academics' : ''}
                                ${isCampusLife ? 'dropdown-campus' : ''}">
                    `;

                    // =========================
                    // 🎓 Academics Layout
                    // =========================
                    if (isAcademics) {

                        const textItems = item.dropdown.filter(d => !d.label.includes("<img"));
                        const imageItems = item.dropdown.filter(d => d.label.includes("<img"));

                        // Column split
                        const col1 = textItems.slice(0, 5);
                        const col2Title = textItems[5];
                        const col2Links = textItems.slice(6);

                        navHtml += `<div class="dropdown-academics-layout">`;

                        // ===== TEXT ROW =====
                        navHtml += `<div class="academics-text-row">`;

                        // Column 1
                        navHtml += `<div class="academics-col">`;
                        col1.forEach(sub => {
                            navHtml += `
                                <a href="${sub.url}" class="dropdown-link">
                                    ${sub.label}
                                </a>
                            `;
                        });
                        navHtml += `</div>`;

                        // Column 2
                        navHtml += `<div class="academics-col">`;

                        // Title
                        if (col2Title) {
                            navHtml += `
                                <div class="dropdown-title">
                                    ${col2Title.label}
                                </div>
                            `;
                        }

                        // Links
                        col2Links.forEach(sub => {
                            navHtml += `
                                <a href="${sub.url}" class="dropdown-link">
                                    ${sub.label}
                                </a>
                            `;
                        });

                        navHtml += `</div>`; // End Col2
                        navHtml += `</div>`; // End Text Row


                        // ===== IMAGE ROW =====
                        if (imageItems.length) {

                            navHtml += `<div class="academics-image-row">`;

                            imageItems.forEach(img => {
                                navHtml += `
                                    <div class="academics-image-col">
                                        <a href="${img.url}">
                                            ${img.label}
                                        </a>
                                    </div>
                                `;
                            });

                            navHtml += `</div>`;
                        }

                        navHtml += `</div>`; // End Academics Layout
                    }

                    // =========================
                    // 🏫 Other Dropdowns
                    // =========================
                    else {

                        navHtml += `<div class="dropdown-single">`;

                        item.dropdown.forEach(sub => {
                            navHtml += `
                                <a href="${sub.url}" class="dropdown-link">
                                    ${sub.label}
                                </a>
                            `;
                        });

                        navHtml += `</div>`;
                    }

                    // ===== CLOSE DROPDOWN =====
                    navHtml += `
                            </div>
                        </div>
                    `;
                }

                // =========================
                // No Dropdown Link
                // =========================
                else {
                    navHtml += `
                        <a href="${item.url}" class="nav-link">
                            ${item.label}
                        </a>
                    `;
                }
            });

            navMenu.innerHTML = navHtml;


            // =========================
            // Right Buttons
            // =========================
            let buttonsHtml = '';

            data.rightButtons.forEach(btn => {
                buttonsHtml += `
                    <button class="nav-btn">
                        ${btn.label}
                    </button>
                `;
            });

            navButtons.innerHTML = buttonsHtml;


            // =========================
            // Mobile Menu
            // =========================
            let mobileHtml = '';

            data.mainNav.forEach(item => {
                mobileHtml += `
                    <a href="${item.url}" class="mobile-nav-link">
                        ${item.label}
                    </a>
                `;
            });

            
            console.log(data);
            
            mobileHtml += `
                <div class="mobile-contact">
                    <h3>Get in touch</h3>

                    <a href="tel:${data.siteConfig.contactPhone}" class="contact-link">
                        ${data.siteConfig.contactPhone}
                    </a>

                    <a href="mailto:${data.siteConfig.helpdeskEmail}" class="contact-link">
                        ${data.siteConfig.helpdeskEmail}
                    </a>
                </div>
            `;

            mobileMenuContent.innerHTML = mobileHtml;
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

        // Initialize Additional Features
        function initializeAdditionalFeatures() {
            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                } else {
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Set site configuration
            document.getElementById('siteLogo').src = websiteNavData.siteConfig.logo;

            // Build all sections
            buildTopBanner(websiteNavData.topBanner);
            buildNavigation(websiteNavData.navigation);
            initializeMobileMenu()

            console.log('SRM Career Centre - Website loaded successfully!');
        });