# TimeZest

## Acknowledgements
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [Brainstation](https://brainstation.io/)
- [Figma](https://www.figma.com/design/)
- [Freepik](https://www.freepik.com/)
- [Google](https://fonts.google.com/)
- [npm](https://www.npmjs.com/)
- [Postman](https://www.postman.com/)
- [StackBlitz](https://stackblitz.com/edit/react-fu7pbk?file=src%2FApp.js)
- [Thunder Client](https://www.thunderclient.com/)
- [Vite](https://vitejs.dev/)
- [VistaPrint](https://www.vistaprint.ca)

## Author
- [Matthew Jung](https://github.com/matthewjung04)

## Table of Contents
- [Usage](#usage-run-all-commands-from-main-directory)
- [Overview](#overview)
- [Problem](#problem)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Mockups](#mockups)
- [Nice-to-haves](#nice-to-haves)

## Usage (run all commands from main directory)
- Install project:
`$ npm install`

- Run the project:
`$ npm run dev`

## Overview
TaskMaster strives to make scheduling anything from daily tasks to important work events easier with the power of AI.
This project uses mongoDB GenAI to create suggestions to make scheduling anything from simple daily tasks to important work meetings.

## Problem
Time management can be difficult with a heavy schedule filled with meetings and tasks that isn't organized properly.
For users that struggle with time management modern AI technology can do the planning for you.

## Features
- Automated scheduling: Create schedules for users based on previous tasks and preferences.
- Automated reminders: Get reminders of upcoming meets and tasks without having to setup reminders manually.

## Tech Stack
![javascript][javascript-image] [![react][react-image]][react-url] [![sass][sass-image]][sass-url] [![npm][npm-image]][npm-url] [![axios][axios-image]][axios-url] 

[javascript-image]: https://img.shields.io/badge/JavaScript-HTML-orange
[axios-image]: https://img.shields.io/badge/axios-api-purple
[axios-url]: https://axios-http.com/docs/api_intro
[expressjs-image]: https://img.shields.io/badge/Express.js-framework-white
[expressjs-url]: https://expressjs.com/
[mongodb-image]: https://img.shields.io/badge/mongoDB-database-lime
[mongodb-url]: https://www.mongodb.com/
[nodejs-image]: https://img.shields.io/badge/Node.js-backend-green
[nodejs-url]: https://nodejs.org/en
[npm-image]: https://img.shields.io/badge/npm-v10.8.1-red
[npm-url]: https://www.npmjs.com/
[react-image]: https://img.shields.io/badge/react-vite-blue
[react-url]: https://react.dev/
[sass-image]: https://img.shields.io/badge/Sass-css-pink
[sass-url]: https://sass-lang.com/

**npm libraries**
- [axios](https://www.npmjs.com/package/axios): `$ npm i axios`
- [calendar](https://www.npmjs.com/package/calendar): `$ npm i calendar`
- [dotenv](https://www.npmjs.com/package/dotenv): `$ npm i dotenv`
- [json-calendar](https://www.npmjs.com/package/json-calendar): `$ npm i json-calendar`
- [moment](https://www.npmjs.com/package/moment): `$ npm i moment`
- [react-big-calendar](https://www.npmjs.com/package/react-big-calendar): `npm i react-big-calendar`
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): `$ npm i react-router-dom`
- [sass](https://www.npmjs.com/package/sass): `$ npm i sass`

## Backend (APIs)
- [Backend Repository](https://github.com/matthewjung04/brainstation-capstone-backend.git)

## Mockups

### Home Page
![HomePage](./public/Mockups/HomePage_Mockup.jpg)

### Login Page
![LoginPage](./public/Mockups/LoginPage_Mockup.jpg)

### User Page
![UserPage](./public/Mockups/UserPage_Mockup.jpg)

## Nice-to-haves
- Integrate Google Calendars, Apple Calendars, Slack
  - export calendars and events
- Bonus document translation feature
- Expand automated scheduling with voice commands
