import React from "react";

export const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul>
        <li className="list" id="list">
            Cash <span>-$400</span> <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};


