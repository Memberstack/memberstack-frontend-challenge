import React, { useCallback, useEffect } from "react";

export const useHandlePostValue = (iframeRef: React.RefObject<HTMLIFrameElement>, value: string) =>{
  
  const handlePostValue = useCallback(() => {
    const {current} = iframeRef;
    // Check to see if iframe exists
    if(current &&  current.contentWindow) {
      /**
       * window.postMessage() method safely enables cross-origin communication between Window objects; 
       * e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.
       * The latter is what this challenge poses
       */
      current.contentWindow.postMessage(value, 'http://localhost:3002/')
      return;
    }
    console.warn('Unable to find iframe')
  },[iframeRef, value])

  // We invokes the callback right after mounting, when the iframe element has already been created in DOM.
  useEffect(() => {
    handlePostValue()
  }, [handlePostValue])

  return { handlePostValue }
}
