// let's scale the images when scrolling.
scroller.on('scroll', (obj) => {
    for (const key of Object.keys(obj.currentElements)) {
        if (obj.currentElements[key].el.classList.contains('gallery__item-imginner')) {
            let progress = obj.currentElements[key].progress;
            const scaleVal = progress < 0.5 ? clamp(map(progress, 0, 0.5, 0.2, 1), 0.2, 1) : clamp(map(progress, 0.5, 1, 1, 0.2), 0.2, 1);
            obj.currentElements[key].el.parentNode.style.transform = `scale(${scaleVal})`
        }
    }
});
lscroll.update();