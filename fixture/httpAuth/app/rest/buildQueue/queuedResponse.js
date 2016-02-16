"use strict";
var _ = require("lodash")

module.exports = function (args) {
  var data = {
    "id": 1262127,
    "buildTypeId": "ProcessPlayground_GithubTriggeredTest",
    "branchName": "43/head",
    "href": "/httpAuth/app/rest/buildQueue/id:1262127",
    "queuedDate": "20151202T140853+0100",
    "triggered": {
      "type": "user",
      "user": {
        "username": "jla",
        "name": "Jon Lauridsen"
      }
    },
    "properties": {
      "property": [
        {
          "name": "env.selenium.fakeparam",
          "value": ""
        },
        {
          "name": "github.context",
          "value": "Test"
        },
        {
          "name": "reverse.dep.*.timeout",
          "value": "1000",
          "own": true
        },
        {
          "name": "timeout",
          "value": "1000",
          "own": true
        }
      ]
    }
  }
  return _.extend(data, args || {})
}
