// sk_test_51PiKctJYT43RqlSS1eckqJRnxtp4AWo4vaywqu0MwDyruxVPejEL6Cp4q7nDspuFa2FIxCbOAek8ZXF06ABaNjpL00gA9w5Dlq

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PiKctJYT43RqlSS1eckqJRnxtp4AWo4vaywqu0MwDyruxVPejEL6Cp4q7nDspuFa2FIxCbOAek8ZXF06ABaNjpL00gA9w5Dlq"
);

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening @ 4000"));
