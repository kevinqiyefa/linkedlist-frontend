# LinkedList Frontend

## Setup Instructions

### Git

1.  Clone the Repo
1.  Change the upstream to your own (`git remote set-url origin <your-repo>`)
1.  `git push -u origin master`

### React

1.  `npm install` to get the dependencies
1.  `npm start` to start webpack on port `3001`
1.  Simultaneously, you must run the backend server (feel free to use your own or [Rithm School's version](https://github.com/rithmschool/LinkedList/tree/master/solution/backend)) on port 3000, or change the `API_URL` in `services/api/index.js` to reference the appropriate backend URL.

## App Structure

### Directories

The app is organized into a few main directories. This is relatively standard. Here's an explanation for each of them:

- `components` - all regular React components go in here in their own folders (see below)
- `containers` - these are Redux containers that contain **only the Redux logic**. Every container imports a React component, which it wraps around and exports with `connect`. These components should never have any render (UI) logic in them. This separation is important for testability and modularization of code.
- `services` - this contains interfaces for external services the app utilizes. Basically, the app hits a backend API. Therefore, the `callAPI` function lives in here. The app also makes use of `localStorage`, so its helper methods live in here as well.
- `store` - anything explicitly Redux-related (aside from connected-components, aka `containers`) lives in here. The `index.js` in here has logic for combining all the reducers into one and adding the thunk / devtools addons to Redux.

### Component Folders

One of the first things you will notice is that everything is basically in its own folder. Every component has a folder, for instance. Here's what goes into a component's folder:

- `index.js` - the main component code here
- `index.test.js` - the Jest / Enzyme tests for the component
- `index.stories.js` - storybook stories for the component (see below)
- `style.css` - CSS styles relating to the component

Remember that the name `index.js` is special. You can reference a component in `RandomThing/index.js` just as `import RandomThing from './RandomThing`; in other words you don't have to reference the filename at all, just the folder name.

## Using Storybook (Optional but Fun)

When developing on larger apps, it can be really annoying to mess with the CSS and constantly have to navigate back to a component, or login/logout just to see changes.

This is where [Storybook](https://storybook.js.org/) comes in. You don't have to use this, but it can make UI development, especially in regards to CSS, a lot faster/easier.

Basically, you'll see some components (`Header` for example) have a file in their component folder called `index.stories.js`. This file contains some statements in it, i.e. `storiesOf`, that look kind of like Jest statements.

All that Storybook does is render components on their own, outside of the rest of the app context. You simply import a component, and write some "stories" statements for it, showing how it looks when rendered with different props.

To use storybook and see it in action, just type `npm run storybook`. This will run storybook on `localhost:9009`. Any time you change a component, storybook will reload and update the component.

That's about it. For more info, check out their wonderful docs on [writing stories](https://storybook.js.org/basics/writing-stories/). It can be a little bit more complicated when you need to mock the Router or Redux, but it's still worth it imo!
