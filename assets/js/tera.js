$('#contactform').on('submit', function (e) {
    event.preventDefault();

    $("#sendMessage").text("Enviando...");
    $("#sendMessage").attr('disabled', true);

    var nome = $("#name").val();
    var email = $("#email").val();
    var mensagem = $("#message").val();

    if (!nome || !email || !mensagem) return;

    $.ajax({
        url: 'https://us-central1-tera-api-homologation-6f7a3.cloudfunctions.net/sendEmailContactLP',
        method: 'POST',
        dataType: "json",
        data: {
            from: "noreply@terageosolucoes.com.br",
            to: email,
            email: email,
            name: nome,
            message: mensagem
        },
        success: function () {
            console.log('success');
            $("#successText").css("display", "block");
            $("#sendMessage").text("Enviar");
            $("#sendMessage").attr('disabled', false);
        },
        error: function (error) {
            console.log("Error: ", error)
            $("#sendMessage").text("Enviar");
            $("#sendMessage").attr('disabled', false);
        }
    });

});