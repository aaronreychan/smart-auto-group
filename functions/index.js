const functions = require('firebase-functions');
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(functions.config().sendgrid.key); // Sendgrid key


function parseBody(value) {
    const body = JSON.parse(value);
    const fromEmail = new helper.Email(body.from); // user email
    const toEmail = new helper.Email(functions.config().sendgrid.email); // main email 'George@smartautogroup.ca'
    const subject = 'Smart Auto Financial'; // subject
    const content = new helper.Content('text/html', body.content); // HTML content
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);
    return mail.toJSON();
}

exports.httpEmail = functions.https.onRequest((req, res) => {
    return Promise.resolve()
        .then(() => {
        if (req.method !== 'POST') {
    const error = new Error('Only POST requests are accepted');
    error.code = 405;
    throw error;
}

const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: parseBody(req.body)
});

return sg.API(request, (error, response) => {
    console.log(response.statusCode);
console.log(response.body);
});
})
.then((response) => {
    if (response) {
        res.send(response);
        return 'Success'
    } else {
        res.end();
return 'Error'
}
})

.catch((err) => {
    console.error(err);
return Promise.reject(err);
});
});
