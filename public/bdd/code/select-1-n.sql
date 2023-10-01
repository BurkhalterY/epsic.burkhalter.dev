SELECT nom, prenom, adresse FROM t_avoir_email
INNER JOIN t_personne ON fk_personne = id_personne
INNER JOIN t_email ON fk_email = id_email