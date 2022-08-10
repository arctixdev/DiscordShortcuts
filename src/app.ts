import axios from 'axios';
import envy from 'envy';
const env = envy();
const TOKEN : string = env.token;

/**
 * Functions that updates Discord user settings
 * @param {string} text content to patch Discord settings with
 */
async function patchDiscordSettings(text : string) {
  try {
    await axios(
        {
          url: 'https://ptb.discordapp.com/api/v6/users/@me/settings',
          method: 'PATCH',
          headers: {'Authorization': TOKEN},
          data: {
            'custom_status': {
              'text': text,
            },
          },
        },
    );
  } catch (error) {
    console.log(error.message);
  }
}

patchDiscordSettings(
    'YES IT WORKS',
);
