function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#foto img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src='manha.png'
        document.body.style.background = "#FFC857"
    } else if (hora >= 12 && hora < 19) {
        img.src='tarde.png' 
        document.body.style.background = "#E57C04"
    } else {
        img.src='noite.png'
        document.body.style.background = "#60656F"
    }   
}