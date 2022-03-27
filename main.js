document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

    // 360 viewer
    var PSV = new PhotoSphereViewer({
      panorama: "https://thumbs.dreamstime.com/z/fotos-esf%C3%A9ricas-equirectangulares-flamingo-park-miami-beach-foto-equirectangular-esf%C3%A9rica-estados-unidos-166112464.jpg",
      container: 'photosphere',
      mousewheel: false,
      size: {
        height: 1200
      }
    });