gsap.registerPlugin(ScrollTrigger);

gsap.from(".nav-bar", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "bounce"
});

gsap.from(".nav", {
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.2,
});
const logo=document.querySelectorAll("#logo path");
for(let i=0; i<logo.length;i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
function showSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display='none'
}
gsap.to(".planet-container", {
    rotationY: 360,
    rotationX:360,
    duration: 8,
    repeat: -1,
    ease: "linear"
});


gsap.from(".card", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});


gsap.from("footer", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power1.out"
});

gsap.utils.toArray(".section1").forEach((section, i) => {
    const colors = ["#1a1a2e", "#16213e", "#0f3460", "#53354a"];
    gsap.to(section, {
        backgroundColor: colors[i % colors.length],
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
});

gsap.utils.toArray(".section2").forEach((section, i) => {
    const colors = ["#1a1a2e", "#16213e", "#0f3460", "#53354a"];
    gsap.to(section, {
        backgroundColor: colors[i % colors.length],
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
});
gsap.utils.toArray(".section3").forEach((section, i) => {
    const colors = ["#1a1a2e", "#16213e", "#0f3460", "#53354a"];
    gsap.to(section, {
        backgroundColor: colors[i % colors.length],
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
});
gsap.utils.toArray(".contact").forEach((section, i) => {
    const colors = ["#1a1a2e", "#16213e", "#0f3460", "#53354a"];
    gsap.to(section, {
        backgroundColor: colors[i % colors.length],
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
});
