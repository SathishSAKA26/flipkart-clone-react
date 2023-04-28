import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../slices/cartSlice";

const Cart = () => {
  const [active, setActive] = useState(1);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartData.cart);
  const user = useSelector((state) => state.userData.user);

  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="py-14 px-[50px] w-full h-[100vh] text-white">
      <div className="w-full my-0 mx-auto flex justify-around text-center font-medium bg-gray-900">
        <p
          className={` w-[30%] py-3 px-[10px] cursor-pointer ${
            active === 0 ? "active" : ""
          }`}
          onClick={() => setActive(0)}
        >
          Flipkart
        </p>
        <p
          className={` w-[30%] py-3 px-[10px] cursor-pointer ${
            active === 1 ? "active" : ""
          }`}
          onClick={() => setActive(1)}
        >
          Grocery
        </p>
      </div>
      {user ? (
        <div className="mt-[1rem] min-h-[350px] w-full pt-[10px] px-0 pb-[36px] bg-gray-900">
          <div className="Cart-container pt-[50px]">
            {cartItems.map((cart, index) => (
              <div key={index} className="flex ml-[50px] mb-[50px]">
                <div className="w-[150px]">
                  <img
                    src={cart?.url}
                    className="w-[80px] h-150px object-contain"
                  />
                </div>
                <div className="ml-[100px]">
                  <h3>{cart.Product}</h3>
                  <p className="pt-5">
                    {cart.Display}, {cart.Descripition}
                  </p>
                  <p className="pt-5">₹{cart.Sellingprice}</p>
                  <button
                    className="w-[200px] py-[16px] px-2 text-basic outline-none uppercase font-semibold rounded-sm cursor-pointer bg-[#fb641b] mt-5"
                    onClick={() => removeFromCart(cart.id)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="cart-item">
          <div className="text-center">
            <img
              src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
              className="w-[200px] h-[200px] object-contain ml-[530px]"
            />
            <p className="text-lg py-[5px] px-0 font-normal">
              Missing Cart items?
            </p>
            <p className="py-[10px] px-0 text-sm">
              Login to see the items you added previously
            </p>
            <button className="h-8 w-[15%] outline-none bg-[#fb641b] cursor-pointer rounded">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
