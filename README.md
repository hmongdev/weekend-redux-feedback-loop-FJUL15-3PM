(View Raw will give you the markdown that you can copy to your repos!)

![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# weekend-redux-feedback-loop

## Description

_Duration: 8 hours_

This is a reflection/feedback form modeled after Prime's system. Feedback will be collected over 4 views: Feeling, Understanding, Support, and Comments. In a final review page, your feedback will be shown and a submit button will allow you to submit your reflection for that day. When all steps are complete, your app will save the feedback in the database.

What problem did you solve? How did you solve it?

_1_ Creating a Next Button using material ui
[1] `npm install @mui/material @emotion/react @emotion/style`
[2] `import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';`
[3] added `<ArrowForwardIosIcon />` to return

_2_ useHistory not working
[1] The issue was that useHistory components cannot be placed inside the <Router> tag

_3_ POSTing to the database on `submit`
[1] _server.js_ - create express route
[2] _form.router.js_ - create GET / POST req
[3] _review.jsx_ - create axios.post('/feedback')
[4] _admin.jsx_ - .map all your forms

_4_ List from db wasn't showing from `getFeedback`
[1] app.jsx - <Route></Route> has to be the component inside when passing a function

### Prerequisites

Link to software that is required to install the app (e.g. node).

-   [Node.js](https://nodejs.org/en/)
-   [Express.js] `npm install express`
-   [React]
-   [Redux]

## Installation

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Usage

How does someone use this application? Tell a user story here.

1. User opens the app and selects radio buttons a rating which describes them
2. After filling out the 4 questions, user can submit their form.
3. Then a success screen will show, and allow the user to see all the past form submissions.

## Built With

List technologies and frameworks here

-   [Node.js](https://nodejs.org/en/)
-   [Express.js] `npm install express`
-   [React]
-   [Redux]

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support

If you have suggestions or issues, please email me at [averyyang2674@gmail.com]
