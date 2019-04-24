This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Test Cases

Instructions: 
1) Open link to begin testing
https://mighty-woodland-80177.herokuapp.com/?fbclid=IwAR0ZV22C5P2oi11gzm32VR-BSZ1P8RQm3JVNbTL0nWl3TyMdlUGeQ7Fdpwc


Story 3: As a user I should be able to see the outlines of the games

Feature: Create buttons for each spot the difference
1) Click Skip Pages button
2) Click on Spot the difference game
3) Should bring you to page 16
4) Look at the image on page 16
5) Click on the Next Page button
6) Look at the image on page 17
7) Hover over the image that is differnt than the one on page 16
8) Mouse cursor should change indicating there is a button there
9) Buttons do not have functions so clicking it will do nothing.

Feature: Create game frames for crossword
1) Click on Skip Pages button
2) Click on Crossword button
3) Should bring you to crossword page
4) Look at page to see if frame is there

Feature: Create the grid and get all the letters in
1) Click on Skip Pages button
2) Click on Crossword button
3) Should bring you to crossword page
4) Look at page to see if grid for crosswords is there.

------------------------------------------------------------------------------------------------------------------------------------------------------
Story 4: The website should be accessible by everybody

Feature: Push project onto live domain
1) Click on Link below or copy and paste it in url.
https://mighty-woodland-80177.herokuapp.com/?fbclid=IwAR0ZV22C5P2oi11gzm32VR-BSZ1P8RQm3JVNbTL0nWl3TyMdlUGeQ7Fdpwc
2) Should bring you to Sophia's Storybook web app

Feature: Make the website accessible to keyboards
1) Navigate home page by clicking on down arrow key to move through butttons
2) Click "Enter" button on keyboard to select.
3) Click "Enter" on your keyboard on highlighted button "Start Story" to move to page 1.
4) Click left arrow key on keyboard and then enter button on keyboard to move to prev page, homepage
5) Click on right arrow key on keyboard and then enter button on keyboard to move to next page, page2

Feature: Make alt text for visuals
1) Click on Start Story Button
2) Read Alt-text under the image shown (*If there is no image, then there is no alt text. There are no alt text for games currently because of constant visual change)
3) Alt text should describe the picture
4) Click next button
5) Repeat steps 2-4 until last page is hit

Feature: Make the sound buttons functional
1) Click Start Story Button
2) Click Sound Button
3) You should hear a sound when clicked
4) Click Next Page
5) Repeat step 2-4 until you get to the last page.

Feature: Fix the Skip Pages Button
1) Click Skip Pages button
2) Click on maze
3) Should bring you to page 5
4) Click on Sophia's Storybook header to go back to homepage
5) Click Skip Pages button
6) Click on another game
7) Should bring you to the game page
8) Repeat steps 5-7 until all games had been pressed.
