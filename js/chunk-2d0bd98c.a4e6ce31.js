(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd98c"],{"2d59":function(e,t,l){"use strict";l.r(t);var c=l("7a23"),i=Object(c["g"])("h1",null,"Les formulaires",-1),n=Object(c["g"])("p",null,"Les formulaires servent souvent à communiquer avec un backend. Ils peuvent aussi être utilisé avec le JavaScript comme champ d'entrée pour les calculs. Sur cette page, nous n'allons voir ni l'une, ni l'autre des méthodes. Car nous n'avons pas de backend si l'on fait un site statique en HTML et parce que le JavaScript fera l'objet de la 3ème partie du module.",-1),a=Object(c["g"])("p",null,"Voici un exemple de formulaire avec quelques champs",-1),s={class:"row"},u={class:"col-md-6"},o={class:"language-html"},r=Object(c["g"])("div",{class:"col-md-6 text-center"},[Object(c["g"])("br"),Object(c["g"])("form",{action:"login_form.php",method:"POST"},[Object(c["g"])("label",{for:"username"},"Nom d'utilisateur : "),Object(c["g"])("input",{type:"text",name:"username",id:"username"}),Object(c["g"])("br"),Object(c["g"])("label",{for:"password"},"Mot de passe : "),Object(c["g"])("input",{type:"password",name:"password",id:"password"}),Object(c["g"])("br"),Object(c["g"])("input",{type:"submit",value:"Envoyer"})])],-1),b=Object(c["g"])("p",null,"Regardons tout cela de plus près :",-1),d=Object(c["i"])("Les champs doivent se trouver dans une balise "),j=Object(c["i"])("."),O=Object(c["i"])("La balise "),m=Object(c["i"])(" a deux attributs :"),p=Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("code",null,"action"),Object(c["i"])(" va être la page sur laquelle envoyer la requête.")]),Object(c["g"])("li",null,[Object(c["g"])("code",null,"method"),Object(c["i"])(" va être le verbe HTTP utilisé (GET ou POST). Dans ce cours on va principalement utiliser GET puisque nous n'avons pas de backend.")]),Object(c["g"])("ul",null,[Object(c["g"])("li",null,"GET va passer les champs dans l'URL."),Object(c["g"])("li",null,"POST les passe dans la requête HTTP et nécessite donc un serveur backend pour les récupérer (ex: PHP).")])],-1),g=Object(c["i"])("Les champs sont définis par la balise "),h=Object(c["i"])(" qui prend aussi deux attributs :"),v=Object(c["h"])("<ul><li><code>type</code> est le type de champs. Valeurs possibles : <code>text</code>, <code>password</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>, etc...</li><li><code>name</code> qui permet de récupérer la valeur du formulaire dans le backend ou le JavaScript.</li></ul>",1),f=Object(c["i"])("Les noms affichés des champs doivent se trouver dans une balise "),q=Object(c["i"])(" qui a un attribut :"),w=Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("code",null,"for"),Object(c["i"])(' "lie" le label au champ. Principalement pour qu\'un clic sur le label permette directement de modifier le champ (essayez-par vous-même 😉). Pour que cela fonctionne, il faut avoir ajouté un attribut '),Object(c["g"])("code",null,"id"),Object(c["i"])(" au champ. En effet, l'attribut "),Object(c["g"])("code",null,"for"),Object(c["i"])(" se réfère à un id et non au name. Mettre la même valeur suffira.")])],-1),L=Object(c["i"])("⚠ les champs comme les labels sont des balises de type "),x=Object(c["i"])("inline"),y=Object(c["i"])(". Si vous ne les forcé pas (par exemple avec un "),C=Object(c["i"])("), elles se mettront toute sur une ligne."),T=Object(c["i"])("Les boutons d'envoie ne sont en fait que des balises "),k=Object(c["i"])(" avec le type submit. Leur attribut "),S=Object(c["g"])("code",null,"value",-1),P=Object(c["i"])(" permet de modifier le texte de leur bouton."),J=Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["i"])("Il existe aussi un bouton de type "),Object(c["g"])("code",null,"reset"),Object(c["i"])(" qui vide entièrement le formulaire.")])],-1),H=Object(c["g"])("h2",null,"Liste déroulante",-1),M=Object(c["i"])("La balise "),E=Object(c["i"])(" ne permet pas de créer de liste déroulante. À la place, nous utiliserons "),z=Object(c["i"])(" et "),I=Object(c["i"])(" :"),_={class:"row"},G={class:"col-md-6"},W={class:"language-html"},A=Object(c["g"])("div",{class:"col-md-6 text-center"},[Object(c["g"])("br"),Object(c["g"])("select",{name:"character",id:"character"},[Object(c["g"])("option",null,"Mario"),Object(c["g"])("option",null,"Luigi"),Object(c["g"])("option",null,"Wario"),Object(c["g"])("option",null,"Waluigi")])],-1),R=Object(c["i"])("⚠ J'ai ici omis la balise "),V=Object(c["i"])(" pour des raisons de visibilités mais ne l'oubliez pas."),D=Object(c["g"])("p",null,[Object(c["i"])("Il y a vraiment énormément d'attributs en HTML. Il m'est difficile de tous les présenter au risque de donner trop d'informations. Le mieux est que vous cherchiez par vous-même lorsque vous avez besoin de quelque chose en particulier (je recommande "),Object(c["g"])("a",{href:"https://www.w3schools.com/",target:"_blank"},"W3Schools"),Object(c["i"])(" pour l'HTML).")],-1);function F(e,t,l,F,N,U){var B=Object(c["A"])("ShowCode"),K=Object(c["A"])("router-link");return Object(c["t"])(),Object(c["f"])("div",null,[i,n,a,Object(c["g"])("div",s,[Object(c["g"])("div",u,[Object(c["g"])("pre",o,[Object(c["j"])(B,{file:"html/form.html",lang:"html"})])]),r]),b,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[d,Object(c["j"])(B,{inlineCode:"<form>",lang:"html"}),j]),Object(c["g"])("li",null,[O,Object(c["j"])(B,{inlineCode:"<form>",lang:"html"}),m]),p,Object(c["g"])("li",null,[g,Object(c["j"])(B,{inlineCode:"<input>",lang:"html"}),h]),v,Object(c["g"])("li",null,[f,Object(c["j"])(B,{inlineCode:"<label>",lang:"html"}),q]),w,Object(c["g"])("li",null,[L,Object(c["j"])(K,{to:"/html/types_balises"},{default:Object(c["J"])((function(){return[x]})),_:1}),y,Object(c["j"])(B,{inlineCode:"<br>",lang:"html"}),C]),Object(c["g"])("li",null,[T,Object(c["j"])(B,{inlineCode:"<input>",lang:"html"}),k,S,P]),J]),H,Object(c["g"])("p",null,[M,Object(c["j"])(B,{inlineCode:"<input>",lang:"html"}),E,Object(c["j"])(B,{inlineCode:"<select>",lang:"html"}),z,Object(c["j"])(B,{inlineCode:"<option>",lang:"html"}),I]),Object(c["g"])("div",_,[Object(c["g"])("div",G,[Object(c["g"])("pre",W,[Object(c["j"])(B,{file:"html/select.html",lang:"html"})])]),A]),Object(c["g"])("p",null,[R,Object(c["j"])(B,{inlineCode:"<form>",lang:"html"}),V]),D])}var N=l("02c0"),U={name:"Form",components:{ShowCode:N["a"]}},B=l("d959"),K=l.n(B);const Q=K()(U,[["render",F]]);t["default"]=Q}}]);
//# sourceMappingURL=chunk-2d0bd98c.a4e6ce31.js.map