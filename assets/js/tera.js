var nome = $("#name").val();
var email = $("#email").val();
var mensagem = $("#message").val();

$("#sendMessage").on("click", function () {
    if (!name || !email || !mensagem) return;
    $.ajax({
        url: "https://api.mailgun.net/v3/beestart.com.br/messages",
        type: 'POST',
        cache: false,
        headers: {
            Authorization: "Basic YXBpOmtleS0xMzgwNmMzOGVlOTZmZTZmN2JiY2NlZWEzMGJkM2FhNA==", //! Se a API KEY mudar essa chave deve ser refeita.
            "content-type":
                "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        },
        username: 'api',
        password: 'key-13806c38ee96fe6f7bbcceea30bd3aa4',
        data: { "from": "rodrigo@beestart.com.br", "to": "rodrigo@beestart.com.br", "text": "Contato" },
        success: function (data) {
            //somefunctionhere();
            console.log("Aeeeee")
        },
        error: function (data) {
            console.log('Silent failure.');
        }
    });
    return false;


});