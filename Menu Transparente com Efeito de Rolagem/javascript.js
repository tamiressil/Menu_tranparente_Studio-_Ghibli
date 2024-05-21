window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#cabeca')
    cabeca.classList.toggle('rolagem',window.scrollY > 0)
})