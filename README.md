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
HUBOT_SLACK_TEAM=rkhd
HUBOT_SLACK_BOTNAME=barb
HEROKU_URL=http://barb-the-robot.herokuapp.com/
HUBOT_MEMEGENERATOR_USERNAME=brandonaaskov
HUBOT_MEMEGENERATOR_PASSWORD=PasswordIsTaco
HUBOT_SHIP_EXTRA_SQUIRRELS=true
KARMA_ALLOW_SELF=true
```
