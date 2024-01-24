$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows: false,
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#Telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    });
    
    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            cpf: {
                required:true
            },
            Telefone: {
                required:true
            },
            email: {
                required:true
            },
            cep: {
                required:true
            },
            endereco: {
                required:true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log(form);
            alert('Formulário enviado com sucesso!');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.lista-roupas button').click(function() {
        const destino = $('#contato');

        $('html, body').animate({
            scrollTop:destino.offset().top
        }, 1000);
    })
})