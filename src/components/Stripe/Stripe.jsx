import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
// Sign in to see examples pre-filled with your key.
const promise = loadStripe("pk_test_51IcdbUCqpNJDX1Dkg9VseKJsmn5BE1tOaJBb4gvVIglcGI22jNMcUbMXhwPhdZlPn912bAhtc6X3D7pq2WTMV55E00u5XPmDeo");
export default function Stripe() {
  return (
    <div className="Stripe">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}