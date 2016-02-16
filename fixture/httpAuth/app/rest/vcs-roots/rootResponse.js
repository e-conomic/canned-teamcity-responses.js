"use strict";
var _ = require("lodash")

exports.vcsRootResponse = function (args) {
  if (args && args.id) {
    args.href = "/httpAuth/app/rest/vcs-root-instances/id:" + args.id
  }
  var data = {
    "id": "1867",
    "vcs-root-id": "GithubPullRequests_EConomicEConomicRepo",
    "name": "e-conomic/e-conomic repo",
    "vcsName": "jetbrains.git",
    "status": "FINISHED",
    "lastChecked": "20151006T173637+0200",
    "lastVersion": "9c747afa71073a02a32c5ca41704cba861f8fced",
    "href": "/httpAuth/app/rest/vcs-root-instances/id:1867",
    "vcs-root": {
      "id": "GithubPullRequests_EConomicEConomicRepo",
      "name": "e-conomic/e-conomic repo",
      "href": "/httpAuth/app/rest/vcs-roots/id:GithubPullRequests_EConomicEConomicRepo"
    },
    "properties": {
      "count": 11,
      "property": [
        {
          "name": "agentCleanFilesPolicy",
          "value": "ALL_UNTRACKED"
        },
        {
          "name": "agentCleanPolicy",
          "value": "ON_BRANCH_CHANGE"
        },
        {
          "name": "authMethod",
          "value": "TEAMCITY_SSH_KEY"
        },
        {
          "name": "branch",
          "value": "master"
        },
        {
          "name": "ignoreKnownHosts",
          "value": "true"
        },
        {
          "name": "submoduleCheckout",
          "value": "CHECKOUT"
        },
        {
          "name": "teamcity:branchSpec",
          "value": "+:refs/pull/(*/head)"
        },
        {
          "name": "teamcitySshKey",
          "value": "id_rsa"
        },
        {
          "name": "url",
          "value": "git@github.com:e-conomic/e-conomic.git"
        },
        {
          "name": "useAlternates",
          "value": "true"
        },
        {
          "name": "usernameStyle",
          "value": "EMAIL"
        }
      ]
    }
  }
  return _.extend(data, args || {})
}
