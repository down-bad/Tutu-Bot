const { RandomReddit } = require('random-reddit')
const reddittitle = require('random-reddit')
const { redditCredentials } = require(`${require.main.path}/config.json`);

module.exports = {
  name: 'threesome',
  aliases: ['xsome', 'xsomes', 'threesomes', 'foursome', 'foursomes', 'groupsex', 'fivesome', 'fivesomes'],
  description: 'Shows random post of r/Xsome, r/Threesome or r/groupsex.',
  guildOnly: true,
  nsfwDisable: true,
  nsfwCommand: true,
  async execute(message) {
    const reddit = new RandomReddit({
      username: redditCredentials.username,
      password: redditCredentials.password,
      app_id: redditCredentials.app_id,
      api_secret: redditCredentials.api_secret,
      logs: false
    });

    var subreddits = [
      'Xsome',
      'Threesome',
      'groupsex'
  ]

    const post = await reddit.getImage(subreddits)
    message.channel.send(`Tutu well, **${message.author.tag}** 💜\n${post}\n**${reddittitle.title}**`)
  },
};
