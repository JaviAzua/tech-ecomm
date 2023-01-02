import Stripe from "stripe";
import express from "express";
import { Product } from "../../types";

const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY!, {
  apiVersion: "2022-11-15",
  typescript: true,
});

export default async function handler(
  req: express.Request,
  res: express.Response
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1MKUJoFMHsIW7HzksFZe6Frq" },
          { shipping_rate: "shr_1MKUKeFMHsIW7HzkwlXuvDEv" },
        ],
        line_items: req.body.cartItems.map((item: Product) => {
          const img = item.image[0].asset._ref;
          const newImg = img
            .replace(
              "image-",
              "http://cdn.sanity.io/images/eef2fkii/production/"
            )
            .replace("-webp", ".webp");

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImg],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
}
