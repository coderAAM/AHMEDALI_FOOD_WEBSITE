let slides = document.querySelectorAll(".slide");
let count = 0;

// Initial positioning of slides
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

// Function to slide the images
function slideImages() {
    slides.forEach(function (currentSlide) {
        currentSlide.style.transform = `translateX(-${count * 100}%)`;
        console.log(currentSlide);
    });
}

// Set interval to move slides every 2 seconds
setInterval(function () {
    count++;
    if (count === slides.length) {
        count = 0;
    }
    slideImages();
}, 2000);



document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const icons = ['fa-home', 'fa-info-circle', 'fa-concierge-bell', 'fa-blog']; // Adjust based on the number of links and desired icons

    function convertLinksToIcons() {
        navLinks.forEach((link, index) => {
            if (icons[index]) {
                const iconElement = document.createElement('i');
                iconElement.classList.add('fas', icons[index]);
                link.innerHTML = ''; // Clear the text inside the link
                link.appendChild(iconElement); // Append the icon to the link
            }
        });
    }

    // Add click event listener to the bars icon
    document.getElementById('bars').addEventListener('click', convertLinksToIcons);
});



