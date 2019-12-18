$('#contactform').on('submit', function (e) {
    event.preventDefault();
    var nome = $("#name").val();
    var email = $("#email").val();
    var mensagem = $("#message").val();
    if (!nome || !email || !mensagem) return;
    // $.ajax({
    //     url: 'https://formspree.io/rodrigo@beestart.com.br',
    //     method: 'POST',
    //     username: 'api',
    //     dataType: "json",
    //     password: 'key-13806c38ee96fe6f7bbcceea30bd3aa4',
    //     data: {
    //         name: nome,
    //         _replyto: email,
    //         email: email,
    //         comments: mensagem,
    //         _subject: '[TERA] Contato através do site!',
    //     },
    //     success: function () {
    //         console.log('success');
    //         // $('#formBlock').hide();
    //         // $('#thankyouBlock').show();
    //     },
    //     error: function (error) {
    //         console.log("Error: ", error)
    //     }
    // });

    var form = {
        name: nome,
        _replyto: email,
        email: email,
        comments: mensagem,
        _subject: '[TERA] Contato através do site!',
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.mailgun.net/v3/beestart.com.br/messages",
        "method": "POST",
        "headers": {
            "Authorization": "Basic YXBpOmtleS0xMzgwNmMzOGVlOTZmZTZmN2JiY2NlZWEzMGJkM2FhNA==",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "cache-control": "no-cache"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});