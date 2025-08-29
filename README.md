
getElementById returns one element by ID.
getElementsByClassName returns a live list of elements with a class.
querySelector returns the first match using a CSS selector.
querySelectorAll returns all matches as a static list.

let newDiv = document.createElement("div");  
newDiv.textContent = "Hello!";  
document.body.appendChild(newDiv);

Event Bubbling means when an event happens on a child element, it first runs on that element and then "bubbles up" to its parent, then grandparent, and so on up to the root (`document`).

Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. The event bubbles up, and you check which child triggered it.

preventDefault() - Stops the browser’s default action ( preventing form submission, stopping a link from opening).
stopPropagation() - Stops the event from bubbling up (or capturing down) to parent elements.




