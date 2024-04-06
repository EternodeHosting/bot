class commandre {
    constructor() {
        this.name = "say"
        this.description = "Envoyez un message en tant que bot"
        this.options = [
            { type: 'STRING', name: "msg", description: "Le message a envoyer", required: true },
        ]

    }

    async execute(interaction) {

        const msg = interaction.options.getString("msg")
        interaction.channel.send({content: msg})

        interaction.reply({ content: "Done !", ephemeral: true})

        

    }

}

module.exports = commandre