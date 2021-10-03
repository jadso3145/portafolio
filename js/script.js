const open1 = document.querySelector('.open1');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const probar = document.querySelectorAll('#probar')
import {idioma} from './idioma.js'









document.addEventListener("click", e => {
    if (e.target.matches(".open1")) {
        modal_container.classList.add('show');
        const titulo = document.getElementById("titulo").textContent = "DETS"
        // const videoO = document.querySelector("video").src = "../video/simplescreenrecorder-2021-10-01_16.24.54.mp4"
        e.preventDefault()
    }
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});