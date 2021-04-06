const { RandomReddit } = require('random-reddit');
const rInfo = require('random-reddit');
const { redditCredentials } = require(`${require.main.path}/config.json`);

module.exports = {
  name: 'reddit-depr',
  description: 'Shows a random Reddit picture from your selected subreddit.',
  guildOnly: true,
  permissions: 'ADMINISTRATOR',
  async execute(message, args) {
    const reddit = new RandomReddit({
      username: redditCredentials.username,
      password: redditCredentials.password,
      app_id: redditCredentials.app_id,
      api_secret: redditCredentials.api_secret,
      logs: false
    });

    if (!args[0]) {
      const ErrorMsg = {
        "title": `Error`,
        "description": `Please supply a subreddit.`,
        "color": errorColor,
        "footer": {
          "icon_url": message.author.avatarURL(),
          "text": `${message.author.tag}`,
        },
      };
      return message.channel.send({ embed: ErrorMsg });
    }
    const post = await reddit.getImage(args[0])
    message.channel.send(`${post}\n**${rInfo.title}**\n*by ${rInfo.author} in ${rInfo.subreddit}*`)
  },
};
