import{_ as l}from"./ShowCode-3b64f026.js";import{o as n,c as s,e as t,a as e,d as a}from"./index-7f407549.js";const i=e("p",null," Le HTML sert à structurer le contenu. Pour cela, on utilise des balises. ",-1),r=e("h2",null,"Les balises",-1),u=e("p",null," Pour commencer, voici un exemple de balise que nous allons décortiquer juste après : ",-1),o=e("p",null,"Hello world",-1),c=e("h2",null,"La structure de la page",-1),d=e("p",null," Cependant, ce que je viens de faire n'est pas juste. Parce que je n'ai pas écrit la structure de la page HTML. La structure de base d'une page HTML est la suivante : ",-1),p=e("p",null,"Cette structure minimale est obligatoire. Analysons-la ensembles.",-1),m=e("p",null,"Elle contient les balises suivantes :",-1),h=e("h2",null,"Créer un fichier .html",-1),v=e("p",null," Pour pouvoir écrire des pages HTML, il vous faudra un éditeur de texte et un navigateur. Les fichiers avec l'extension .html devraient s'ouvrir directement avec votre navigateur par défaut en double-cliquant dessus. Vous pouvez copiez-collez le code ci-dessus dans votre éditeur favori pour faire un essai. ",-1),L={__name:"HtmlBase",setup(_){return(g,f)=>(n(),s("div",null,[i,r,u,t(l,{raw:"<p>Hello world</p>",lang:"html"}),e("p",null,[a(" Ceci est une balise de paragraphe "),t(l,{raw:"<p>",lang:"html",inline:!0}),a(` qui a comme contenu "Hello world". Elle a pour fonction d'afficher son contenu dans la page. Ce qui donne : `)]),o,c,d,t(l,{file:"/html/code/base.html",lang:"html"}),p,m,e("ul",null,[e("li",null,[t(l,{raw:"<!DOCTYPE html>",lang:"html",inline:!0}),a(" : Indique au navigateur la version de HTML à utiliser. Toujours utiliser cette valeur afin d'utiliser la dernière version : la version 5. Cette balise n'a pas besoin d'être fermée et ne doit pas l'être. ")]),e("li",null,[t(l,{raw:"<html>",lang:"html",inline:!0}),a(" : Indique le début du code HTML. Rien, à part le DOCTYPE, ne doit se trouver à l'extérieur de cette balise. ")]),e("ul",null,[e("li",null,[t(l,{raw:"<head>",lang:"html",inline:!0}),a(" : C'est ici qu'on va définir les métadonnées de notre page et chager les fichiers complémentaires tels que les fichiers CSS et JavaScript. ")]),e("ul",null,[e("li",null,[t(l,{raw:"<title>",lang:"html",inline:!0}),a(" : Le titre de la page qu'on peut retrouver dans le nom de l'onglet. ")]),e("li",null,[t(l,{raw:'<meta charset="utf-8">',lang:"html",inline:!0}),a(" : Permet de spécifier l'encodage de la page. S'il n'est pas précisé, vous risquez d'avoir des problèmes avec les accents et autres caractères Unicode. ")])]),e("li",null,[t(l,{raw:"<body>",lang:"html",inline:!0}),a(" : C'est la balise qui va contenir tout ce qui sera visible dans la page. Les textes, les images, etc... ")]),e("ul",null,[e("li",null,[t(l,{raw:"<p>",lang:"html",inline:!0}),a(" : Un balise paragraphe utilisée à titre d'exemple. ")])])])]),h,v]))}};export{L as default};
