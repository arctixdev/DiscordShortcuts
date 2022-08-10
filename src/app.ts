import axios from 'axios';
import envy from 'envy';
const env = envy();

/**
 * Functions that updates Discord user settings
 * @param {string} text content to patch Discord settings with
 * @param {string} token Discord user token
 */
async function patchDiscordSettings(text : string, token : string) {
  try {
    await axios(
        {
          url: 'https://ptb.discordapp.com/api/v6/users/@me/settings',
          method: 'PATCH',
          headers: {'Authorization': token},
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
    'TOKEN',
);
