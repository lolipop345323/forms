let button = burger,
    form = fixedform,
    close = cross
button.onclick = formToggle
close.onclick = formToggle
function formToggle () {
    form.classList.toggle("active")
}