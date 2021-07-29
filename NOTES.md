<!-- Tell us about your solution here -->

I decided to use a state to capture the color that is selected and pass the selected color as a parameter to the ChatBotIframe.

In the Chat-button-frame app, I utilized react-router-dom and created a route and retrieved the passed in parameter to capture the
selected color.

Finally, I changed the color selector to a button. Clicking on the button opens the selector and upon color selection, the background of
the button changes to indicate the selected color. The design can further be improved to modify the text color based on the brightness
of the background color.