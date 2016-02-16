"use strict";
var _ = require("lodash")
var moment = require("moment")

module.exports = function (args) {
  if (args && args.queuedDate)
    args.queuedDate = moment(args.queuedDate).format("YYYYMMDDHH:mm:ssZ")

  var data = {
    "id": 1258204,
    "buildTypeId": "ProcessPlayground_GithubTriggeredTest",
    "number": "88",
    "status": "UNKNOWN",
    "state": "finished",
    "branchName": "43/head",
    "href": "/httpAuth/app/rest/builds/id:1258204",
    "webUrl": "https://teamcity.e-conomic.net:8443/viewLog.html?buildId=1258204&buildTypeId=ProcessPlayground_GithubTriggeredTest",
    "statusText": "Canceled (Exit code 1 (new))",
    "buildType": {
      "id": "ProcessPlayground_GithubTriggeredTest",
      "name": "Github Triggered Test",
      "description": "Just a test to verify Github can trigger builds",
      "projectName": "Process Playground",
      "projectId": "ProcessPlayground",
      "href": "/httpAuth/app/rest/buildTypes/id:ProcessPlayground_GithubTriggeredTest",
      "webUrl": "https://teamcity.e-conomic.net:8443/viewType.html?buildTypeId=ProcessPlayground_GithubTriggeredTest"
    },
    "canceledInfo": {
      "user": {
        "username": "githubplayground",
        "name": "GitHub (playground)",
        "id": 134,
        "href": "/httpAuth/app/rest/users/id:134"
      },
      "timestamp": "20151123T112605+0100",
      "text": "Cancel called from Teamcitybot"
    },
    "queuedDate": "20151123T112525+0100",
    "startDate": "20151123T112549+0100",
    "finishDate": "20151123T112600+0100",
    "triggered": {
      "type": "user",
      "date": "20151123T112525+0100",
      "user": {
        "username": "jla",
        "name": "Jon Lauridsen",
        "id": 108,
        "href": "/httpAuth/app/rest/users/id:108"
      }
    },
    "lastChanges": {
      "count": 1,
      "change": [
        {
          "id": 543714,
          "version": "afbcd3f83674dd24d0c6b81515a72761b778aac0",
          "username": "jon lauridsen",
          "date": "20151014T164416+0200",
          "href": "/httpAuth/app/rest/changes/id:543714",
          "webUrl": "https://teamcity.e-conomic.net:8443/viewModification.html?modId=543714&personal=false"
        }
      ]
    },
    "changes": {
      "href": "/httpAuth/app/rest/changes?locator=build:(id:1258204)"
    },
    "revisions": {
      "count": 1,
      "revision": [
        {
          "version": "eb05eec8a92781bb63f3216cf9eca205138ede77",
          "vcs-root-instance": {
            "id": "796",
            "vcs-root-id": "ProcessPlayground_ProcessPlayground",
            "name": "process-playground",
            "href": "/httpAuth/app/rest/vcs-root-instances/id:796"
          }
        }
      ]
    },
    "agent": {
      "href": "/httpAuth/app/rest/agents/id:62",
      "id": 62,
      "name": "teamcity-windows-006",
      "typeId": 62
    },
    "problemOccurrences": {
      "count": 1,
      "href": "/httpAuth/app/rest/problemOccurrences?locator=build:(id:1258204)",
      "newFailed": 1,
      "default": false
    },
    "artifacts": {
      "href": "/httpAuth/app/rest/builds/id:1258204/artifacts/children"
    },
    "relatedIssues": {
      "href": "/httpAuth/app/rest/builds/id:1258204/relatedIssues"
    },
    "properties": {
      "count": 4,
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
          "value": "0",
          "own": true
        },
        {
          "name": "timeout",
          "value": "120",
          "own": true
        }
      ]
    },
    "statistics": {
      "href": "/httpAuth/app/rest/builds/id:1258204/statistics"
    },
    "snapshot-dependencies": {
      "count": 1,
      "build": [
        {
          "id": 1258177,
          "buildTypeId": "ProcessPlayground_DependencyOfGithubTriggeredTest",
          "number": "4",
          "status": "SUCCESS",
          "state": "finished",
          "branchName": "43/head",
          "href": "/httpAuth/app/rest/builds/id:1258177",
          "webUrl": "https://teamcity.e-conomic.net:8443/viewLog.html?buildId=1258177&buildTypeId=ProcessPlayground_DependencyOfGithubTriggeredTest"
        }
      ]
    }
  }
  return _.extend(data, args || {})
}
