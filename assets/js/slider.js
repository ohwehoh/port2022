timer = null;
let sliderInner = null;
let slider = null;
let sliderCount = null;
let sliderClone = null;
let currentIndex = 0;

function varInit(overV, slider__inner){
    sliderInner = slider__inner;
    slider = sliderInner.querySelectorAll(".slider");
    sliderCount = slider.length;
    sliderClone = sliderInner.firstElementChild.cloneNode(true);
    if(!overV){
        sliderInner.appendChild(sliderClone);
        overV = true;
    }
    return overV;
}

function sliderEffectInit() {
    // clearInterval(timer);
    const sliderWindow = document.querySelector(".showBox");

    let sliderWidth = sliderWindow.offsetWidth;

    const info = {
        // sliderCount: sliderCount,
        sliderWidth: sliderWidth,
        sliderInner: sliderInner,
    }

    timer = setInterval(() => {
        sliderEffectMove(info)
    }, 2000);

    return sliderClone;
}

function sliderEffectMove(info) {
    currentIndex++;
    info.sliderInner.style.transition = "all 0.3s";
    info.sliderInner.style.transform = `translateX(-${info.sliderWidth*currentIndex}px)`;

    //마지막 사진에 갔을때
    if (currentIndex == 7) {
        setTimeout(() => {
            info.sliderInner.style.transition = "0s";
            info.sliderInner.style.transform = 'translateX(0)';
        }, 300);
        currentIndex = 0;
    }
}

window.addEventListener("resize", () => {
    console.log("resize");
    currentIndex = -1;
    sliderEffectInit();
});