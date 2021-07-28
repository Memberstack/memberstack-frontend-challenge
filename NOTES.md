<!-- Tell us about your solution here -->

I decided to use a mix of both a `useLocalStorage` hook and React.Context to build this out. Using local storage enables me to persist the newest color. However, I didn't consider that both apps would need their respective localStorage `color` keys to be updated, which is why this isn't functioning properly.

I also decided to make the `useLocalStorage` hook and `ColorContext` into it's own library to ensure code was changed in only one place. (A major drawback here was Lerna caching dependencies and `yarn learna clear` not working properly the first couple of times).

I think the general direction of this was appropriate but obviously having it fully functional would have been nice.
