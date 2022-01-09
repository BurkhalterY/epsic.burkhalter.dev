import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('../views/home/Index.vue'),
		meta: {
			title: 'Accuel - epsic.burkhalter.dev',
		},
	}, {
		path: '/access',
		component: () => import('../views/access/Base.vue'),
		meta: {
			favicon: 'access.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/access/Index.vue'),
				meta: {
					title: 'Menu - Module 100',
				},
			}, {
				path: 'tables',
				component: () => import('../views/access/Tables.vue'),
				meta: {
					title: 'Les tables',
				}
			}, {
				path: 'relations',
				component: () => import('../views/access/Relations.vue'),
				meta: {
					title: 'Les relations',
				}
			}, {
				path: 'valide_si',
				component: () => import('../views/access/ValideSi.vue'),
				meta: {
					title: 'Valide si',
				}
			}, {
				path: 'donnees',
				component: () => import('../views/access/Donnees.vue'),
				meta: {
					title: 'Ajouter des données',
				}
			}, {
				path: 'listes_deroulantes',
				component: () => import('../views/access/ListesDeroulantes.vue'),
				meta: {
					title: 'Listes déroulantes pour les FK',
				}
			}, {
				path: 'formulaires',
				component: () => import('../views/access/Formulaires.vue'),
				meta: {
					title: 'Créer un formulaire',
				}
			}, {
				path: 'boutons',
				component: () => import('../views/access/Boutons.vue'),
				meta: {
					title: 'Ajouter des boutons aux formulaires',
				}
			}, {
				path: 'vba',
				component: () => import('../views/access/Vba.vue'),
				meta: {
					title: 'Les bases du VBA',
				}
			}, {
				path: 'requetes',
				component: () => import('../views/access/Requetes.vue'),
				meta: {
					title: 'Afficher une liste avec une requête',
				}
			}, {
				path: 'control_zone_liste',
				component: () => import('../views/access/ControlZoneListe.vue'),
				meta: {
					title: 'Importer, ajouter, modifier et supprimer des éléments d\'une zone de liste (niveau avancé)',
				}
			}, {
				path: 'etiquettes',
				component: () => import('../views/access/Etiquettes.vue'),
				meta: {
					title: 'Imprimer des étiquettes',
				}
			}, {
				path: 'access1',
				component: () => import('../views/access/Access1.vue'),
				meta: {
					title: 'Ma base de données en Access 1.0',
				}
			},
		],
	}, {
		path: '/html',
		component: () => import('../views/html/Base.vue'),
		meta: {
			favicon: 'html.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/html/Index.vue'),
				meta: {
					title: 'Menu - CIE 101',
				},
			}, {
				path: 'site_web',
				component: () => import('../views/html/SiteWeb.vue'),
				meta: {
					title: 'Qu\'est-ce qu\'un site web ?',
				}
			}, {
				path: 'html_base',
				component: () => import('../views/html/HtmlBase.vue'),
				meta: {
					title: 'Les bases du HTML',
				}
			}, {
				path: 'types_balises',
				component: () => import('../views/html/TypesBalises.vue'),
				meta: {
					title: 'Les types de balises',
				}
			}, {
				path: 'structure_101',
				component: () => import('../views/html/Structure101.vue'),
				meta: {
					title: 'Structure attendue pour le module 101',
				}
			}, {
				path: 'hypertexte',
				component: () => import('../views/html/Hypertexte.vue'),
				meta: {
					title: 'Les liens hypertextes',
				}
			}, {
				path: 'image',
				component: () => import('../views/html/Image.vue'),
				meta: {
					title: 'Les images (+ audio et vidéo)',
				}
			}, {
				path: 'liste',
				component: () => import('../views/html/Liste.vue'),
				meta: {
					title: 'Les listes',
				}
			}, {
				path: 'table',
				component: () => import('../views/html/Table.vue'),
				meta: {
					title: 'Les tableaux',
				}
			}, {
				path: 'form',
				component: () => import('../views/html/Form.vue'),
				meta: {
					title: 'Les formulaires',
				}
			}, {
				path: 'iframe',
				component: () => import('../views/html/Iframe.vue'),
				meta: {
					title: 'L\'intégration (iframe)',
				}
			}, {
				path: 'css_base',
				component: () => import('../views/html/CssBase.vue'),
				meta: {
					title: 'Les bases du CSS',
				}
			}, {
				path: 'css_marges',
				component: () => import('../views/html/CssMarges.vue'),
				meta: {
					title: 'Les marges',
				}
			},
		],
	}, {
		path: '/bdd',
		component: () => import('../views/bdd/Base.vue'),
		meta: {
			favicon: 'bdd.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/bdd/Index.vue'),
				meta: {
					title: 'Menu - Module 100',
				},
			}, {
				path: 'fk_theorie',
				component: () => import('../views/bdd/FkTheorie.vue'),
				meta: {
					title: 'Mieux comprendre les FK',
				},
			}, {
				path: 'install_mysql',
				component: () => import('../views/bdd/InstallMysql.vue'),
				meta: {
					title: 'Installer un serveur MySQL',
				},
			}, {
				path: 'phpmyadmin',
				component: () => import('../views/bdd/Phpmyadmin.vue'),
				meta: {
					title: 'Prise en main de phpMyAdmin',
				},
			}, {
				path: 'fk',
				component: () => import('../views/bdd/Fk.vue'),
				meta: {
					title: 'Lier un champ FK_',
				},
			}, {
				path: 'sql_select',
				component: () => import('../views/bdd/SqlSelect.vue'),
				meta: {
					title: 'Récuperer des données avec des requêtes SQL',
				},
			}, {
				path: 'sql_inner_join',
				component: () => import('../views/bdd/SqlInnerJoin.vue'),
				meta: {
					title: 'Requêtes sur plusieurs tables',
				},
			},
		],
	}, {
		path: '/bin',
		component: () => import('../views/bin/Base.vue'),
		meta: {
			favicon: 'bin.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/bin/Index.vue'),
				meta: {
					title: 'Menu - Module 114',
				},
			}, {
				path: 'n_to_10',
				component: () => import('../views/bin/NTo10.vue'),
				mata: {
					title: 'Conversion base n en base 10',
				},
			}, {
				path: '10_to_n',
				component: () => import('../views/bin/10ToN.vue'),
				mata: {
					title: 'Conversion base 10 en base n',
				},
			}, {
				path: 'voc',
				component: () => import('../views/bin/Voc.vue'),
				mata: {
					title: 'Vocabulaire',
				},
			}, {
				path: 'bin_hex',
				component: () => import('../views/bin/BinHex.vue'),
				mata: {
					title: 'Conversion binaire - hexa',
				},
			}, {
				path: 'gray',
				component: () => import('../views/bin/Gray.vue'),
				mata: {
					title: 'Code Gray',
				},
			}, {
				path: 'bcd',
				component: () => import('../views/bin/Bcd.vue'),
				mata: {
					title: 'BCD',
				},
			}, {
				path: 'x_parmi_n',
				component: () => import('../views/bin/XParmiN.vue'),
				mata: {
					title: 'Code x parmi n',
				},
			}, {
				path: 'ascii',
				component: () => import('../views/bin/Ascii.vue'),
				mata: {
					title: 'Code ASCII',
				},
			}, {
				path: 'unicode_utf8',
				component: () => import('../views/bin/UnicodeUtf8.vue'),
				mata: {
					title: 'L\'Unicode et UTF-8',
				},
			}, {
				path: 'ean',
				component: () => import('../views/bin/Ean.vue'),
				mata: {
					title: 'Les codes-barres EAN',
				},
			}, {
				path: 'qr_code',
				component: () => import('../views/bin/QrCode.vue'),
				mata: {
					title: 'Les QR codes',
				},
			}, {
				path: 'convertisseur',
				component: () => import('../views/bin/Convertisseur.vue'),
				mata: {
					title: 'Convertisseur',
				},
			}, {
				path: 'addition',
				component: () => import('../views/bin/Addition.vue'),
				mata: {
					title: 'Additions en binaire',
				},
			}, {
				path: 'negativ',
				component: () => import('../views/bin/Negativ.vue'),
				mata: {
					title: 'Soustractions et nombres négatifs',
				},
			}, {
				path: 'float',
				component: () => import('../views/bin/Float.vue'),
				mata: {
					title: 'Nombres à virgules flottantes',
				},
			}, {
				path: 'fonctions_logiques',
				component: () => import('../views/bin/FonctionsLogiques.vue'),
				mata: {
					title: 'Les fonctions logiques',
				},
			}, {
				path: 'partie3',
				component: () => import('../views/bin/Partie3.vue'),
				mata: {
					title: 'Partie 3',
				},
			},
		],
	}, {
		path: '/network',
		component: () => import('../views/network/Base.vue'),
		meta: {
			favicon: 'network.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/network/Index.vue'),
				meta: {
					title: 'Menu - Module 117',
				},
			}, {
				path: 'materiel',
				component: () => import('../views/network/Materiel.vue'),
				meta: {
					title: 'Équipements réseaux',
				},
			}, {
				path: 'etendues_topologies',
				component: () => import('../views/network/EtenduesTopologies.vue'),
				meta: {
					title: 'Étendues et topologies des réseaux',
				},
			}, {
				path: 'modele_osi',
				component: () => import('../views/network/ModeleOsi.vue'),
				meta: {
					title: 'Modèle OSI',
				},
			}, {
				path: 'supports_transmission',
				component: () => import('../views/network/SupportsTransmission.vue'),
				meta: {
					title: 'Les supports de transmission',
				},
			}, {
				path: 'classes_ip',
				component: () => import('../views/network/ClassesIp.vue'),
				meta: {
					title: 'Les classes d\'adresses IP',
				},
			}, {
				path: 'structure_ip',
				component: () => import('../views/network/StructureIp.vue'),
				meta: {
					title: 'Structure d\'une adresse IP',
				},
			}, {
				path: 'calcul_sous_reseaux',
				component: () => import('../views/network/CalculSousReseaux.vue'),
				meta: {
					title: 'Calculer les sous-réseaux',
				},
			}, {
				path: 'design_ethernet',
				component: () => import('../views/network/DesignEthernet.vue'),
				meta: {
					title: 'Design Ethernet (Projet Mediatis)',
				},
			}, {
				path: 'calculateur_sr',
				component: () => import('../views/network/CalculateurSr.vue'),
				meta: {
					title: 'Calculateur de sous-réseaux',
				},
			}, ],
	}, {
		path: '/server',
		component: () => import('../views/server/Base.vue'),
		meta: {
			favicon: 'server.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/server/Index.vue'),
				meta: {
					title: 'Menu - Module 123',
				},
			}, {
				path: 'dns',
				component: () => import('../views/server/Dns.vue'),
				meta: {
					title: 'Les DNS',
				},
			}, {
				path: 'ad',
				component: () => import('../views/server/Ad.vue'),
				meta: {
					title: 'L\'Active Directory (AD)',
				},
			}, {
				path: 'mmc',
				component: () => import('../views/server/Mmc.vue'),
				meta: {
					title: 'MMC',
				},
			},
		],
	}, {
		path: '/java',
		component: () => import('../views/java/Base.vue'),
		meta: {
			favicon: 'java.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/java/Index.vue'),
				meta: {
					title: 'Menu - Module 403',
				},
			}, {
				path: 'new',
				component: () => import('../views/java/New'),
				meta: {
					title: 'Créer un nouveau projet',
				},
			}, {
				path: 'commentaires',
				component: () => import('../views/java/Commentaires'),
				meta: {
					title: 'Les commentaires',
				},
			}, {
				path: 'variables',
				component: () => import('../views/java/Variables'),
				meta: {
					title: 'Les variables',
				},
			}, {
				path: 'operateurs',
				component: () => import('../views/java/Operateurs'),
				meta: {
					title: 'Les opérateurs',
				},
			}, {
				path: 'afficher',
				component: () => import('../views/java/Afficher'),
				meta: {
					title: 'Afficher du texte dans la console',
				},
			}, {
				path: 'clavier',
				component: () => import('../views/java/Clavier'),
				meta: {
					title: 'Lire les entrées clavier',
				},
			}, {
				path: 'conditions',
				component: () => import('../views/java/Conditions'),
				meta: {
					title: 'Les conditions',
				},
			}, {
				path: 'conditions_avancees',
				component: () => import('../views/java/ConditionsAvancees'),
				meta: {
					title: 'Les conditions avancées',
				},
			}, {
				path: 'boucles',
				component: () => import('../views/java/Boucles'),
				meta: {
					title: 'Les boucles',
				},
			}, {
				path: 'conversion_boucle',
				component: () => import('../views/java/ConversionBoucle'),
				meta: {
					title: 'Conversion d\'un for en while et inversement',
				},
			}, {
				path: 'methodes',
				component: () => import('../views/java/Methodes'),
				meta: {
					title: 'Les méthodes',
				},
			}, {
				path: 'tableaux',
				component: () => import('../views/java/Tableaux'),
				meta: {
					title: 'Les tableaux',
				},
			}, {
				path: 'tri_a_bulle',
				component: () => import('../views/java/TriABulle'),
				meta: {
					title: 'Tri à bulle',
				},
			}, {
				path: 'structogramme',
				component: () => import('../views/java/Structogramme'),
				meta: {
					title: 'Symboles Nassi-Shneidermann',
				},
			},
		],
	}, {
		path: '/poo',
		component: () => import('../views/poo/Base.vue'),
		meta: {
			favicon: 'java.ico',
		},
		children: [
			{
				path: '',
				component: () => import('../views/poo/Index.vue'),
				meta: {
					title: 'Menu - Module 404',
				},
			}, {
				path: 'objet',
				component: () => import('../views/poo/Objet'),
				meta: {
					title: 'Qu\'est-ce qu\'un objet',
				},
			}, {
				path: 'constructeur',
				component: () => import('../views/poo/Constructeur'),
				meta: {
					title: 'Les constructeurs',
				},
			}, {
				path: 'encapsulation',
				component: () => import('../views/poo/Encapsulation'),
				meta: {
					title: 'L\'encapsulation',
				},
			}, {
				path: 'heritage',
				component: () => import('../views/poo/Heritage'),
				meta: {
					title: 'L\'héritage',
				},
			}, {
				path: 'polymorphisme',
				component: () => import('../views/poo/Polymorphisme'),
				meta: {
					title: 'Le polymorphisme',
				},
			}, {
				path: 'classes_abstraites',
				component: () => import('../views/poo/ClassesAbstraites'),
				meta: {
					title: 'Les classes abstraites',
				},
			}, {
				path: 'interfaces',
				component: () => import('../views/poo/Interfaces'),
				meta: {
					title: 'Les interfaces',
				},
			}, {
				path: 'fenetre',
				component: () => import('../views/poo/Fenetre'),
				meta: {
					title: 'Première fenêtre',
				},
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach(to => {
	document.title = to.meta.title;
	document.querySelector("link[rel~='icon']").href = '/icon/' + to.meta.favicon;
})

export default router
