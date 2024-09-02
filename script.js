document.addEventListener("DOMContentLoaded", function() {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });

    // Function for first page animation
    function firstpageAnim() {
        console.log("Starting firstpageAnim"); // Debugging line

        gsap.timeline()
            .from('#nav', {
                y: '-10px',
                opacity: 0,
                duration: 2,
                ease: 'expo.inOut'
            })
            .to('.boundingelem', {
                y: '0', // Move to its final position
                opacity: 1, // Fade in
                ease: 'expo.inOut',
                duration: 0.5, // Faster duration
                stagger: 0.2 // Faster stagger
            })
            .then(() => {
                console.log("Animation complete"); // Debugging line
            })
            .catch(err => {
                console.error("Animation error:", err); // Debugging line
            });
    }

    // Function to handle mouse follower animation
    function circleMouseFollower() {
        window.addEventListener("mousemove", function(event) {
            const minicircle = document.querySelector('#minicircle');
            minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        });
    }

    // Function to show images and move them with the mouse
    function showImageOnHover() {
        const elems = document.querySelectorAll('.elem');

        elems.forEach(elem => {
            const image = elem.querySelector('img');
            const h1 = elem.querySelector('h1');

            h1.addEventListener('mousemove', (event) => {
                image.style.opacity = 1; // Show the image
                const { left, top } = elem.getBoundingClientRect();
                const offsetX = event.clientX - left;
                const offsetY = event.clientY - top;
                image.style.transform = `translate(${offsetX + 20}px, ${offsetY - image.clientHeight / 2}px)`; // Adjust positioning
            });

            h1.addEventListener('mouseleave', () => {
                image.style.opacity = 0; // Hide the image
            });
        });
    }

    // Initialize animations and other functionalities
    circleMouseFollower();
    firstpageAnim();
    showImageOnHover();
});
