var va = ["", "", "", "", "", "", "", "", ""]; //sampler 

var verbs = [
    [ // 1. etre - be
        ["be", "am", "are", "is", "is", "are", "are", "are", "are"],
        ["etre", "suis", "es", "est", "est", "sommes", "etes", "sont", "sont"],
        ["n'etre pas", "ne suis pas", "n'es pas", "n'est pas", "n'est pas", "ne sommes pas", "n'etes pas", "ne sont pas", "ne sont pas"]
    ],
    [ // 2. avoir - have
        ["have", "have", "have", "has", "has", "have", "have", "have", "have"],
        ["avoir", "ai", "as", "a", "a", "avons", "avez", "ont", "ont"],
        ["n'avoir pas", "n'ai pas", "n'as pas", "n'a pas", "n'a pas", "n'avons pas", "n'avez pas", "n'ont pas", "n'ont pas"]
    ],
    [ // 3. aller - go
        ["go", "go", "go", "goes", "goes", "go", "go", "go", "go"],
        ["aller", "vais", "vas", "va", "va", "allons", "allez", "vont", "vont"],
        ["n'aller pas", "ne vais pas", "ne vas pas", "ne va pas", "ne va pas", "n'allons pas", "n'allez pas", "ne vont pas", "ne vont pas"]
    ],
    [ // 4. venir - come
        ["come", "come", "come", "comes", "comes", "come", "come", "come", "come"],
        ["venir", "viens", "viens", "vient", "vient", "venons", "venez", "viennent", "viennent"],
        ["ne venir pas", "ne viens pas", "ne viens pas", "ne vient pas", "ne vient pas", "ne venons pas", "ne venez pas", "ne viennent pas", "ne viennent pas"]
    ],
    [ // 5. vouloir - want
        ["want", "want", "want", "wants", "wants", "want", "want", "want", "want"],
        ["vouloir", "veux", "veux", "veut", "veut", "voulons", "voulez", "veulent", "veulent"],
        ["ne vouloir pas", "ne veux pas", "ne veux pas", "ne veut pas", "ne veut pas", "ne voulons pas", "ne voulez pas", "ne veulent pas", "ne veulent pas"]
    ],
    [ // 6. pouvoir - can
        ["can", "can", "can", "can", "can", "can", "can", "can", "can"],
        ["pouvoir", "peux", "peux", "peut", "peut", "pouvons", "pouvez", "peuvent", "peuvent"],
        ["ne pouvoir pas", "ne peux pas", "ne peux pas", "ne peut pas", "ne peut pas", "ne pouvons pas", "ne pouvez pas", "ne peuvent pas", "ne peuvent pas"]
    ],
    [ // 7. devoir - must
        ["must", "must", "must", "must", "must", "must", "must", "must", "must"],
        ["devoir", "dois", "dois", "doit", "doit", "devons", "devez", "doivent", "doivent"],
        ["ne devoir pas", "ne dois pas", "ne dois pas", "ne doit pas", "ne doit pas", "ne devons pas", "ne devez pas", "ne doivent pas", "ne doivent pas"]
    ],
    [ // 8. prendre - take
        ["take", "take", "take", "takes", "takes", "take", "take", "take", "take"],
        ["prendre", "prends", "prends", "prend", "prend", "prenons", "prenez", "prennent", "prennent"],
        ["ne prendre pas", "ne prends pas", "ne prends pas", "ne prend pas", "ne prend pas", "ne prenons pas", "ne prenez pas", "ne prennent pas", "ne prennent pas"]
    ],
    [ // 9. apprendre - learn
        ["learn", "learn", "learn", "learns", "learns", "learn", "learn", "learn", "learn"],
        ["apprendre", "apprends", "apprends", "apprend", "apprend", "apprenons", "apprenez", "apprennent", "apprennent"],
        ["ne apprendre pas", "n'apprends pas", "n'apprends pas", "n'apprend pas", "n'apprend pas", "n'apprenons pas", "n'apprenez pas", "n'apprennent pas", "n'apprennent pas"]
    ],
    [ // 10. faire - do
        ["do", "do", "do", "does", "does", "do", "do", "do", "do"],
        ["faire", "fais", "fais", "fait", "fait", "faisons", "faites", "font", "font"],
        ["ne faire pas", "ne fais pas", "ne fais pas", "ne fait pas", "ne fait pas", "ne faisons pas", "ne faites pas", "ne font pas", "ne font pas"]
    ],
    [ // 11. écrire - write
        ["write", "write", "write", "writes", "writes", "write", "write", "write", "write"],
        ["écrire", "écris", "écris", "écrit", "écrit", "écrivons", "écrivez", "écrivent", "écrivent"],
        ["ne écrire pas", "n'écris pas", "n'écris pas", "n'écrit pas", "n'écrit pas", "n'écrivons pas", "n'écrivez pas", "n'écrivent pas", "n'écrivent pas"]
    ],
    [ // 12. voir - see
        ["see", "see", "see", "sees", "sees", "see", "see", "see", "see"],
        ["voir", "vois", "vois", "voit", "voit", "voyons", "voyez", "voient", "voient"],
        ["ne voir pas", "ne vois pas", "ne vois pas", "ne voit pas", "ne voit pas", "ne voyons pas", "ne voyez pas", "ne voient pas", "ne voient pas"]
    ],
    [ // 13. parler - speak
        ["speak", "speak", "speak", "speaks", "speaks", "speak", "speak", "speak", "speak"],
        ["parler", "parle", "parles", "parle", "parle", "parlons", "parlez", "parlent", "parlent"],
        ["ne parler pas", "ne parle pas", "ne parles pas", "ne parle pas", "ne parle pas", "ne parlons pas", "ne parlez pas", "ne parlent pas", "ne parlent pas"]
    ],
    [ // 14. manger - eat
        ["eat", "eat", "eat", "eats", "eats", "eat", "eat", "eat", "eat"],
        ["manger", "mange", "manges", "mange", "mange", "mangeons", "mangez", "mangent", "mangent"],
        ["ne manger pas", "ne mange pas", "ne manges pas", "ne mange pas", "ne mange pas", "ne mangeons pas", "ne mangez pas", "ne mangent pas", "ne mangent pas"]
    ],
    [ // 15. commencer - start
        ["start", "start", "start", "starts", "starts", "start", "start", "start", "start"],
        ["commencer", "commence", "commences", "commence", "commence", "commençons", "commencez", "commencent", "commencent"],
        ["ne commencer pas", "ne commence pas", "ne commences pas", "ne commence pas", "ne commence pas", "ne commençons pas", "ne commencez pas", "ne commencent pas", "ne commencent pas"]
    ],
    [ // 16. finir - finish
        ["finish", "finish", "finish", "finishes", "finishes", "finish", "finish", "finish", "finish"],
        ["finir", "finis", "finis", "finit", "finit", "finissons", "finissez", "finissent", "finissent"],
        ["ne finir pas", "ne finis pas", "ne finis pas", "ne finit pas", "ne finit pas", "ne finissons pas", "ne finissez pas", "ne finissent pas", "ne finissent pas"]
    ],
    [ // 17. attendre - wait
        ["wait", "wait", "wait", "waits", "waits", "wait", "wait", "wait", "wait"],
        ["attendre", "attends", "attends", "attend", "attend", "attendons", "attendez", "attendent", "attendent"],
        ["ne attendre pas", "n'attends pas", "n'attends pas", "n'attend pas", "n'attend pas", "n'attendons pas", "n'attendez pas", "n'attendent pas", "n'attendent pas"]
    ],
    [ // 18. aimer - like
        ["like", "like", "like", "likes", "likes", "like", "like", "like", "like"],
        ["aimer", "aime", "aimes", "aime", "aime", "aimons", "aimez", "aiment", "aiment"],
        ["ne aimer pas", "n'aime pas", "n'aimes pas", "n'aime pas", "n'aime pas", "n'aimons pas", "n'aimez pas", "n'aiment pas", "n'aiment pas"]
    ],
    [ // 19. jouer - play
        ["play", "play", "play", "plays", "plays", "play", "play", "play", "play"],
        ["jouer", "joue", "joues", "joue", "joue", "jouons", "jouez", "jouent", "jouent"],
        ["ne jouer pas", "ne joue pas", "ne joues pas", "ne joue pas", "ne joue pas", "ne jouons pas", "ne jouez pas", "ne jouent pas", "ne jouent pas"]
    ],
    [ // 20. ouvrir - open
        ["open", "open", "open", "opens", "opens", "open", "open", "open", "open"],
        ["ouvrir", "ouvre", "ouvres", "ouvre", "ouvre", "ouvrons", "ouvrez", "ouvrent", "ouvrent"],
        ["ne ouvrir pas", "n'ouvre pas", "n'ouvres pas", "n'ouvre pas", "n'ouvre pas", "n'ouvrons pas", "n'ouvrez pas", "n'ouvrent pas", "n'ouvrent pas"]
    ],
    [ // 21. vivre - live
        ["live", "live", "live", "lives", "lives", "live", "live", "live", "live"],
        ["vivre", "vis", "vis", "vit", "vit", "vivons", "vivez", "vivent", "vivent"],
        ["ne vivre pas", "ne vis pas", "ne vis pas", "ne vit pas", "ne vit pas", "ne vivons pas", "ne vivez pas", "ne vivent pas", "ne vivent pas"]
    ],
    [ // 22. courir - run
        ["run", "run", "run", "runs", "runs", "run", "run", "run", "run"],
        ["courir", "cours", "cours", "court", "court", "courons", "courez", "courent", "courent"],
        ["ne courir pas", "ne cours pas", "ne cours pas", "ne court pas", "ne court pas", "ne courons pas", "ne courez pas", "ne courent pas", "ne courent pas"]
    ],
    [ // 23. vendre - sell
        ["sell", "sell", "sell", "sells", "sells", "sell", "sell", "sell", "sell"],
        ["vendre", "vends", "vends", "vend", "vend", "vendons", "vendez", "vendent", "vendent"],
        ["ne vendre pas", "ne vends pas", "ne vends pas", "ne vend pas", "ne vend pas", "ne vendons pas", "ne vendez pas", "ne vendent pas", "ne vendent pas"]
    ],
    [ // 24. attendre - wait
        ["wait", "wait", "wait", "waits", "waits", "wait", "wait", "wait", "wait"],
        ["attendre", "attends", "attends", "attend", "attend", "attendons", "attendez", "attendent", "attendent"],
        ["ne attendre pas", "n'attends pas", "n'attends pas", "n'attend pas", "n'attend pas", "n'attendons pas", "n'attendez pas", "n'attendent pas", "n'attendent pas"]
    ],
    [ // 25. recevoir - receive
        ["receive", "receive", "receive", "receives", "receives", "receive", "receive", "receive", "receive"],
        ["recevoir", "reçois", "reçois", "reçoit", "reçoit", "recevons", "recevez", "reçoivent", "reçoivent"],
        ["ne recevoir pas", "ne reçois pas", "ne reçois pas", "ne reçoit pas", "ne reçoit pas", "ne recevons pas", "ne recevez pas", "ne reçoivent pas", "ne reçoivent pas"]
    ],
    [ // 26. savoir - know
        ["know", "know", "know", "knows", "knows", "know", "know", "know", "know"],
        ["savoir", "sais", "sais", "sait", "sait", "savons", "savez", "savent", "savent"],
        ["ne savoir pas", "ne sais pas", "ne sais pas", "ne sait pas", "ne sait pas", "ne savons pas", "ne savez pas", "ne savent pas", "ne savent pas"]
    ],
    [ // 27. sortir - go out
        ["go out", "go out", "go out", "goes out", "goes out", "go out", "go out", "go out", "go out"],
        ["sortir", "sors", "sors", "sort", "sort", "sortons", "sortez", "sortent", "sortent"],
        ["ne sortir pas", "ne sors pas", "ne sors pas", "ne sort pas", "ne sort pas", "ne sortons pas", "ne sortez pas", "ne sortent pas", "ne sortent pas"]
    ],
    [ // 28. choisir - choose
        ["choose", "choose", "choose", "chooses", "chooses", "choose", "choose", "choose", "choose"],
        ["choisir", "choisis", "choisis", "choisit", "choisit", "choisissons", "choisissez", "choisissent", "choisissent"],
        ["ne choisir pas", "ne choisis pas", "ne choisis pas", "ne choisit pas", "ne choisit pas", "ne choisissons pas", "ne choisissez pas", "ne choisissent pas", "ne choisissent pas"]
    ],
    [ // 29. répondre - reply
        ["reply", "reply", "reply", "replies", "replies", "reply", "reply", "reply", "reply"],
        ["répondre", "réponds", "réponds", "répond", "répond", "répondons", "répondez", "répondent", "répondent"],
        ["ne répondre pas", "ne réponds pas", "ne réponds pas", "ne répond pas", "ne répond pas", "ne répondons pas", "ne répondez pas", "ne répondent pas", "ne répondent pas"]
    ],
    [ // 30. courir - run
        ["run", "run", "run", "runs", "runs", "run", "run", "run", "run"],
        ["courir", "cours", "cours", "court", "court", "courons", "courez", "courent", "courent"],
        ["ne courir pas", "ne cours pas", "ne cours pas", "ne court pas", "ne court pas", "ne courons pas", "ne courez pas", "ne courent pas", "ne courent pas"]
    ],
    [ // 31. dormir - sleep
        ["sleep", "sleep", "sleep", "sleeps", "sleeps", "sleep", "sleep", "sleep", "sleep"],
        ["dormir", "dors", "dors", "dort", "dort", "dormons", "dormez", "dorment", "dorment"],
        ["ne dormir pas", "ne dors pas", "ne dors pas", "ne dort pas", "ne dort pas", "ne dormons pas", "ne dormez pas", "ne dorment pas", "ne dorment pas"]
    ],
    [ // 32. écrire - write
        ["write", "write", "write", "writes", "writes", "write", "write", "write", "write"],
        ["écrire", "écris", "écris", "écrit", "écrit", "écrivons", "écrivez", "écrivent", "écrivent"],
        ["ne écrire pas", "n'écris pas", "n'écris pas", "n'écrit pas", "n'écrit pas", "n'écrivons pas", "n'écrivez pas", "n'écrivent pas", "n'écrivent pas"]
    ],
    [ // 33. lire - read
        ["read", "read", "read", "reads", "reads", "read", "read", "read", "read"],
        ["lire", "lis", "lis", "lit", "lit", "lisons", "lisez", "lisent", "lisent"],
        ["ne lire pas", "ne lis pas", "ne lis pas", "ne lit pas", "ne lit pas", "ne lisons pas", "ne lisez pas", "ne lisent pas", "ne lisent pas"]
    ],
    [ // 34. boire - drink
        ["drink", "drink", "drink", "drinks", "drinks", "drink", "drink", "drink", "drink"],
        ["boire", "bois", "bois", "boit", "boit", "buvons", "buvez", "boivent", "boivent"],
        ["ne boire pas", "ne bois pas", "ne bois pas", "ne boit pas", "ne boit pas", "ne buvons pas", "ne buvez pas", "ne boivent pas", "ne boivent pas"]
    ],
    [ // 35. devoir - must
        ["must", "must", "must", "must", "must", "must", "must", "must", "must"],
        ["devoir", "dois", "dois", "doit", "doit", "devons", "devez", "doivent", "doivent"],
        ["ne devoir pas", "ne dois pas", "ne dois pas", "ne doit pas", "ne doit pas", "ne devons pas", "ne devez pas", "ne doivent pas", "ne doivent pas"]
    ]
];


/*
var verbs = [
    [],
    [ // 1. etre - be
        ["be", "am", "are", "is", "is", "are", "are", "are", "are"],
        ["etre", "suis", "es", "est", "est", "sommes", "etes", "sont", "sont"]
    ],
    [ // 2. avoir - have
        ["have", "have", "have", "has", "has", "have", "have", "have", "have"],
        ["avoir", "ai", "as", "a", "a", "avons", "avez", "ont", "ont"]
    ],
    [ // 3. aller - go
        ["go", "go", "go", "goes", "goes", "go", "go", "go", "go"],
        ["aller", "vais", "vas", "va", "va", "allons", "allez", "vont", "vont"]
    ],
    [ // 4. venir - come
        ["come", "come", "come", "comes", "comes", "come", "come", "come", "come"],
        ["venir", "viens", "viens", "vient", "vient", "venons", "venez", "viennent", "viennent"]
    ],
    [ // 5. vouloir - want
        ["want", "want", "want", "wants", "wants", "want", "want", "want", "want"],
        ["vouloir", "veux", "veux", "veut", "veut", "voulons", "voulez", "veulent", "veulent"]
    ],
    [ // 6. pouvoir - can
        ["can", "can", "can", "can", "can", "can", "can", "can", "can"],
        ["pouvoir", "peux", "peux", "peut", "peut", "pouvons", "pouvez", "peuvent", "peuvent"]
    ],
    [ // 7. devoir - must
        ["must", "must", "must", "must", "must", "must", "must", "must", "must"],
        ["devoir", "dois", "dois", "doit", "doit", "devons", "devez", "doivent", "doivent"]
    ],
    [ // 8. prendre - take
        ["take", "take", "take", "takes", "takes", "take", "take", "take", "take"],
        ["prendre", "prends", "prends", "prend", "prend", "prenons", "prenez", "prennent", "prennent"]
    ],
    [ // 9. apprendre - learn
        ["learn", "learn", "learn", "learns", "learns", "learn", "learn", "learn", "learn"],
        ["apprendre", "apprends", "apprends", "apprend", "apprend", "apprenons", "apprenez", "apprennent", "apprennent"]
    ],
    [ // 10. faire - do
        ["do", "do", "do", "does", "does", "do", "do", "do", "do"],
        ["faire", "fais", "fais", "fait", "fait", "faisons", "faites", "font", "font"]
    ],
    [ // 11. écrire - write
        ["write", "write", "write", "writes", "writes", "write", "write", "write", "write"],
        ["ecrire", "ecris", "ecris", "ecrit", "ecrit", "ecrivons", "ecrivez", "ecrivent", "ecrivent"]
    ],
    [ // 12. voir - see
        ["see", "see", "see", "sees", "sees", "see", "see", "see", "see"],
        ["voir", "vois", "vois", "voit", "voit", "voyons", "voyez", "voient", "voient"]
    ],
    [ // 13. parler - speak
        ["speak", "speak", "speak", "speaks", "speaks", "speak", "speak", "speak", "speak"],
        ["parler", "parle", "parles", "parle", "parle", "parlons", "parlez", "parlent", "parlent"]
    ],
    [ // 14. manger - eat
        ["eat", "eat", "eat", "eats", "eats", "eat", "eat", "eat", "eat"],
        ["manger", "mange", "manges", "mange", "mange", "mangeons", "mangez", "mangent", "mangent"]
    ],
    [ // 15. commencer - start
        ["start", "start", "start", "starts", "starts", "start", "start", "start", "start"],
        ["commencer", "commence", "commences", "commence", "commence", "commençons", "commencez", "commencent", "commencent"]
    ],
    [ // 16. finir - finish
        ["finish", "finish", "finish", "finishes", "finishes", "finish", "finish", "finish", "finish"],
        ["finir", "finis", "finis", "finit", "finit", "finissons", "finissez", "finissent", "finissent"]
    ],
    [ // 17. choisir - choose
        ["choose", "choose", "choose", "chooses", "chooses", "choose", "choose", "choose", "choose"],
        ["choisir", "choisis", "choisis", "choisit", "choisit", "choisissons", "choisissez", "choisissent", "choisissent"]
    ],
    [ // 18. remplir - fill
        ["fill", "fill", "fill", "fills", "fills", "fill", "fill", "fill", "fill"],
        ["remplir", "remplis", "remplis", "remplit", "remplit", "remplissons", "remplissez", "remplissent", "remplissent"]
    ],
    [ // 19. lire - read
        ["read", "read", "read", "reads", "reads", "read", "read", "read", "read"],
        ["lire", "lis", "lis", "lit", "lit", "lisons", "lisez", "lisent", "lisent"]
    ],
    [ // 20. voyager - travel
        ["travel", "travel", "travel", "travels", "travels", "travel", "travel", "travel", "travel"],
        ["voyager", "voyage", "voyages", "voyage", "voyage", "voyageons", "voyagez", "voyagent", "voyagent"]
    ],
    [ // 21. attendre - wait
        ["wait", "wait", "wait", "waits", "waits", "wait", "wait", "wait", "wait"],
        ["attendre", "attends", "attends", "attend", "attend", "attendons", "attendez", "attendent", "attendent"]
    ],
    [ // 22. dire - say
        ["say", "say", "say", "says", "says", "say", "say", "say", "say"],
        ["dire", "dis", "dis", "dit", "dit", "disons", "dites", "disent", "disent"]
    ],
    [ // 23. sortir - go out
        ["go out", "go out", "go out", "goes out", "goes out", "go out", "go out", "go out", "go out"],
        ["sortir", "sors", "sors", "sort", "sort", "sortons", "sortez", "sortent", "sortent"]
    ],
    [ // 24. savoir - know
        ["know", "know", "know", "knows", "knows", "know", "know", "know", "know"],
        ["savoir", "sais", "sais", "sait", "sait", "savons", "savez", "savent", "savent"]
    ],
    [ // 25. se lever - get up
        ["get up", "get up", "get up", "gets up", "gets up", "get up", "get up", "get up", "get up"],
        ["se lever", "me leve", "te leves", "se leve", "se leve", "nous levons", "vous levez", "se levent", "se levent"]
    ],
    [ // 26. partir - leave
        ["leave", "leave", "leave", "leaves", "leaves", "leave", "leave", "leave", "leave"],
        ["partir", "pars", "pars", "part", "part", "partons", "partez", "partent", "partent"]
    ],
    [ // 27. recevoir - receive
        ["receive", "receive", "receive", "receives", "receives", "receive", "receive", "receive", "receive"],
        ["recevoir", "reçois", "reçois", "reçoit", "reçoit", "recevons", "recevez", "reçoivent", "reçoivent"]
    ],
    [ // 28. connaitre - know
        ["know", "know", "know", "knows", "knows", "know", "know", "know", "know"],
        ["connaitre", "connais", "connais", "connait", "connait", "connaissons", "connaissez", "connaissent", "connaissent"]
    ],
    [ // 29. offrir - offer
        ["offer", "offer", "offer", "offers", "offers", "offer", "offer", "offer", "offer"],
        ["offrir", "offre", "offres", "offre", "offre", "offrons", "offrez", "offrent", "offrent"]
    ],
    [ // 30. neiger - snow
        ["snow", "snow", "snows", "snows", "snows", "snow", "snow", "snow", "snow"],
        ["neiger", "neige", "neiges", "neige", "neige", "neigeons", "neigez", "neigent", "neigent"]
    ],
    [ // 31. pleuvoir - rain
        ["rain", "rain", "rains", "rains", "rains", "rain", "rain", "rain", "rain"],
        ["pleuvoir", "pleut", "pleut", "pleut", "pleut", "pleut", "pleut", "pleut", "pleut"]
    ],
    [ // 32. falloir - have to
        ["have to", "have to", "has to", "has to", "has to", "have to", "have to", "have to", "have to"],
        ["falloir", "faut", "faut", "faut", "faut", "faut", "faut", "faut", "faut"]
    ],
    [ // 33. espérer - hope
        ["hope", "hope", "hope", "hopes", "hopes", "hope", "hope", "hope", "hope"],
        ["espérer", "espère", "espères", "espère", "espère", "espérons", "espérez", "espèrent", "espèrent"]
    ],
    [ // 34. mettre - put
        ["put", "put", "put", "puts", "puts", "put", "put", "put", "put"],
        ["mettre", "mets", "mets", "met", "met", "mettons", "mettez", "mettent", "mettent"]
    ],
    [ // 35. envoyer - send
        ["send", "send", "send", "sends", "sends", "send", "send", "send", "send"],
        ["envoyer", "envoie", "envoies", "envoie", "envoie", "envoyons", "envoyez", "envoient", "envoient"]
    ]
]; */
