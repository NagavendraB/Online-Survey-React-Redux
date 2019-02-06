# Online Survey (React, Redux)

## Summary

This is the application developed on React and Redux to for Online Survey, Each page includes...

- one question
- one of the following input types to answer the question.
  - Text input field
  - Dropdown (several options, one selectable)
  - Radio buttons (multiple inputs, one selectable)
- One back button to go to the previous page of the journey (it is disabled, if on first page)
- One next button to go to the next page of the journey (if not on summary / last page)
    - The button will be disabled if no input is given yet for the current page
- The last page shows a summary of all questions with answers.
- A progress indicator bar.
- This app is responsive, it will work on any device.

Below libraries and tools have been used to develop this application.

- React for component developed.
- Redux for application state management.
- Material-UI for styles.
- Jest for unit testing.

##### Custome Middleware
Created the custome middleware to handle the all API requests in the application with common action, instead of creating different API calls in action creators.
 
- This will allow us to handle loading spinner/loader globally across the application when handling with diffrent API calls.
- Action creators can be easily tested as all async calls will be handled in custom middleware.
- Code in the action creator is clean and uniform.
- When application is becoming bigger, we can handle all API calls across the application easily with clean code.

### Sample screens

![Survey](docs/Survey1.PNG)

![Survey](docs/Survey2.PNG)

![Survey](docs/Result.PNG)

### Get it running
Below are the steps to get it running.

 - Install all the dependences in the application by using the command ``` npm install ```
 - Express server is used to fetch the data from server, hence start the server in seperate terminal by using command `` npm run start:server ``
 - Then start the application in another terminal by using command ``` npm start ```
 - Run the tests using command ``` npm test ```
