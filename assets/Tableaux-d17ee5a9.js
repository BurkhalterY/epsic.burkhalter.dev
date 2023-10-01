import{_ as n}from"./ShowCode-3b64f026.js";import{o as l,c as u,e as t,a as e,d as a}from"./index-7f407549.js";const s=e("p",null," Un tableau est une variable qui contient plusieurs valeurs différenciables grâce à un index. ",-1),o=e("h2",null,"Déclaration d'un tableau",-1),i=e("p",null,[a(" Un tableau ne peut contenir que des valeurs de même type. Il est impossible de créer un tableau qui contient des "),e("code",null,"int"),a(" ET des "),e("code",null,"String"),a(". ")],-1),r=e("p",null," Une fois la taille du tableau choisie, elle ne peut plus être modifiée. ",-1),c=e("p",null," Si vous ne voulez pas initialiser votre tableau, vous pouvez le noter comme ceci. ",-1),d=e("p",null,[a(" Attention cependant car avec cette méthode, toutes les cases vaudront "),e("code",null,"null"),a(", ce qui veut dire qu'elles ne seront pas utilisables telles quelles. ")],-1),p=e("h2",null,"Utilisation du tableau",-1),m=e("p",null,"Voici le code pour récupérer la valeur d'une case du tableau :",-1),_=e("p",null,"Et pour la modifier :",-1),b=e("p",null," Attention, les index commencent à 0. L'index de la dernière case du tableau est égale à la taille du tableau moins un. ",-1),h=e("p",null,"Il existe un attribut pour la taille du tableau :",-1),f=e("p",null," Attention, il s'agit d'un attribut. Il s'appelle donc comme ceci, sans parenthèses. ",-1),v=e("h2",null,"Les tableaux à deux dimensions",-1),g=e("p",null,[a(" Il est aussi possible de créer un tableau de type "),e("code",null,"int[]"),a(". Concrètement, c'est un tableau de tableaux. Il se déclare comme ça : ")],-1),T=e("p",null,"On y accède comme cela :",-1),j=e("p",null,[a(" On peut bien sûr aussi faire des tableaux à trois, quatre ou "),e("i",null,"n"),a(" dimensions, mais je ne pense que ce serait un peu difficile à illustrer dans ce cours. ")],-1),x=e("h2",null,"Parcourir un tableau",-1),w=e("p",null,[a(" Les boucles "),e("code",null,"for"),a(" sont très pratiques pour parcourir un tableau : ")],-1),q=e("p",null,"Et pour un tableau 2D :",-1),V={__name:"Tableaux",setup(y){return(S,I)=>(l(),u("div",null,[s,o,t(n,{raw:"int monTableau[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };",lang:"java"}),i,r,c,t(n,{raw:"int monTableau[] = new int[10]; // 10 représente la taille du tableau, inchangeable par la suite",lang:"java"}),d,p,m,t(n,{raw:"System.out.println(monTableau[2]);",lang:"java"}),_,t(n,{raw:"monTableau[2] = 5;",lang:"java"}),b,h,t(n,{raw:"monTableau.length;",lang:"java"}),f,v,g,t(n,{raw:"int monTableau[][] = {{ 0, 1, 2 }, { 3, 4, 5 }, { 6, 7, 8 }};",lang:"java"}),T,t(n,{raw:`System.out.println(monTableau[0][0]); // affiche 0
System.out.println(monTableau[0][1]); // affiche 1
System.out.println(monTableau[1][0]); // affiche 3`,lang:"java"}),j,x,w,t(n,{raw:`for (int i = 0; i < monTableau.length; i++) {
	System.out.println(monTableau[i]);
}`,lang:"java"}),q,t(n,{raw:`for (int i = 0; i < monTableau.length; i++) {
	for (int j = 0; j < monTableau[i].length; j++) {
		System.out.println(monTableau[i][j]);
	}
}`,lang:"java"})]))}};export{V as default};
