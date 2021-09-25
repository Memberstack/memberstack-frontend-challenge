<!-- This section contains alternative solutions and improvements to code -->

# Memberstack Frontend Challenge

## Solution
Task 1 : Create a way to update the chat button color when the user selects a color.
  - The color picked has to be sent to iframe from the top document. So in color change event handler, appended the src of the iframe with a param **?color=colorPicked**
  - Along with src prop, sent also key prop with src value to ChatBotIframe.
  - In the iframe app, since the key changes evertime a color is picked, app's useEffect will be called after render.
  - So, in useEffect, decoded the color and set the state of the comment image color.

Tast 2 : Persist the color such that color choice is maintained upon page refresh.
  - Upon color change, persisted the changed color in the document's url itself using usehistory hook.
  - Upon refresh, used the useLocation hook to get the location, decode the color param in query string and saved in the state.

## Improvements
Improvements needed in the exact code place is shown using **---------- *Improvements[id] --------------**

Improvements[1] and Improvements[2]
 - **Actual**
     - Appended the color picked to the iframe src url as is.
 - **Improvements**
     - The color picked will have `#` in the string. It will be difficult to get the search param using search param in document url interfece. The value will be added to hashValue instead of query/search.
     - If the color picked value is encoded while setting and decoded while getting, this problem won't be there.


Improvements[3] and Improvements[4]
 - **Actual**
      - For persisting the color during refresh, used useHistory and useLocation hooks from router by adding the color param to URL.
 - **Possible ways (wouldn't say improvements, but other possible ways to persist the color picked state)**
      1. Could have maintained the state in local storage / session storage. Maintaining the history when clicking on back/next button would have been written from scratch.
      2. Same for redux. Maintain the state of color in redux store and use it whenever needed.
      

Improvements[5]
 - **Actual**
      - Used prop drilling method to pass the color from Parent to child components. (Since the dom is not so deep)
 - **Improvements**
      - Could have used React context (Producer/Consumer). Either using
           1. useReducer()
           2. Recact.createContext
