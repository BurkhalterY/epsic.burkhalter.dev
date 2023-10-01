import{_ as a}from"./ShowCode-3b64f026.js";import{_ as b,o as d,c,e as t,B as e}from"./index-7f407549.js";const r=e("<p data-v-b96b3c65> Les variables servent à mémoriser des données dans la RAM pour pouvoir les réutiliser plus tard. </p><h2 data-v-b96b3c65>Les types de variables</h2><table data-v-b96b3c65><thead data-v-b96b3c65><tr data-v-b96b3c65><th data-v-b96b3c65>Nom</th><th data-v-b96b3c65>Taille</th><th data-v-b96b3c65>Remarque</th></tr></thead><tbody data-v-b96b3c65><tr data-v-b96b3c65><td data-v-b96b3c65>boolean</td><td data-v-b96b3c65>1 bit</td><td data-v-b96b3c65>Deux possibilités : true ou false</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>byte</td><td data-v-b96b3c65>1 octet</td><td data-v-b96b3c65>Entre -128 et 127</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>short</td><td data-v-b96b3c65>2 octets</td><td data-v-b96b3c65>Entre -32768 et 32767</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>int</td><td data-v-b96b3c65>4 octets</td><td data-v-b96b3c65>Entre -2&#39;147&#39;483&#39;648 et 2&#39;147&#39;483&#39;647</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>long</td><td data-v-b96b3c65>8 octets</td><td data-v-b96b3c65>Entre -9&#39;223&#39;372&#39;036&#39;854&#39;775&#39;808 et 9&#39;223&#39;372&#39;036&#39;854&#39;775&#39;807</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>float</td><td data-v-b96b3c65>4 octets</td><td data-v-b96b3c65>Nombre à virgule, précision simple</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>double</td><td data-v-b96b3c65>8 octets</td><td data-v-b96b3c65>Nombre à virgule, précision double</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>char</td><td data-v-b96b3c65>2 octets</td><td data-v-b96b3c65>Un seul caractère</td></tr><tr data-v-b96b3c65><td data-v-b96b3c65>String</td><td data-v-b96b3c65>Taille variable</td><td data-v-b96b3c65>Une chaîne de caractères</td></tr></tbody></table><h2 data-v-b96b3c65>Utilisation</h2>",4),s=e('<span data-v-b96b3c65><b data-v-b96b3c65>type</b> : un des types présentés au dessus, à choisir en fonction du besoin.</span><br data-v-b96b3c65><span data-v-b96b3c65><b data-v-b96b3c65>nomVariable</b> : le nom qu&#39;on utilisera par la suite pour faire appelle à notre variable, sans espace ni caractères spéciaux, le plus souvent en <a href="https://fr.wikipedia.org/wiki/Camel_case" target="_blank" data-v-b96b3c65>Camel Case</a>.</span><br data-v-b96b3c65><span data-v-b96b3c65><b data-v-b96b3c65>= 0</b> : Sert à initialiser directement la variable avec une valeur. C&#39;est facultatif. Si on ne le met pas, la variable vaut <code data-v-b96b3c65>null</code> et ne peut pas être utilisée dans des calculs.</span><h2 data-v-b96b3c65>Exemples</h2>',6),l=e("<h2 data-v-b96b3c65>Remarques</h2><ul data-v-b96b3c65><li data-v-b96b3c65> Dans un nombre à virgule, on utilise toujours un point et non pas une virgule. Exemple : <code data-v-b96b3c65>2.5</code></li><li data-v-b96b3c65> Pour le type <code data-v-b96b3c65>char</code>, on écrit le caractère entre apostrophes. Exemple : <code data-v-b96b3c65>&#39;a&#39;</code></li><li data-v-b96b3c65> Pour le type <code data-v-b96b3c65>String</code> (attention à la majuscule), on écrit les caractères entre guillemets. Exemple : <code data-v-b96b3c65>&quot;Hello world!&quot;</code></li></ul>",2),i={__name:"Variables",setup(o){return(v,n)=>(d(),c("div",null,[r,t(a,{raw:"type nomVariable = 0;",lang:"java"}),s,t(a,{raw:`int maVariable; // crée une variable avec le nom maVariable
maVariable = 0; // initialise la variable à 0`,lang:"java"}),t(a,{raw:"int maVariable = 0; // crée et initialise la variable sur la même ligne",lang:"java"}),l]))}},m=b(i,[["__scopeId","data-v-b96b3c65"]]);export{m as default};
