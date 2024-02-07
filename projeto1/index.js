var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida){    // uma função para cada elemento q tem o .duvida//
    duvida.addEventListener('click', function()                  //adicionar um evento de clck//
    {duvida.classList.toggle("ativa")})                  
})