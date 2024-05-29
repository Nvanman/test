document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.banner img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add('active');
    }

    // Tự động chuyển cảnh sau mỗi 5 giây
    setInterval(showNextImage, 2000 );
});
