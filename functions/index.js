const functions = require('firebase-functions');
const helper = require('sendgrid').mail;
const sg = require('sendgrid')('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'); // Sendgrid key

function parseBody(value) {
  const body = JSON.parse(value);
  const fromEmail = new helper.Email(body.from); // user email
  const toEmail = new helper.Email('George@smartautogroup.ca'); // main email
  const subject = 'Smart Auto Group'; // subject
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
