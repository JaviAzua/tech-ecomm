import { useStateContext } from "../context/StateContext";
import { ContextTypes } from "../types";
import CartModule from "./CartModule";
import getStripe from "../lib/getStripe";
import toast from "react-hot-toast";

function Cart() {
  const { cartItems, totalPrice } = useStateContext() as ContextTypes;

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems: cartItems }),
    });

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className={`${
        cartItems.length == 0 && "hidden"
      } absolute top-0 right-2 pt-20 `}
    >
      <div className="flex flex-col p-4 gap-4 bg-white rounded-xl">
        {cartItems.map((item) => (
          <div key={item?._id} className="border-b-2 border-b-lightRed/50">
            <CartModule product={item} />
          </div>
        ))}

        <h4 className="flex flex-wrap mt-4 justify-center py-2 gap-2">
          <p className=" bg-lightRed/10 p-1">
            Total:$<span className="font-bold">{totalPrice}</span>
          </p>
          <button
            onClick={handleCheckout}
            className=" bg-lightRed p-1 text-sm font-bold text-white"
          >
            Pay With STRIPE
          </button>
        </h4>
      </div>
    </div>
  );
}

export default Cart;
