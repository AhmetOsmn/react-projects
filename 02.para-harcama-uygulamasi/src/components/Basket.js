import React from "react";
import BasketItem from "./BasketItem";

function Basket({ total, resetBasket, basket, products }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Alışveriş Detayları</h3>
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="basket-footer">
          <div className="total">Toplam: $ {total}</div>
          <button className="basket-reset-btn" onClick={resetBasket}>
            Sepeti Sıfırla
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .basket-container {
            padding: 20px;
            background: #fff;
            border: 1px solid #ddd;
          }

          .basket-container h3 {
            fonts-size: 20px;
            margin-bottom: 15px;
          }

          .basket-container .total {
            border-top: 1px solid #ddd;
            padding-top: 10px;
            margin-top: 10px;
            fonts-size: 18px;
            font-weight: bold;
            text-align: right;
            color: #179b17;
          }

          .basket-reset-btn {
            background: #61dafb;
            height: 40px;
            padding: 0 20px;
            fonts-size: 16px;
            fontweight: bold;
            cursor: pointer;
          }

          .basket-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
}

export default Basket;
