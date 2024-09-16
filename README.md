# React Introduction

In this exercise, you are going to work with the layout of [Gmail](./images/gmail-email-view-intro.png) and practice breaking down a larger complex view of an existing codebase into components. As an extra challenge, you can also practice adding new components.

This is a great opportunity to work with a partner, it _could_ look something like this:

- Discuss your approach to the task for 15 minutes
- Work on the exercise separately
- Have a retrospective session at the end of the day and share your learnings

## Setup

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm ci`, which installs dependencies for the project
4. Finally, type `npm run dev`, which starts a development server that runs your website in the browser. That server 
   will reload your website whenever you make any changes to source files

## Instructions

All the source files you need are in the [src](./src) subdirectory.

- Break down `App.jsx` into separate components
- Break down `App.css` into separate stylesheets
- Import the relevant stylesheets for each componetn

## Tips

- You might find that breaking down sections of code using components isn't possible at this time, that's ok. Take these observations into the next few days.

## Extension

- Add a component for writing emails below the `email-actions` buttons. For an example, take a look at this [image](./images/write-email-component.png).
