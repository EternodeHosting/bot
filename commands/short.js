const axios = require('axios');

class CommandShort {
    constructor() {
        this.name = "shorten";
        this.description = "Raccourcir un lien";
        this.options = [
            { type: 'STRING', name: "url", description: "L'URL à raccourcir", required: true },
        ];
    }

    async execute(interaction) {
        const urlToShorten = interaction.options.getString("url");

        try {
            const shortUrl = await this.getShortUrl(urlToShorten);
            await interaction.reply({ content: `Voici votre lien raccourci: ${shortUrl}`, ephemeral: false });
        } catch (error) {
            await interaction.reply({ content: 'Impossible de raccourcir le lien. Verifiez le lien ou vérifiez le status de https://rwz.fr', ephemeral: true });
        }
    }

    async getShortUrl(url) {
        const API_URL = 'https://rwz.fr/api/url/add';
        const BEARER_TOKEN = 'token';

        try {
            const response = await axios.post(API_URL, { url: url }, {
                headers: {
                    'Authorization': `Bearer ${BEARER_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.error === 0) {
                return response.data.shorturl;
            } else {
                throw new Error('Error in response data');
            }
        } catch (error) {
            console.error('Error shortening URL:', error);
            throw error;
        }
    }
}

module.exports = CommandShort;
