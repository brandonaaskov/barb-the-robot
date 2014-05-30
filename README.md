# Robut

Helpful links:

- [Getting Started with Hubot](https://github.com/github/hubot/blob/master/docs/README.md)
- [Using the Slack Adapter](https://github.com/tinyspeck/hubot-slack)
- [Deploying Hubot to Heroku](https://github.com/github/hubot/blob/master/docs/deploying/heroku.md)
- [Adding Scripts to Hubot](https://github.com/github/hubot/blob/master/docs/README.md#scripting)

### Slack Setup Instructions
We'll guide you through the steps necessary to configure Hubot so it can start interacting with Slack.

#### Outgoing Data

Install Hubot on an internet-accessible web server Heroku is easiest if you don't already have a server earmarked for this — there are Heroku deployment instructions included with Hubot). Once installed, tell it to use the 'slack' adapter.

Configure the following options:

```sh
HUBOT_SLACK_TOKEN=1234567890abcdefg
HUBOT_SLACK_TEAM=fullscreen
HUBOT_SLACK_BOTNAME=slackbot
```

Enter the URL to your running Hubot instance below. There are more instructions on the [Slack adapter page](https://github.com/tinyspeck/hubot-slack).
