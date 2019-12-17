var nome = $("#name").val();
var email = $("#email").val();
var mensagem = $("#message").val();

$("#sendMessage").on("click", function () {
    if (!name || !email || !mensagem) return;
    $.ajax({
        method: "POST",
        url: "https://api.mailgun.net/v3/beestart.com.br/messages",
        headers: {
            Authorization: "Basic YXBpOmtleS0xMzgwNmMzOGVlOTZmZTZmN2JiY2NlZWEzMGJkM2FhNA==", //! Se a API KEY mudar essa chave deve ser refeita.
            "content-type":
                "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        },
        formData: {
            from: email,
            subject: "Contato através do site",
            html: `<p>${nome}</p>`,
            to: "rodrigo@beestart.com.br",
        },
        success: function () {
            console.log('success');
            // $('#formBlock').hide();
            // $('#thankyouBlock').show();
        }
    });
});