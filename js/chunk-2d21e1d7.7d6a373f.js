(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e1d7"],{d3d6:function(e,s,t){"use strict";t.r(s);var i=t("7a23"),n=Object(i["h"])('<h1>L&#39;Active Directory (AD)</h1><p>L&#39;AD est un annuaire qui contient toute sorte d&#39;objets comme des utilisateurs, des machines, des groupes, etc...</p><p>Le protocole pour l&#39;administrer est LDAP.</p><p>Le protocole pour authentifier des sessions est Kerberos (attention : il ne doit pas avoir plus de 5 minutes de décalage entre l&#39;heure de la machine et l&#39;heure du serveur).</p><p>L&#39;Active Directory est un produit Microsoft, il existe d&#39;autres annuaires fonctionnant avec LDAP :</p><ul><li>Open Directory – Apple</li><li>Open LDAP – Linux</li><li>Directory Server – Synology</li><li>LDAP Server – QNAP</li></ul><h3>Les types d&#39;objets</h3><ul><li>Utilisateurs et ordinateurs</li><li>Groupes</li><li>Unité d&#39;organisation (UO / OU)</li><li>Ressources (imprimantes / applications)</li></ul><p><strong>Les comptes utilisateurs</strong> possède un identifiant et un mot de passe pour pouvoir s&#39;authentifier sur le domaine.</p><p><strong>Les groupes</strong> permettent de regrouper des comptes utilisateurs ou ordinateurs (ou les deux) afin de gérer les droits plus simplement.</p><p><strong>Les unité d&#39;organisation</strong> servent principalement à rendre l&#39;administration des comptes plus faciles. Ils peuvent contenir tous types d&#39;objet.</p><h3>Arborescence</h3><ul><li>Une forêt contient un ou plusieurs arbres</li><li>Un arbre contient un ou plusieurs domaines</li><li>Un domaine contient une ou plusieurs UO</li><li>Une UO contient un ou plusieurs objets</li></ul><img src="/medias/server/arborescence.png" alt="Arborescence" style="max-width:100%;"><p>Les triangles bleus et oranges sont des domaines.<br>Un ensemble de triangle est un arbre et un ensemble d&#39;arbre est une forêt.</p>',15),r=[n];function o(e,s,t,n,o,u){return Object(i["s"])(),Object(i["f"])("div",null,r)}var u={name:"Ad"},l=t("d959"),a=t.n(l);const p=a()(u,[["render",o]]);s["default"]=p}}]);
//# sourceMappingURL=chunk-2d21e1d7.7d6a373f.js.map