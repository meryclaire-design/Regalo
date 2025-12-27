const storyData = {
    // Storia 1: Serata Insieme Ideale
    "serata": {
        "title": "Serata Insieme",
        "description": "Immagina la nostra serata perfetta",
        "startNode": "inizio",
        "nodes": {
            "inizio": {
                "text": "Finalmente possiamo passare del tempo insieme. Cosa avresti voglia di fare?",
                "choices": [
                    { "text": "Ordiniamo qualcosa di buono ", "next": "ordinare" },
                    { "text": "Cuciniamo insieme con la musica ", "next": "cucinare" },
                    { "text": "Doccia calda insieme ", "next": "doccia" },
                    { "text": "Andiamo fuori a cena ", "next": "cenare_fuori" }
                ]
            },
            "ordinare": {
                "text": "Ottima idea! Non abbiamo voglia di cucinare. Cosa ordiniamo?",
                "choices": [
                    { "text": "Pizza!", "next": "film_pizza" },
                    { "text": "Sushi!", "next": "film_sushi" },
                    { "text": "Kebab!", "next": "film_kebab" }
                ]
            },
            "cucinare": {
                "text": "Mettiamo la nostra playlist preferita e ci mettiamo ai fornelli. Cosa prepariamo?",
                "choices": [
                    { "text": "Tortellini al ragù. Gnam gnam! ", "next": "cena_pronta" },
                    { "text": "Qualcosa di leggero e veloce (Abbiamo altro da fare più tardi eheh) ", "next": "cena_pronta" }
                ]
            },
            "doccia": {
                "text": "Il modo migliore per rilassarsi. Bagnate e profumate :)",
                "choices": [
                    { "text": "E poi pigiama e divano! ", "next": "divano" },
                    { "text": "E poi coccole a letto ", "next": "letto" }
                ]
            },
            "cenare_fuori": {
                "text": "Ottima idea! Iniziamo a preparaci e intanto scegliamo dove andare a mangiare. ",
                "choices": [
                    { "text": "Ristorante elegante ", "next": "ristorante_elegante" },
                    { "text": "Pub e hamburger ", "next": "pub" },
                    { "text": "Kebabbaro ", "next": "kebabbaro" }
                ]
            },
            "film_pizza": {
                "text": "La pizza è arrivata! Che film guardiamo mentre mangiamo? ",
                "choices": [
                    { "text": "Un cartone Disney ", "next": "cartone_Disney" },
                    { "text": "Una serie TV crime ", "next": "serie_TV_crime" },
                    { "text": "Una film dello studio Ghibli ", "next": "studio_Ghibli" },
                    { "text": "Una serie tv di magia e fantascienza ", "next": "serie_magica" }
                ]
            },
            "film_sushi": {
                "text": "Il sushi è arrivato! Che film guardiamo mentre mangiamo? ",
                "choices": [
                    { "text": "Un cartone Disney ", "next": "cartone_Disney" },
                    { "text": "Una serie TV crime ", "next": "serie_TV_crime" },
                    { "text": "Una film dello studio Ghibli ", "next": "studio_Ghibli" },
                    { "text": "Una serie tv di magia e fantascienza ", "next": "serie_magica" }
                ]
            },
            "film_kebab": {
                "text": "Il kebab è arrivato! Che film guardiamo mentre mangiamo? ",
                "choices": [
                    { "text": "Un cartone Disney ", "next": "cartone_Disney" },
                    { "text": "Una serie TV crime ", "next": "serie_TV_crime" },
                    { "text": "Una film dello studio Ghibli ", "next": "studio_Ghibli" },
                    { "text": "Una serie tv di magia e fantascienza ", "next": "serie_magica" }
                ]
            },
            "cena_pronta": {
                "text": "Siamo dei grandi chef. La cena è servita a lume di candela.",
                "choices": [
                    { "text": "Brindiamo a noi! ", "next": "divano" },
                    { "text": "Mangiamo velocemente. Il letto ci attende! ", "next": "letto" }
                ]
            },
            "divano": {
                "text": "Siamo sul divano, abbracciate sotto la copertina. È il momento perfetto. ",
                "choices": [
                    { "text": "Ci addormentiamo coccolati ", "next": "finale_nanna" },
                    { "text": "Chiacchieriamo fino a tardi ", "next": "finale_parole" }
                ]
            },
            "letto": {
                "text": "Siamo nel letto, abbracciate sotto la copertina. È il momento perfetto. ",
                "choices": [
                    { "text": "Ci addormentiamo coccolati ", "next": "finale_nanna" },
                    { "text": "La notte è lunga! Fa molto caldo nella camera da letto... ", "next": "finale_segreto" }
                ]
            },
            "ristorante_elegante": {
                "text": "Come ci siamo vestite per questa cena elegante?",
                "choices": [
                    { "text": "Vestito e completo ", "next": "pre_letto" },
                    { "text": "Casual ", "next": "pre_letto" }
                ]
            },
            "pub": {
                "text": "Cosa decidiamo di mangiare?",
                "choices": [
                    { "text": "Un buon panino con un sacco di patatine fritte ", "next": "siamo_sazie" },
                    { "text": "Una buona tagliata di carne e un sacco di insalata ", "next": "siamo_sazie" },
                    { "text": "Una delle due scelte precedenti + un sacco di antipasti da condividere", "next": "siamo_sazie" }
                ]
            },
            "kebabbaro": {
                "text": "Il kebab ha superato le nostre aspettative! Era buonissimo! Ne prendiamo un altro da condividere?",
                "choices": [
                    { "text": "Certo! Non c'è neanche bisogno di chiederlo", "next": "siamo_sazie" },
                    { "text": "Ordiniamo un'altra porzione di patatine fritte! ", "next": "siamo_sazie" }
                ]
            },
            "siamo_sazie": {
                "text": "Siamo sazie, ma vogliamo stare ancora un po' insieme. Ti va se andiamo a prendere qualcosa in un baretto carino?",
                "choices": [
                    { "text": "Sì, la ciccolata calda ci attende", "next": "finale_dolce" },
                    { "text": "Preferisco stare in macchina a parlare un po' insieme ", "next": "finale_dolce" }
                ]
            },
            "cartone_Disney": {
                "text": "Che cartone Disney scegliamo?",
                "choices": [
                    { "text": "Robin Hood", "next": "finale_dolce" },
                    { "text": "La bella e la bestia", "next": "finale_dolce" },
                    { "text": "Aladin", "next": "finale_dolce" },
                    { "text": "Lilli e il vagabondo", "next": "finale_dolce" },
                    { "text": "La carica dei 101", "next": "finale_dolce" }
                ]
            },
            "serie_TV_crime": {
                "text": "Che serie TV crime scegliamo?",
                "choices": [
                    { "text": "Una che faccia anche un po' paura", "next": "finale_intenso" },
                    { "text": "Una con dei fighi assurdi", "next": "finale_intenso" },
                    { "text": "Una ignorante proprio come piace a noi", "next": "finale_intenso" },
                    { "text": "Una che ci tenga sulle spine fino alla fine", "next": "finale_intenso" }
                ]
            },
            "studio_Ghibli": {
                "text": "Che film dello studio Ghibli scegliamo?",
                "choices": [
                    { "text": "La città incantata", "next": "finale_dolce" },
                    { "text": "Il mio vicino Totoro", "next": "finale_dolce" },
                    { "text": "Il castello errante di Howl", "next": "finale_dolce" },
                    { "text": "Porco Rosso", "next": "finale_dolce" },
                    { "text": "Arietty", "next": "finale_dolce" }
                ]
            },
            "serie_magica": {
                "text": "Che serie tv di magia scegliamo?",
                "choices": [
                    { "text": "Il mago di OZ", "next": "finale_magico" },
                    { "text": "Harry Potter", "next": "finale_magico" },
                    { "text": "The Witcher", "next": "finale_magico" },
                    { "text": "Il Signore degli Anelli", "next": "finale_magico" },
                    { "text": "Streghe", "next": "finale_magico" }
                ]
            },

            // Finali
            "finale_dolce": {
                "text": "La serata finisce con tanta dolcezza e bacini. ",
                "choices": [] // Nessuna scelta = fine
            },
            "finale_intenso": {
                "text": "Una serata fatta di suspense. Parliamo del film e lo commentiamo insieme! ",
                "choices": []
            },
            "finale_magico": {
                "text": "Siamo immerse in un mondo magico, e con tanta magia ci addormentiamo. ",
                "choices": []
            },
            "finale_nanna": {
                "text": "Le nanne ci raggiungono e ci addormentiamo abbracciate, proprio come piace a noi. ",
                "choices": []
            },
            "finale_segreto": {
                "text": "il resto della storia non è family friendly, non si può raccontare :)",
                "choices": []
            },
            "pre_letto": {
                "text": "Siamo troppo bone. Ci siamo mangiate con gli occhi tutta la sera. Una lunga notte ci attende! ",
                "choices": []
            }
        }
    },

    // Storia 2: Giornata Inverno Ideale
    "inverno": {
        "title": "Giornata d'Inverno",
        "description": "Fuori fa freddo, cosa facciamo?",
        "startNode": "risveglio",
        "nodes": {
            "risveglio": {
                "text": "È domenica mattina, fuori nevica e fa freddissimo. Noi siamo al calduccio sotto il piumone.",
                "choices": [
                    { "text": "Colazione a letto!", "next": "colazione" },
                    { "text": "Dormiamo ancora 5 minuti...", "next": "dormire" },
                    { "text": "Andiamo a fare un giro in montagna", "next": "montagna" }
                ]
            },
            "colazione": {
                "text": "Caffe latte e pancake per te. Una colazione da principessa! E ora?",
                "choices": [
                    { "text": "Maratona di film e serie tv", "next": "film_serie" },
                    { "text": "Altre coccole, per favoree", "next": "coccole" }
                ]
            },
            "dormire": {
                "text": "Quei 5 minuti sono diventate 3 ore... Si sono fatte le 12. Cosa facciamo?",
                "choices": [
                    { "text": "Prepariamo il pranzo insieme", "next": "cucinare" },
                    { "text": "Una cioccolata calda è tutto ciò che serve!", "next": "film_serie" }
                ]
            },
            "montagna": {
                "text": "Siamo arrivate in montagna. C'è un sacco di neve!",
                "choices": [
                    { "text": "Andiamo a berci una buona cioccolata calda", "next": "cioccolata" },
                    { "text": "Super battaglia di palle di neve in arrivoo", "next": "battaglia" }
                ]
            },
            "battaglia": {
                "text": "La battaglia è stata molto intensa. Fa molto freddo qui fuori. Ti va di cercare un posto caldino?",
                "choices": [
                    { "text": "Si, sarebbe bellissimo", "next": "cioccolata" },
                    { "text": "Torniamo a casa?", "next": "casa" }
                ]
            },
            "cioccolata": {
                "text": "La cioccolata era buonissima. Ora siamo più calde e ci riposiamo un po'",
                "choices": [
                    { "text": "Il nostro tavolino è proprio davanti al caminetto", "next": "casa" },
                ]
            },
            "casa": {
                "text": "Siamo tornate a casa. Dopo una doccia calda ci siamo addormentate abbracciate sul divano",
                "choices": [
                    { "text": "È stata una bellissima giornata", "next": "ritorno" },
                ]
            },
            "film_serie": {
                "text": "Il tempo è volato. Abbiamo mangiato e ora è pomeriggio. Cosa facciamo?",
                "choices": [
                    { "text": "Riserviamo due posti al cinema per la sera!", "next": "cinema" },
                    { "text": "Una doccia calda insieme ci starebbe proprio bene", "next": "doccia" }
                ]
            },
            "coccole": {
                "text": "Le coccole sono il miglior modo per ricaricare la batteria.",
                "choices": [
                    { "text": "Le coccole non sono mai abbastanza", "next": "cucinare" },
                ]
            },
            "cucinare": {
                "text": "È giunto il momento di pranzare",
                "choices": [
                    { "text": "Sei tu il mio pranzo :)", "next": "pomeriggio_intenso" },
                    { "text": "Sii, ho tanta fame", "next": "pranzo" }
                ]
            },
            "doccia": {
                "text": "La doccia è stata molto rilassante",
                "choices": [
                    { "text": "È durata più del previsto :)", "next": "pomeriggio_pieno" },
                    { "text": "Mi piace molto fare la doccia con te", "next": "pomeriggio_pieno" }
                ]
            },
            "cinema": {
                "text": "Il film è stato pazzesco. Bella scelta di film amore!",
                "choices": [
                    { "text": "Lo so, ho buon gusto :)", "next": "ritorno" },
                    { "text": "Puoi dirlo forte babby", "next": "ritorno" }
                ]
            },
            "pranzo": {
                "text": "Ti va di cucinare insieme a me?",
                "choices": [
                    { "text": "Si, mi piace cucinare con te", "next": "film_serie" },
                    { "text": "Ovvio, ti do una mano io!", "next": "film_serie" }
                ]
            },
            "pomeriggio_intenso": {
                "text": "Lo sapevo amore, ti piace proprio tanto starmi addosso. Come è finita la giornata lo sappiamo solo tu e io :) U ar my good girl baby",
                "choices": []
            },
            "pomeriggio_pieno": {
                "text": "Siamo tornate a farci altre coccole e ci siamo addormentate",
                "choices": []
            },
            "fine_giornata": {
                "text": "La giornata è finita, abbiamo vissuto di amore e caldino.",
                "choices": []
            },
            "ritorno": {
                "text": "È stata una giornata piena di emozione. Grazie per la bella giornata. Buonanotte amore :)",
                "choices": []
            }

        }
    },

    // Storia 3: Weekend Ideale
    "weekend": {
        "title": "Weekend Ideale",
        "description": "Scrivi il tuo weekend ideale.",
        "startNode": "scrivi_storia",
        "nodes": {
            "scrivi_storia": {
                "type": "text_input",
                "text": " Amoree! Finalmente abbiamo un weekend libero da passare insieme. Scrivi tutto ciò che vorresti fare in questi giorni, ma proprio tutto. Immagina e lasciati trasportare dalle emozioni.",
                "choices": []
            }
        }
    }
};
