 const textSpans = document.querySelectorAll("#centered-text span");

gsap.from(textSpans, {
    duration: 1,
    opacity: 0,
    x: -50,
    stagger: 0.1,
});
