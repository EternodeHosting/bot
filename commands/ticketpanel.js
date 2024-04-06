const {MessageEmbed} = require("discord.js")
const Discord = require("discord.js")
const yconfig = require('yaml-config');
var text_panel = yconfig.readConfig('./texts-config.yaml', 'ticket_panel');

class commandhelp {
    constructor() {
        this.name = "ticketpanel"
        this.description = "Créer un super panel de ticket !"

    }

    async execute(interaction, client) {
        if(!interaction.member.permissions.has("MANAGE_MESSAGES")) return message.reply(":x: | Tu n'as pas la permission de faire sa !")
       var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("open-ticket")
                .setLabel(text_panel.buttons.open_ticket)
                .setStyle(text_panel.buttons.open_ticket_style)
            );
            const Ticketembed = new MessageEmbed()
                .setColor(text_panel.color)
                .setTitle(text_panel.title)
                .setDescription(`:flag_fr: En cas de problème. Vous pouvez ouvrir un ticket.
**~~                                                                                                                 ~~**
:flag_gb: If you are a problem. You can open a ticket.`)
                .setFooter({ text: text_panel.footer  });
            
            interaction.channel.send({ embeds: [Ticketembed], components: [row] });
            interaction.reply({content: "Embed Sended", ephemeral: true});

    }
}

module.exports = commandhelp