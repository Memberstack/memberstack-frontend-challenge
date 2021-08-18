import { useEffect, useState } from "react";

export const useLocalStorage = (initialColor: string, itemToObtain: string) => {
 /**
   * we first get the color from localStorage
   * if we do not have one then return #e66465'
   */
  const color = localStorage.getItem(itemToObtain) || initialColor

  const [item, setItem] = useState<string>(color);

  //on load && color change update localStorage to user select color
  useEffect(() => {
    localStorage.setItem(itemToObtain, item);
  }, [item, itemToObtain]);

  return { item, setItem }
}
