## Description

This is a simply API consumer for Google API services like Big Query and GA4. It's full functional althought it's not complex. Use as basis for your application as you desire. Feel free to give me the credits.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

This is a free project built with NestJS under its license. Please consider give the credits for me when using this base project by my github profile.

## Google Analytics request

Use this JSON structure must be this way:

{
"date": "2022-10-31",
"metrics": [
"addToCarts"
],
"dimensions": [
"city",
"itemName"
]
}

For the complete list of metrics and dimensions check the Google Analytics Data API documentation.

## Google Account Services

It's required a Google Account service created in the Google Cloud console with the permissions to access both Big Query API and Google Analytics Data API. For Big Query API create an account named "analytics-processing-dev@system.gserviceaccount.com" with Editor and Big Query Admin permissions. For Google Analytics Data API create an account named google-analytics then copy the generated principal (email) and insert as a user of the desired Google Analytics 4 property.
Then you must generate the JSON key in the Google Cloud console within the account services page and put in the project (into the "config" directory).
Remeber that to the data exists Big Query must have datasets and Google Analytics 4 property must have data.

## Google Analytics Data API documentation

https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema?hl=en

## Author

Please feel free to reach me on Linkein
Gilson Santos -> https://www.linkedin.com/in/gsantospdigital/
