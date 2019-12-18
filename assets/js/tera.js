$('#contactform').on('submit', function (e) {
    event.preventDefault();

    var nome = $("#name").val();
    var email = $("#email").val();
    var mensagem = $("#message").val();

    if (!nome || !email || !mensagem) return;

    $.ajax({
        url: 'https://us-central1-tera-db-auth-storage.cloudfunctions.net/sendEmailContact',
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
            // $('#formBlock').hide();
            // $('#thankyouBlock').show();
        },
        error: function (error) {
            console.log("Error: ", error)
        }
    });

});