import{_ as o}from"./ShowCode-3b64f026.js";import{r,o as l,c as a,a as e,d as t,e as s,w as i,B as u}from"./index-7f407549.js";const c=e("p",null," Dans de gros projets informatiques, on aime pouvoir diviser les taches entre plusieurs développeurs. Et chaque développeur ne peut pas forcément connaître tout le projet. ",-1),p=e("p",null," Les fonctions mises en place par certains développeurs devront néanmoins interagir avec celles d'autres développeurs. ",-1),d=e("p",null," La solution est de définir des inputs et des outputs pour chaque objet sans se préoccuper de leurs fonctionnements, juste de leurs utilisations. ",-1),m=e("br",null,null,-1),_=e("p",null," Pour mettre cela en place, il ne faut pas que n'importe quel objet puisse modifier les attributs ou appeler certaines méthodes d'un autre objet. Cela pourrait le faire bugger grave. ",-1),v=e("p",null,'On a donc mis en place un système de "droit" entre les objets :',-1),h=e("li",null,[e("strong",null,"public"),t(" : l'élément est visible depuis toutes les classes ")],-1),b=e("strong",null,"protected",-1),f=e("li",null,[e("strong",null,"private"),t(" : l'élément est visible uniquement dans la classe courante ")],-1),g=e("h2",null,"Définir la portée d'un élément",-1),j=e("p",null," Pour définir la portée d'un attribut ou d'une méthode, on l'ajoute simplement devant comme ceci : ",-1),q=u("<p> Ici, les trois attributs sont en <code>private</code> et la fonction est en <code>public</code>. </p><p> Attention, on met toujours les attributs en <code>protected</code> ou <code>private</code>. </p><h2>Accéder aux attributs</h2><p> Mais si on met les attributs en <code>protected</code> ou <code>private</code>, certaines classes ne pourront pas y accèder. Pour remédier à ce problème, on crée des getters et des setters. Ce sont des fonctions <code>public</code>. Le rôle des getters et de renvoyer un attribut. Celui des setters de mettre à jour un attribut en prennant sa nouvelle valeur en paramètre. </p><p> Voici la classe <code>Personne</code> avec un getter et un setter pour nom. </p>",5),x=e("p",null," (Je ne l'ai volontairement pas fait pour tous les attributs pour ne pas surcharger l'exemple.) ",-1),P={__name:"Encapsulation",setup(k){return(C,V)=>{const n=r("router-link");return l(),a("div",null,[c,p,d,m,_,v,e("ul",null,[h,e("li",null,[b,t(" : l'élément n'est visible que dans le package et les classes dont sa classe "),s(n,{to:"/poo/heritage"},{default:i(()=>[t("hérite")]),_:1})]),f]),g,j,s(o,{file:"/poo/code/encapsulation0.java",lang:"java"}),q,s(o,{file:"/poo/code/encapsulation1.java",lang:"java"}),x])}}};export{P as default};
