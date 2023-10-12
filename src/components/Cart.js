import React, { useState } from 'react';

function Cart({ cartItems }) {
  const [cart, setCart] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateCartItem = (index, price, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index] = { ...updatedCart[index], price, quantity };
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Mention your Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img style={{width:"400px", height:"300px"}} src={item.image} alt="Dog" />
              </td>
              <td>
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    updateCartItem(index, parseFloat(e.target.value), item.quantity)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItem(index, item.price, parseInt(e.target.value))
                  }
                />
              </td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={calculateTotalPrice}>Calculate Total</button>
      <p>Total Price: {totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
