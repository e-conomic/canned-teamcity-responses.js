"use strict";
var _ = require("lodash")
var moment = require("moment")

module.exports = function (args) {
  if (args && args.queuedDate)
    args.queuedDate = moment(args.queuedDate).format("YYYYMMDDHH:mm:ssZ")

  var data = {
    "id": 1258177,
    "buildTypeId": "ProcessPlayground_DependencyOfGithubTriggeredTest",
    "number": "4",
    "status": "SUCCESS",
    "state": "finished",
    "branchName": "43/head",
    "href": "/httpAuth/app/rest/builds/id:1258177",
    "webUrl": "https://teamcity.e-conomic.net:8443/viewLog.html?buildId=1258177&buildTypeId=ProcessPlayground_DependencyOfGithubTriggeredTest",
    "statusText": "Success",
    "buildType": {
      "id": "ProcessPlayground_DependencyOfGithubTriggeredTest",
      "name": "Dependency of Github Triggered Test",
      "description": "Just a test to verify Github can trigger builds",
      "projectName": "Process Playground",
      "projectId": "ProcessPlayground",
      "href": "/httpAuth/app/rest/buildTypes/id:ProcessPlayground_DependencyOfGithubTriggeredTest",
      "webUrl": "https://teamcity.e-conomic.net:8443/viewType.html?buildTypeId=ProcessPlayground_DependencyOfGithubTriggeredTest"
    },
    "queuedDate": "20151123T110228+0100",
    "startDate": "20151123T110256+0100",
    "finishDate": "20151123T110310+0100",
    "triggered": {
      "type": "buildType",
      "date": "20151123T110228+0100",
      "user": {
        "username": "jla",
        "name": "Jon Lauridsen",
        "id": 108,
        "href": "/httpAuth/app/rest/users/id:108"
      },
      "buildType": {
        "id": "ProcessPlayground_GithubTriggeredTest",
        "name": "Github Triggered Test",
        "description": "Just a test to verify Github can trigger builds",
        "projectName": "Process Playground",
        "projectId": "ProcessPlayground",
        "href": "/httpAuth/app/rest/buildTypes/id:ProcessPlayground_GithubTriggeredTest",
        "webUrl": "https://teamcity.e-conomic.net:8443/viewType.html?buildTypeId=ProcessPlayground_GithubTriggeredTest"
      }
    },
    "changes": {
      "href": "/httpAuth/app/rest/changes?locator=build:(id:1258177)"
    },
    "revisions": {
      "count": 1,
      "revision": [
        {
          "version": "afbcd3f83674dd24d0c6b81515a72761b778aac0",
          "vcs-root-instance": {
            "id": "1865",
            "vcs-root-id": "ProcessPlayground_ProcessPlaygroundHead",
            "name": "process-playground HEAD",
            "href": "/httpAuth/app/rest/vcs-root-instances/id:1865"
          }
        }
      ]
    },
    "agent": {
      "href": "/httpAuth/app/rest/agents/id:59",
      "id": 59,
      "name": "teamcity-windows-005",
      "typeId": 59
    },
    "artifacts": {
      "href": "/httpAuth/app/rest/builds/id:1258177/artifacts/children"
    },
    "relatedIssues": {
      "href": "/httpAuth/app/rest/builds/id:1258177/relatedIssues"
    },
    "properties": {
      "count": 1,
      "property": [
        {
          "name": "timeout",
          "value": "0",
          "own": true
        }
      ]
    },
    "statistics": {
      "href": "/httpAuth/app/rest/builds/id:1258177/statistics"
    }
  }
  return _.extend(data, args || {})
}
