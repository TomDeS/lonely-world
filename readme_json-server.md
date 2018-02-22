## How to install JSON-Server

(see: https://thecodebee.com/fake-api-for-angular-2+-during-development-using-angularcli/)

* yarn global add json-server
* yarn add --dev json-server
* Create a proxy file proxy.conf.json
* edit package.json => "start": "ng serve --proxy-config proxy.conf.json",

## How to run JSON-Server and Angular CLI

Run:
// @TODO: move to Firebase as json-server makes the page reload after submitting a form
* json-server --watch "src/assets/db.json"
* yarn start
