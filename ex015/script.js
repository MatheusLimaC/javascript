function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'baby man.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'young man.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adult man.png')
            } else {
                //Idoso
                img.setAttribute('src', 'old man.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'baby woman.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'young woman.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adult woman.png')
            } else {
                //Idoso
                img.setAttribute('src', 'old woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}