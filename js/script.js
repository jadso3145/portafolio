const spans = document.querySelector("h1 span")

spans.forEach(span => {
    span.addEventListener('mouseover', e => {
        span.classList.add('animated', 'rubberBand')
    })
});

spans.forEach(span => {
    span.addEventListener('mouseout', e => {
        span.classList.remove('animated', 'rubberBand')
    })
});


const htmlBar = document.querySelector('.bar-html')
const reactBar = document.querySelector('.bar-react')
const javaBar = document.querySelector('.bar-javascript')
const cssBar = document.querySelector('.bar-css')

let t1 = new TimeLineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    fromTo(javaBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})


const controller = new ScrollMagic.controller()

const scene = new ScrollMagic.Scene({
    triggerElemet: '.skills',
    // triggerHook = 0
}) 

.setTween(t1)
.addTo(controller)
