function relogio() {

    var relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer; 

    function criaSegundos(segundos) {
        var data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC' 
        });
    };

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++
            relogio.innerHTML = criaSegundos(segundos)
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('iniciar')) {
            clearInterval(timer)
            iniciaRelogio();
            relogio.classList.remove('pausado')

            let inicia = document.querySelector('.iniciar')
            inicia.innerHTML = 'Iniciar'
        }
        if(el.classList.contains('pausar')) {
            clearInterval(timer);   
            relogio.classList.add('pausado')
            
            let inicia = document.querySelector('.iniciar')
            inicia.innerHTML = 'Continuar'
        }
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado')
            relogio.innerHTML = '00:00:00'
            segundos = 0;

            let inicia = document.querySelector('.iniciar')
            inicia.innerHTML = 'Iniciar'
        }
    });
};
relogio();





