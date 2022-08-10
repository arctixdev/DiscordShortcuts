"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * Functions that updates Discord user settings
 * @param {string} text content to patch Discord settings with
 * @param {string} token Discord user token
 */
function patchDiscordSettings(text, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, axios_1.default)({
                url: 'https://ptb.discordapp.com/api/v6/users/@me/settings',
                method: 'PATCH',
                headers: { 'Authorization': token },
                data: {
                    'custom_status': {
                        'text': text,
                    },
                },
            });
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
patchDiscordSettings('YES IT WORKS', 'NjE1OTE2ODU0NzQ5NDI5Nzcy.GL0obn.pPN7MDdL66b703vPC4G4TXTRxyIDFPOVy8B1jY');
//# sourceMappingURL=app.js.map