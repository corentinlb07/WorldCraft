const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("//");
const express = require('express');
const app = express();

//DEBUT PARAGRAPHE HEROKU
app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
    console.log(`bot en fonctionnement sur le port ${app.get('port')}`)
})


bot.on('ready', () => {
    bot.user.setPresence({game: { name: 'Faire des Embends pour les serveurs discords, merci de ne pas toucher à mes commandes', type: 0}})
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    
if ( message.author.id === '292263751372242944' ||  message.author.id === '335118921088630796' || message.author.id === '270265203269042188' || message.author.id ===  '205752580251451392' || message.author.id === '275283236169711616'|| message.author.id === '344061192903327744'){

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#D9F200')
        .addField("Commandes du bot !", " - //help : Affiche les commandes du bot !\n- //reglement : Affiche les commandes pour le règlement !\n- //attentepro : Pour l'attente sur le serveur WorldCraftPro !\n- //équipe-staff : Affiche les commandes pour l'Équipe du Staff !\n- //annonce : Affiche les commandes pour les annonces !")
        .setFooter("Cordialement, WorldCraftBot")
        message.channel.send(help_embed);
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + "reglement"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField("Règlement !", "- //reglement1 : Pour le règlement1 !\n- //reglement2 : Pour le règlement2 !\n- //reglement3 : Pour le règlement3 !\n- //reglement4 : Pour le règlement4 !\n- //reglement5 : Pour le règlement5 !\n- //reglement6 : Pour le règlement6 !")
        .setFooter("Cordialement, WorldCraftBot")
        message.channel.send(help_embed);
        console.log("Commande Règlement demandée !");
    }

    if (message.content === prefix + "annonce"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField("Annonce !", "- //annonce1 : Pour l'annonce1 !\n- //annonce2 : Pour l'annonce2 !\n- //annonce3 : Pour l'annonce3 !\n- //annonce4 : Pour l'annonce4 !\n- //annonce5 : Pour l'annonce5 !\n- //annonce6 : Pour l'annonce6 !\n- //annonce7 : Pour l'annonce7 !\n- //annonce8 : Pour l'annonce8 !\n- //annonce9 : Pour l'annonce9 !\n- //annonce10 : Pour l'annonce10 !\n- //annonce11 : Pour l'annonce11 !\n- //annonce12 : Pour l'annonce12 !\n- //annonce13 : Pour l'annonce13 !\n- //annonce14 : Pour l'annonce14 !\n- //annonce15 : Pour l'annonce15 !\n- //annonce16 : Pour l'annonce16 !\n- //annonce17 : Pour l'annonce17 !\n- //annonce18 : Pour l'annonce18 !\n- //annonce19 : Pour l'annonce19 !\n- //annonce20 : Pour l'annonce20 !")
        .setFooter("Cordialement, WorldCraftBot")
        message.channel.send(help_embed);
        console.log("Commande Règlement demandée !");
    }

    if (message.content === prefix + "équipe-staff"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField("Équipe staff !", "- //équipe-staff1 : Compositon !\n- //équipe-staff2 : Équipe des Fondateurs !\n- //équipe-staff3 : Équipe des Co-Fondateurs !\n- //équipe-staff4 : Équipe des Administrateurs !\n- //équipe-staff5 : Équipe des Super Modérateurs !\n- //équipe-staff6 : Équipe des Modérateurs !\n- //équipe-staff7 : Équipe des Helpers !\n- //équipe-staff8 : Équipe des Animateurs !\n- //équipe-staff9 : Équipe des Informaticiens !")
        .setFooter("Cordialement, WorldCraftBot")
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff demandée !");
    }



    if (message.content === prefix + "reglement1"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField(':first_quarter_moon_with_face:   **__Le Staff de WorldCraft souhaite la bienvenue aux nouveaux arrivant(e)s !__**',`Il est toujours agréable de profiter du savoir vivre de tous\nDe ce fait, il est impératif de respecter un certain nombre de règles sous peine d'être sanctionné en conséquence.`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Règlement1 demandée !");
    }

    if (message.content === prefix + "reglement2"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField(':speech_balloon:  **__~ Les salons textuels ~__**',`- Les images sont acceptées uniquement dans les salons appropriés.\n- Éviter d’employer le langage SMS à outrance.\n- Les insultes sont proscrites en dehors de toutes subtilités vis-à-vis de ses amis.\n- Le spam n'est pas toléré.\n- Tous les messages et Photos de profils à caractère pornographiques, pédophiles, haineux, homophobes, racistes sont strictement interdits et suivis d'un Ban.\n- Toute forme de harcèlement est totalement prohibé ..\n- Il est strictement interdit de soutirer des faveurs auprès d'autrui sous un faux genre féminin ou masculin.`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Règlement2 demandée !");
    }
    if (message.content === prefix + "reglement3"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField(':loudspeaker:   **__~ Les salons vocaux ~__**',`- Il est interdit de spam micro dans les salons vocaux.\n- Il est interdit de dénigrer gratuitement autrui.\n- Le salon musique est essentiellement réservé à l'écoute, le dialogue y est cependant autorisé, dans le plus grand des respects bien sûr.\n- Il est interdit de switch de salon de manière à "Troll"  par le biais d'une notification sonore répétée.`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Règlement3 demandée !");
    }

    if (message.content === prefix + "reglement4"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField(':flower_playing_cards:  **__~ Le salon medias partages ~__**',`- Il est interdit de poster des images de type pornographique, pédophile, haineuse, loly ou raciste sous peine d'un Ban.`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Règlement4 demandée !");
    }

    if (message.content === prefix + "reglement5"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField(':name_badge:  **__~ Le salon NSFW ~__**',`- Tout est autorisé hormis les règlements de comptes.\n- Il n'est pas nécessaire d'avoir un âge minimum, si ce n'est la présence d'un public averti.\n- Il est interdit de poster des Nudes de personnes potentiellement reconnaissables.`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Règlement5 demandée !");
    }

    if (message.content === prefix + "reglement6"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField(':globe_with_meridians:   **__~ Les règles concernant la publicité Vocale ou Textuelle ~__**',`- La publicité est autorisé dans <#374546816164954112> à partir du niveau 1 avec <@159985870458322944>.\n- Tout plublicité posé dans un autre salon ou dit en vocal sera sanctionné d'un Ban définitif.`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Règlement6 demandée !");
    }



    if (message.content === prefix + "attentepro"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**:white_small_square: __Bienvenue sur le WorldCraftPro [FR]!__**', `Sachant que mon serveur Discord est semi-publique, Vous devez attendre que je vous attribue un grade pour pouvoir profiter pleinement de mon serveur, si vous êtes kick, cela signifie que vous n'êtes pas la bienvenue.`,true)
        .setThumbnail(`https://media.discordapp.net/icons/339490139933769729/cbb2f2bd949497d81eeeeb43cab5a06b.jpg`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Comande AttentePro demandée !");
    }

    

    if (message.content === prefix + "équipe-staff1"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ffffff')
        .setTitle(`__Composition du staff de WorldCraft :__`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff1 demandée !");
    }

    if (message.content === prefix + "équipe-staff2"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**Fondateurs:**',`*Il est le fondateur du serveur. Il détient tous les droits et c’est à lui que revient de prendre des décisions importantes !*\n\n- <@292263751372242944>\n- <@394255380940849153> *> (Son deuxième compte)*`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff2 demandée !");
    }

    if (message.content === prefix + "équipe-staff3"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#007dce')
        .addField('**Co-Fondateurs:**',`*Ils s'occupent du serveur et sont avec Corentin, ils l'aident !*\n\n- <@335118921088630796>\n- <@312629594354352129>\n- <@270265203269042188>\n- <@283625708863881216>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff3 demandée !");
    }

    if (message.content === prefix + "équipe-staff4"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**Administrateurs:**', `*L'Administrateur est la personnes qui gère le serveur et s'occupe du serveur avec le Fondateur et les Co-Fondateurs !*\n\n- <@202373133255049216>\n- <@298052342597812226>\n- <@275283236169711616>\n- <@344061192903327744>\n- <@299202370909372416>\n- <@273498784749584384>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff4 demandée !");
    }

    if (message.content === prefix + "équipe-staff5"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0058')
        .addField('**Super-Modérateurs:**', `*Le Super Modérateur a tout comme les Administrateurs sauf qu'il n'est pas Administrateur, il aide tout le monde, et gère un peu !*\n\n- <@215634007306534912>\n- <@337162749002121216>\n- <@372414268022456324>\n- <@326768209346822144>\n- <@289098800784736257>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff5 demandée !");
    }

    if (message.content === prefix + "équipe-staff6"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0058')
        .addField('**Modérateurs:**', `*Le Modérateur veille au bon fonctionnement du serveur en faisant appliquer le règlement aux membres. Il repère les infractions au règlement et sanctionne !*\n\n- <@315537499667562509>\n- <@185029227274305537>\n- <@361414130512691200>\n- <@339343230833262592>\n- <@336213926075432960>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff6 demandée !");
    }

    if (message.content === prefix + "équipe-staff7"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#35d428')
        .addField('**Helpers:**', `*L'Helper est la personne qui aide les nouveaux qui arrivent et qui les accueils !*\n\n- <@339804940056920064>\n- <@349126928986406922>\n- <@343738868194869259>\n- <@285174107384053762>\n- <@310775130169278466>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff7 demandée !");
    }

    if (message.content === prefix + "équipe-staff8"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField('**Animateurs:**', `Un Animateur est une personne en charge de l’animation du serveur !\n\n- <@331427240976056350>\n- <@358358702589345793>\n- <@358321616763092993>\n- <@305257712244097024>\n- <@390488921865453569>\n- <@280311767391928320>\n- <@275221045567553536>\n- <@327842691054305291>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff8 demandée !");
    }

    if (message.content === prefix + "équipe-staff9"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#6f1600')
        .addField('**Informaticiens:**', `Un informaticien doit être fort dans l'informatique pour pouvoir avancez avec les bots !\n\n- <@299143561486532608>\n- <@277543510079438848>\n- <@300910791362740224>\n- <@283144121718276096>\n- <@322204816925392897>\n- <@165878519107289088>\n- <@345196563582287872>\n- <@294157497621544961>\n- <@314388044235145216>\n- <@334954224544776194>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-Staff9 demandée !");
    }

    if (message.content === prefix + "annonce1"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `*Site pour postuler en tant que :*\n→ <@&348234048306413579> : <https://goo.gl/forms/8AlUqXS9WACmkUx52>\n→ <@&348234338858565643> : <https://goo.gl/forms/WqhQDAcDOBnf1BBA3>\n→ <@&348233755900772360> : <https://goo.gl/forms/xa6Ji8ctn2LlwEDJ2>\n*→ Pour les candidatures, Merci de me mp quand vous avez postulez*`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce1 demandée !");
    }

    if (message.content === prefix + "annonce2"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `*Les levels se font avec <@159985870458322944>, Pour augmenter en levels, il faut être actif sur le chat et discuter avec les membres, un message = entre 15 et 25 xp, vous ne pouvez recevoir de l'xp qu'une fois par minute.*\nPour connaitre votre level sur le serveur, tapez : !rank dans <#365097421782384640>.\nPour connaitre le classement du serveur, tapez : !levels dans <#365097421782384640>.`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce2 demandée !");
    }

    if (message.content === prefix + "annonce3"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#007dce')
        .addField('**[MISE À JOUR]**', `*Dès que vous avez 1 level avec <@159985870458322944>, vous pouvez pub dans le salon <#374546816164954112>*`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce3 demandée !");
    }

    if (message.content === prefix + "annonce4"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `*Nous recherchons des <@&348234493162815508>, des <@&352716110673477634>, des <@&348234529506459671> et des <@&356488086969909251> Merci de me mp*`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce4 demandée !");
    }

    if (message.content === prefix + "annonce5"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `Pour le grade <@&348234560355696661> il faut :\n- Avoir une image de profil personnalisée sur YouTube,\n- Sortir un minimum de vidéos sur YouTube,\n- Avoir sorti une vidéo sur WorldCraft,\n- Avoir 175 Abonnés.\nEt Après ça merci de dire à <@292263751372242944>*`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce5 demandée !");
    }

    if (message.content === prefix + "annonce6"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**[ANNONCE]**', `PayPal de WorldCraft : https://www.paypal.me/worldcraftofficiel`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce6 demandée !");
    }

    if (message.content === prefix + "annonce7"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**[ANNONCE]**', `Ouverture de la boutique de vêtement : https://shop.spreadshirt.fr/WorldCraftOfficiel`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce7 demandée !");
    }

    if (message.content === prefix + "annonce8"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `Soyons clairs : votre invitation doit être bien écrite c'est-à-dire sans faute, des retours à la ligne etc... (regardez les autres pour vous inspirez pas plagier) il faut une description (pas de "si vous aimez les jeux vidéos venez). Il également un slowmode, cela ne sert à rien de s'énerver si votre message et supprimer directement.\nDe plus, ce salon n'est pas un salon de discussion.\nPour <#374546816164954112>\nJe vous invite à également parler dans <#348545670388383744> pour éviter le mute dans <#374546816164954112>`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce8 demandée !");
    }

    if (message.content === prefix + "annonce9"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `Un bot akinator est désormais disponible sur <#383892401380392961>`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce9 demandée !");
    }

    if (message.content === prefix + "annonce10"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**[MISE À JOUR]**', `Rejoignez : https://discord.gg/x9r3ABU\nC'est le serveur WorldCraft`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce10 demandée !");
    }

    if (message.content === prefix + "annonce11"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**[ANNONCE]**', `Nous vous rappelons que la liste des sanctions est disponible à l'URL suivant, et que la durée est donnée à titre indicatif : https://officielworldcraft.wixsite.com/worldcraft/liste-des-sanctions`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce11 demandée !");
    }

    if (message.content === prefix + "annonce12"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `Voici le nouveau forum : http://worldcraft.livehost.fr/ Merci de vous inscrire dessus :wink:`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce12 demandée !");
    }

    if (message.content === prefix + "annonce13"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `Le rôle Sponsor est disponible pour tout le monde !\nPour obtenir ce rôle, il faut :\n-Être abonné à la chaîne de WorldCraft\n-Suivre notre Twitter\n-Et payer 2.50€\n\nLes fonctionnalité en plus quand on a le rôle Sponsor :\n2500 Coins dans votre première connexion du serveur Minecraft WorldCraft!\n\nDes fonctionnalités disponible en beta en avance!\nDes petits bonus dans le serveur Minecraft à chaque connexion !\nVous pourrez aussi tester des mini-jeux du serveur en avance!\n\nNous espérons que vous allez acheter ce grade!\n\n(Pour avoir le rôle, mp Corentin ou alors, Piikaa)`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce13 demandée !");
    }

    if (message.content === prefix + "annonce14"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#60bfff')
        .addField('**[ANNONCE]**', `AJOUTER MOI VITE SUR SNAP, JE VOUS AJOUTE SUR LE GROUPE DE WORLDCRAFT\nLE LIEN : https://www.snapchat.com/add/corentinlb07\nNom d'utilisateur : corentinlb07\nDites moi que vous voulez rejoindre le groupe`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce14 demandée !");
    }

    if (message.content === prefix + "annonce15"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**[ANNONCE]**', `Ajout d'un formualire de satisfaction.\nLe Lien : https://goo.gl/forms/qI1tTf7NKvdNP87s1`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce15 demandée !");
    }

    if (message.content === prefix + "annonce16"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**[ANNONCE]**', `Pour les partenariats : https://goo.gl/forms/IzS1pyuUeUG2bWu02`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Annonce16 demandée !");
    }

    if (message.content === prefix + "annonce17"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#007dce')
        .addField('**[MISE À JOUR]**', `*Nouveauté les <@&348234493162815508> vous pouvez faire un @here dans le salon <#374546816164954112> mais vous devez parler sinon nous allons retirer votre grade : <@&348234493162815508>*`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Comande Annonce17 demandée !");
    }

    if (message.content === prefix + "annonce18"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('**[MISE À JOUR]**', `*Si vous pubez en message privé, vous serez mute 7jours sur WorldCraft. Si vous avez été mute 3fois sur WordCraft, c'est le ban définitif !*`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Comande Annonce18 demandée !");
    }
    
    if (message.content === prefix + "annonce19"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField("**[MISE À JOUR]**", "*Ajout d'un compte Instagram pour WorldCraft !\n\n worldcraftoffi*")
        message.channel.send(help_embed);
        console.log("Commande Annonce19 demandée !");
    }
    
    if (message.content === prefix + "annonce20"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField("**[MISE À JOUR]**", "*J'ai créer un serveur de BackUp si jamais ce serveur venait à se faire hack.\nVoilà le lien : <https://discord.gg/YHSHP5Q>*")
        message.channel.send(help_embed);
        console.log("Commande Annonce20 demandée !");
    }
    
    if (message.content === prefix + "annonce21"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField("**[MISE À JOUR]**", "*Bonjour, nous avons le plaisir de vous dire que **WorldCraft [FR]** à une Entreprise voici le lien :  <https://discord.gg/9tZJA4C>*")
        message.channel.send(help_embed);
        console.log("Commande Annonce21 demandée !");
    }
    
    if (message.content === prefix + "annonce22"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#38e66a')
        .addField("**[ANNONCE]**", "Pour le grade YouTubeurs, demander à <@372414268022456324>, si vous avez plus de 100abonnés.")
        .setFooter("Cordialement, Keirua")
        message.channel.send(help_embed);
        console.log("Commande Annonce22 demandée !");
    }


    if (message.content === prefix + "eventjeu"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff5600')
        .addField('**__Spéciale Event Jeu de WorldCraftStaff [FR]!__**', `Nouveau jeu!\nVous allez sur le lien : https://goo.gl/forms/RsnIy6neeaUg8gi92\nVous entrez votre pseudo discord, votre e-mail et aussi un code,\n__un code entre 0000 et 9999__.\n**__Pas plus d'une participation par personnes sinon votre jeu est bloqué!__**\n*Je ferais un tirage au sort en vocal le __samedi 21 janvier vers 15h00__*`)
        .setThumbnail(`https://media.discordapp.net/icons/339490139933769729/cbb2f2bd949497d81eeeeb43cab5a06b.jpg`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Comande EventJeu demandée !");
    }

    if (message.content === prefix + "eventconcert"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#ff5600')
        .addField('**__Event-Concert de WorldCraftStaff [FR]!__**', `*Event des vacances de Noël et du nouvel an :\nConcert !\nPour vous inscrire, je te passe le lien : https://goo.gl/forms/DqaOV3wpEz8bEU6s2*`)
        .setThumbnail(`https://media.discordapp.net/icons/339490139933769729/cbb2f2bd949497d81eeeeb43cab5a06b.jpg`)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Comande Event-Concert demandée !");
    }

    if (message.content === prefix + "séparation"){
        var help_embed= new Discord.RichEmbed()
        .setThumbnail(`https://cdn.discordapp.com/attachments/385498923378278400/401670885758730241/Separation.png`)
        new Discord.RichEmbed()
        message.channel.sendEmbed(help_embed);
        console.log("Comande Séparation demandée !");
    }

    if (message.content === prefix + "équipe-staffentreprise1"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#007dce')
        .addField('**Co-Fondateurs:**', `Ils s'occupent du serveur et sont avec Corentin, ils l'aident !*\n\n- <@344061192903327744>\n- <@335118921088630796>\n- <@270265203269042188>\n- <@205752580251451392>\n- <@283625708863881216>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-StaffEntreprise1 demandée !");
    }

    if (message.content === prefix + "équipe-staffentreprise2"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#007dce')
        .addField('**Administrateurs:**', `*L'Administrateur est la personnes qui gère le serveur et s'occupe du serveur avec le Fondateur et les Co-Fondateurs !*\n\n- <@202373133255049216>\n- <@298052342597812226>\n- <@275283236169711616>\n- <@344061192903327744>\n- <@299202370909372416>\n- <@273498784749584384>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-StaffEntreprise2 demandée !");
    }

    if (message.content === prefix + "équipe-staffentreprise3"){
        var help_embed= new Discord.RichEmbed()
        .setColor('#007dce')
        .addField('**Staff:**', `*Tous les autres !*\n\n- <@202373133255049216>\n- <@298052342597812226>\n- <@275283236169711616>\n- <@344061192903327744>\n- <@299202370909372416>\n- <@273498784749584384>`,true)
        new Discord.RichEmbed()
        message.channel.send(help_embed);
        console.log("Commande Équipe-StaffEntreprise3 demandée !");
    }

}});
