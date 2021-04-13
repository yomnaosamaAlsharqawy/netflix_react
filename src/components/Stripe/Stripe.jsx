import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
// Sign in to see examples pre-filled with your key.
const promise = loadStripe("insert your api key here");
export default function Stripe() {
  return (
    <div className="Stripe">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}