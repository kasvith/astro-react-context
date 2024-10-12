import { createContext, useContext, useState, type ReactNode } from "react";

// Define the shape of a shopping list item
interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
}

// Define the shape of our context
interface ShoppingListContextType {
  items: ShoppingItem[];
  addItem: (name: string, quantity: number) => void;
  removeItem: (id: number) => void;
  clearList: () => void;
}

// Create the context with a default value
const ShoppingListContext = createContext<ShoppingListContextType | undefined>(
  undefined
);

// Create a provider component
export function ShoppingListProvider({ children }: { children: ReactNode }) {
  console.log("ShoppingListProvider");
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const addItem = (name: string, quantity: number) => {
    setItems((prevItems) => [...prevItems, { id: Date.now(), name, quantity }]);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setItems([]);
  };

  const value = {
    items,
    addItem,
    removeItem,
    clearList,
  };

  return (
    <ShoppingListContext.Provider value={value}>
      {children}
    </ShoppingListContext.Provider>
  );
}

// Custom hook to use the context
export function useShoppingList(): ShoppingListContextType {
  const context = useContext(ShoppingListContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingList must be used within a ShoppingListProvider"
    );
  }
  return context;
}
