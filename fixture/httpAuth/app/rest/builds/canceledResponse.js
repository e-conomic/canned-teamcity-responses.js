"use strict";
var _ = require("lodash")
var moment = require("moment")

module.exports = function (args) {
  var data = {
    "id": 1258204,
    "buildTypeId": "ProcessPlayground_GithubTriggeredTest",
    "number": "89",
    "status": "UNKNOWN",
    "state": "finished",
    "running": true,
    "percentageComplete": 100,
    "branchName": "43/head",
    "href": "/httpAuth/app/rest/builds/id:1258204",
    "webUrl": "https://teamcity.e-conomic.net:8443/viewLog.html?buildId=1258204&buildTypeId=ProcessPlayground_GithubTriggeredTest",
    "statusText": "Canceled (Step 1/1)",
    "buildType": {
      "id": "ProcessPlayground_GithubTriggeredTest",
      "name": "Github Triggered Test",
      "description": "Just a test to verify Github can trigger builds",
      "projectName": "Process Playground",
      "projectId": "ProcessPlayground",
      "href": "/httpAuth/app/rest/buildTypes/id:ProcessPlayground_GithubTriggeredTest",
      "webUrl": "https://teamcity.e-conomic.net:8443/viewType.html?buildTypeId=ProcessPlayground_GithubTriggeredTest"
    },
    "running-info": {
      "percentageComplete": 100,
      "elapsedSeconds": 110,
      "estimatedTotalSeconds": 8,
      "currentStageText": "Step 1/1: PowerShell arguments: [-NonInteractive, -ExecutionPolicy, ByPass, -File, C:\\BuildAgent\\temp\\buildTmp\\powershell4116399152926840402.ps1]",
      "outdated": false,
      "probablyHanging": false
    },
    "canceledInfo": {
      "user": {
        "username": "jla",
        "name": "Jon Lauridsen",
        "id": 108,
        "href": "/httpAuth/app/rest/users/id:108"
      },
      "timestamp": "20151123T142251+0100"
    },
    "queuedDate": "20151123T142005+0100",
    "startDate": "20151123T142101+0100",
    "triggered": {
      "type": "user",
      "date": "20151123T142005+0100",
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
      "href": "/httpAuth/app/rest/agents/id:55",
      "id": 55,
      "name": "teamcity-windows-008",
      "typeId": 55
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
          "value": "60",
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
