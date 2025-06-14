function scrollLeft() {
        const gallery = document.getElementById("gallery");
        gallery.scrollBy({
            top: 0,
            left: -300,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        const gallery = document.getElementById("gallery");
        gallery.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth'
        });
    }