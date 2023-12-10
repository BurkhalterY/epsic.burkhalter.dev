import{_ as n}from"./ShowCode-a68850d8.js";import{o as t,c as l,f as s,a as e,e as a}from"./index-1bfe471e.js";const o=e("p",null," Les commentaires servent à rendre le code plus compréhensible. Ils sont ignorés lors de la compilation. ",-1),r=e("h2",null,"Les commentaires sur une seule ligne",-1),i=e("p",null," Les commentaires qui s'écrivent sur une seule ligne sont indiqués par un double slash. Attention à toujours le placer après le point-virgule. ",-1),u=e("p",null,"Ils peuvent aussi occuper l'intégralité de la ligne.",-1),c=e("h2",null,"Les commentaires multilignes",-1),m=e("p",null," Ils sont utiles si vous devez faire des longs commentaires sur plusieurs lignes. ",-1),_=e("p",null,[a("Ils commencent par "),e("code",null,"/*"),a(" et finissent par "),e("code",null,"*/"),a(".")],-1),f={__name:"Commentaires",setup(p){return(d,g)=>(t(),l("div",null,[o,r,i,s(n,{raw:"maVar = 2 + 2; // maVar vaut maintenant 4",lang:"java"}),u,s(n,{raw:`maVar = 2 + 2;
// maVar vaut maintenant 4`,lang:"java"}),c,m,s(n,{raw:`/* Salut,
Je suis un commentaire
...

Un très long commentaire
*/`,lang:"java"}),_]))}};export{f as default};
