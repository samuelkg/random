let but_ok = document.querySelector ('#but-ok');
let resultado = document.querySelector ('#result');
let val_1 = document.querySelector ('#val1');

but_ok.addEventListener('click', () => {
    
    let dado = val_1.value.split("-")
    
    if(dado) {
        resultado.innerHTML = getRandom(dado[0], dado[1]);
    } else {
        window.alert('favor ínsira um número');
    }

});
    
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
