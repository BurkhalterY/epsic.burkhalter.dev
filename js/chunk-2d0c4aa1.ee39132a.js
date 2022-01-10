(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4aa1"],{"3c94":function(e,a,n){"use strict";n.r(a);var l=n("7a23"),t=Object(l["g"])("h1",null,"Les tableaux",-1),u=Object(l["g"])("p",null,"Un tableau est une variable qui contient plusieurs valeurs, différenciables grâce à un index.",-1),i=Object(l["g"])("h3",null,"Déclaration d'un tableau",-1),c={class:"language-java"},s=Object(l["g"])("p",null,"Un tableau ne peut contenir que des valeurs de même type. Il est impossible de créer un tableau qui contient des int ET des String.",-1),o=Object(l["g"])("p",null,"Une fois la taille du tableau choisi, elle ne peut plus être modifiée.",-1),b=Object(l["g"])("p",null,"Si vous ne voulez pas initialiser votre tableau, vous pouvez le noter comme ceci.",-1),r={class:"language-java"},j=Object(l["g"])("p",null,"Attention cependant, car avec cette méthode, toutes les cases vaudront null, ce qui veut dire qu'elles ne seront pas utilisables tel quel pour des calculs.",-1),g=Object(l["g"])("h3",null,"Utilisation du tableau",-1),p=Object(l["g"])("p",null,"Voici le code pour récupérer la valeur d'une case du tableau :",-1),d={class:"language-java"},m=Object(l["g"])("p",null,"Et pour la modifier :",-1),O={class:"language-java"},v=Object(l["g"])("p",null,"Attention, les index commencent à 0, donc l'index de la dernière case du tableau est égale a la taille du tableau moins un.",-1),f=Object(l["g"])("p",null,"Il existe un attribut pour la taille du tableau :",-1),h={class:"language-java"},T=Object(l["g"])("p",null,"Attention il s'agit d'un attribut, notez juste qu'il s'écrit comme ceci sans parenthèses.",-1),C=Object(l["g"])("h3",null,"Les tableaux à 2 dimensions",-1),S=Object(l["g"])("p",null,"Il est aussi possible de créer un tableau de type int[]. Concrètement un tableau de tableaux. Il se déclare comme ça :",-1),w={class:"language-java"},x=Object(l["g"])("p",null,"On y accède comme cela :",-1),y={class:"language-java"},q=Object(l["g"])("p",null,"On peut bien sûr aussi faire des tableaux à 3, 4 ou 5 dimensions. Mais ça n'a pas vraiment d'intérêt.",-1),z=Object(l["g"])("h3",null,"Parcourir un tableau",-1),I=Object(l["g"])("p",null,"Les boucles for sont très pratiques pour parcourir un tableau :",-1),L={class:"language-java"},U=Object(l["g"])("p",null,"Et pour un tableau 2D :",-1),k={class:"language-java"};function A(e,a,n,A,E,D){var J=Object(l["z"])("ShowCode");return Object(l["s"])(),Object(l["f"])("div",null,[t,u,i,Object(l["g"])("pre",c,[Object(l["j"])(J,{inlineCode:"int monTableau[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};",lang:"java"})]),s,o,b,Object(l["g"])("pre",r,[Object(l["j"])(J,{inlineCode:"int monTableau[] = new int[10]; //Le 10 représente la taille du tableau, inchangeable par la suite.",lang:"java"})]),j,g,p,Object(l["g"])("pre",d,[Object(l["j"])(J,{inlineCode:"System.out.println(monTableau[2]);",lang:"java"})]),m,Object(l["g"])("pre",O,[Object(l["j"])(J,{inlineCode:"monTableau[2] = 5;",lang:"java"})]),v,f,Object(l["g"])("pre",h,[Object(l["j"])(J,{inlineCode:"monTableau.length;",lang:"java"})]),T,C,S,Object(l["g"])("pre",w,[Object(l["j"])(J,{inlineCode:"int monTableau[][] = { {0, 1, 2},{3, 4, 5},{6, 7, 8} };",lang:"java"})]),x,Object(l["g"])("pre",y,[Object(l["j"])(J,{inlineCode:"System.out.println(monTableau[0][0]); //affiche 0\nSystem.out.println(monTableau[0][1]); //affiche 1\nSystem.out.println(monTableau[1][0]); //affiche 3",lang:"java"})]),q,z,I,Object(l["g"])("pre",L,[Object(l["j"])(J,{inlineCode:"for (int i = 0; i < monTableau.length; i++) {\n\tSystem.out.println(monTableau[i]);\n}",lang:"java"})]),U,Object(l["g"])("pre",k,[Object(l["j"])(J,{inlineCode:"for (int i = 0; i < monTableau.length; i++) {\n\tfor (int j = 0; j < monTableau[i].length; j++) {\n\t\tSystem.out.println(monTableau[i][j]);\n\t}\n}",lang:"java"})])])}var E=n("02c0"),D={name:"Tableaux",components:{ShowCode:E["a"]}},J=n("d959"),M=n.n(J);const P=M()(D,[["render",A]]);a["default"]=P}}]);
//# sourceMappingURL=chunk-2d0c4aa1.ee39132a.js.map