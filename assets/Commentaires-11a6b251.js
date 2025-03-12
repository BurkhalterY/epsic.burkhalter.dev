import{_ as s}from"./ShowCode-2a9598fe.js";import{o as r,c as t,a as n,f as l,b as a}from"./index-949fb534.js";const p={__name:"Commentaires",setup(o){return(i,e)=>(r(),t("div",null,[e[0]||(e[0]=n("p",null," Les commentaires servent à rendre le code plus compréhensible. Ils sont ignorés lors de la compilation. ",-1)),e[1]||(e[1]=n("h2",null,"Les commentaires sur une seule ligne",-1)),e[2]||(e[2]=n("p",null," Les commentaires qui s'écrivent sur une seule ligne sont indiqués par un double slash. Attention à toujours le placer après le point-virgule. ",-1)),l(s,{raw:"maVar = 2 + 2; // maVar vaut maintenant 4",lang:"java"}),e[3]||(e[3]=n("p",null,"Ils peuvent aussi occuper l'intégralité de la ligne.",-1)),l(s,{raw:`maVar = 2 + 2;
// maVar vaut maintenant 4`,lang:"java"}),e[4]||(e[4]=n("h2",null,"Les commentaires multilignes",-1)),e[5]||(e[5]=n("p",null," Ils sont utiles si vous devez faire des longs commentaires sur plusieurs lignes. ",-1)),l(s,{raw:`/* Salut,
Je suis un commentaire
...

Un très long commentaire
*/`,lang:"java"}),e[6]||(e[6]=n("p",null,[a("Ils commencent par "),n("code",null,"/*"),a(" et finissent par "),n("code",null,"*/"),a(".")],-1))]))}};export{p as default};
