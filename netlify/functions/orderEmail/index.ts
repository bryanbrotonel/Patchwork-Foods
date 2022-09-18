import { Handler } from '@netlify/functions';
const fs = require('fs/promises');
var handlebars = require('handlebars');
const sendMail = require('./gmail');

// Read HTML file
const readHTMLFilePromise = async (path: string) => {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Send email
const sendEmailPromise = async (cartData) => {
  const { email, postalCode, items, total } = cartData;

  const html = await readHTMLFilePromise(
    './functions/assets/orderEmail/template.html'
  );

  // Compile HTML
  var template = handlebars.compile(html);

  // Replace placeholders with data
  var replacements = {
    email: email,
    postalCode: postalCode,
    items: items,
    total: total,
  };

  var htmlToSend = template(replacements);

  // Connfigure email options
  const options = {
    to: email,
    subject: `Order Confirmed`,
    textEncoding: 'base64',
    html: htmlToSend,
  };

  return await sendMail(options);
};

const handler: Handler = async (event, context) => {
  // If no body, return 400 Bad Request
  if (!event.body) {
    return {
      statusCode: 400,
      body: 'Bad Request',
    };
  }

  const { payload } = JSON.parse(event.body);

  const emailToSend = await sendEmailPromise(payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ response: emailToSend }),
  };
};

export { handler };
