/*validação na busca com JS*/
document.querySelector('#form-busca').onsubmit = function(){
    if (document.querySelector('#q').value == '') {
        alert ('O campo de busca está em branco!')
        return false; 
    }
}