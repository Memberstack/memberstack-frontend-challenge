<!-- Tell us about your solution here -->
# There were 3 ideas I had to approach this challenge

- Using React Router but the problem with this approach is that the iframe would always remount
- Removing the iframe and using the component directly, thereby passing the color prop directly into the ChatBox component. but that will diminish the purpose of the challenge.
- Cross Origin communication which I used to arrive at the solution to this challenge

## Cross Origin communication
window.postMessage() method safely enables cross-origin communication between Window objects.
So passing the color message to the iframeRef contentWindow in order for the Chatbox to receive and set the css accordingly

In order to persist color upon refresh, we store the color in localStorage

I have built hooks in order to help with various state update