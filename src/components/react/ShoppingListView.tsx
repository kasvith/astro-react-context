import React from "react";
import { useShoppingList } from "./ShoppingListContext";
import { Printer } from "lucide-react";

export function ShoppingListView() {
  const { items } = useShoppingList();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Shopping List</h2>
        <button
          onClick={handlePrint}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <Printer size={18} className="mr-2" />
          Print
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-600">Your shopping list is empty.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-600">Quantity: {item.quantity}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 text-gray-600">
        <p>Total Items: {items.length}</p>
        <p>
          Total Quantity: {items.reduce((sum, item) => sum + item.quantity, 0)}
        </p>
      </div>
    </div>
  );
}
