import{t as e}from"./ShowCode-CnQi6Jge.js";import{C as t,O as n,v as r,w as i,x as a}from"./index-BOUqWDvf.js";var o={__name:`Commentaires`,setup(o){return(o,s)=>(n(),a(`div`,null,[s[0]||=r(`p`,null,` Les commentaires servent à rendre le code plus compréhensible. Ils sont ignorés lors de la compilation. `,-1),s[1]||=r(`h2`,null,`Les commentaires sur une seule ligne`,-1),s[2]||=r(`p`,null,` Les commentaires qui s'écrivent sur une seule ligne sont indiqués par un double slash. Attention à toujours le placer après le point-virgule. `,-1),i(e,{raw:`maVar = 2 + 2; // maVar vaut maintenant 4`,lang:`java`}),s[3]||=r(`p`,null,`Ils peuvent aussi occuper l'intégralité de la ligne.`,-1),i(e,{raw:`maVar = 2 + 2;
// maVar vaut maintenant 4`,lang:`java`}),s[4]||=r(`h2`,null,`Les commentaires multilignes`,-1),s[5]||=r(`p`,null,` Ils sont utiles si vous devez faire des longs commentaires sur plusieurs lignes. `,-1),i(e,{raw:`/* Salut,
Je suis un commentaire
...

Un très long commentaire
*/`,lang:`java`}),s[6]||=r(`p`,null,[t(`Ils commencent par `),r(`code`,null,`/*`),t(` et finissent par `),r(`code`,null,`*/`),t(`.`)],-1)]))}};export{o as default};