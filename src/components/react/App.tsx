import { ShoppingListProvider } from "./ShoppingListContext";
import React from "react";

export const App = ({ children }: { children?: React.ReactNode }) => {
  return <ShoppingListProvider>{children}</ShoppingListProvider>;
};
