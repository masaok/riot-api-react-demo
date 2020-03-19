## Quickstart

1. Go here: https://developer.riotgames.com/ and create an API key
1. Copy .env.sample to .env.local (edit and save)
1. `source .env.local`
1. `yarn`
1. `yarn test`

## TODO

- Refactor to match Riot API Documentation
- Create pages to demo all API capabilities
      
### Get All Ranked Queue info for a given Summoner

https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner

```
[
    {
        "queueType": "RANKED_SOLO_5x5",
        "summonerName": "asdf",
        "hotStreak": false,
        "wins": 101,
        "veteran": false,
        "losses": 95,
        "rank": "II",
        "tier": "BRONZE",
        "inactive": false,
        "freshBlood": false,
        "leagueId": "fe4e1a5c-104c-451e-b9d5-4efe2b308e1d",
        "leaguePoints": 0
    },
    {
        "queueType": "RANKED_FLEX_SR",
        "summonerName": "asdf",
        "hotStreak": false,
        "miniSeries": {
            "wins": 1,
            "losses": 0,
            "target": 2,
            "progress": "WNN"
        },
        "wins": 21,
        "veteran": false,
        "losses": 28,
        "rank": "IV",
        "tier": "BRONZE",
        "inactive": false,
        "freshBlood": false,
        "leagueId": "3a48eef8-0f3f-4ffc-b83e-6d3cd107726f",
        "leaguePoints": 100
    }
]
```

## Boilerplate Stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
