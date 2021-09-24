import { useState } from "react";
import { ORIGIN } from "../constant";

export const useAddEventMessageListener = () => {
  const [color, setColor] = useState<string>()

  //listens to events from the host
  window.addEventListener('message', 
    (event: MessageEvent) => {
      /** 
       * Do we trust the sender of this message?  
       * (might be different from what we originally opened, for example).
       */
      if (event.origin !== ORIGIN){ 
        return;
      }
      setColor(event.data)
    }
  );

  return { color }
}
