


gsap.registerPlugin(ScrollTrigger);



const timeline = gsap.timeline({duration: 1})


gsap.to('.middle', {
    duration: 5,
    opacity: 0,
    ease: 'power4.out'
})

timeline.to('.l-box', {
    duration: 1.5,
    y: '-100%',
    stagger: .5,
    ease: 'power4.out'
})
timeline.to('.loader,.l-box-c', {
    duration: .2,
    zIndex: "-1"
})
timeline.from('.nav', {
        duration: 1, 
        y: '-100%',
        ease: 'bounce'
    })

timeline.from('li, a', {
        duration: 1,
        y: '100%',
        opacity: 0,
        // delay: 1
    })

timeline.from('.hero-f-txt', {
    duration: 1,
    y: '-100%',
    opacity: 0,
    ease: 'bounce',
    // delay: 2
})

timeline.from('.arrow-down', {
    duration: 1,
    y: '-100%',
    opacity: 0,
    ease: 'bounce',
    // delay: 3
})

gsap.from('.about', {
    opacity: 0,
    y: '100%',
    duration: 1,
    scrollTrigger: '.about',
    ease: 'power2.Out'
})

gsap.from('.work-header', {
    opacity: 0,
    x: '-100%',
    duration: 1,
    scrollTrigger: '.work-header'
})