const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HXOZSCGNMAhcRfkwXVayoJ3DjtIczASpXZeDnsaGIIIxx4LASPVEPb0im8KGJSY2vi57wlHDKE8hgXQdJQqidel004vkC2yhV'
);

// API

// App config
const app = express();

// Middlewares
app.use(
  cors({ origin: 'https://clone-5e662.web.app', optionsSuccessStatus: 200 })
);
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('payment request recieved:', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

//ex
// http://localhost:5001/clone-5e662/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
