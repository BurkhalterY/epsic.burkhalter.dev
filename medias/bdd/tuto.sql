-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 28 Février 2019 à 08:36
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tuto`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_avoir_email`
--

CREATE TABLE `t_avoir_email` (
  `id_avoir_email` int(11) NOT NULL,
  `fk_personne` int(11) NOT NULL,
  `fk_email` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `t_avoir_email`
--

INSERT INTO `t_avoir_email` (`id_avoir_email`, `fk_personne`, `fk_email`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 3, 3),
(5, 5, 4);

-- --------------------------------------------------------

--
-- Structure de la table `t_email`
--

CREATE TABLE `t_email` (
  `id_email` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `t_email`
--

INSERT INTO `t_email` (`id_email`, `adresse`) VALUES
(1, 'yannis.burkhalter@normalux.ch'),
(2, 'bdepsic@yahoo.fr'),
(3, 'prenom.nom@gmail.com'),
(4, 'info@esat.ch'),
(5, 'info@normalux.ch');

-- --------------------------------------------------------

--
-- Structure de la table `t_personne`
--

CREATE TABLE `t_personne` (
  `id_personne` int(11) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `date_naissance` date NOT NULL,
  `fk_sexe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `t_personne`
--

INSERT INTO `t_personne` (`id_personne`, `nom`, `prenom`, `date_naissance`, `fk_sexe`) VALUES
(1, 'Roger', 'Tom', '1974-02-12', 1),
(2, 'Breton', 'Alexia', '1954-04-05', 2),
(3, 'Leroy', 'Rémi', '1972-01-15', 1),
(4, 'Blanchard', 'Amandine', '1999-03-30', 2),
(5, 'Collin', 'Françoise', '2010-10-28', 2);

-- --------------------------------------------------------

--
-- Structure de la table `t_sexe`
--

CREATE TABLE `t_sexe` (
  `id_sexe` int(11) NOT NULL,
  `nom_sexe` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `t_sexe`
--

INSERT INTO `t_sexe` (`id_sexe`, `nom_sexe`) VALUES
(1, 'Homme'),
(2, 'Femme');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `t_avoir_email`
--
ALTER TABLE `t_avoir_email`
  ADD PRIMARY KEY (`id_avoir_email`),
  ADD KEY `fk_personne` (`fk_personne`),
  ADD KEY `fk_email` (`fk_email`);

--
-- Index pour la table `t_email`
--
ALTER TABLE `t_email`
  ADD PRIMARY KEY (`id_email`);

--
-- Index pour la table `t_personne`
--
ALTER TABLE `t_personne`
  ADD PRIMARY KEY (`id_personne`),
  ADD KEY `fk_sexe` (`fk_sexe`);

--
-- Index pour la table `t_sexe`
--
ALTER TABLE `t_sexe`
  ADD PRIMARY KEY (`id_sexe`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `t_avoir_email`
--
ALTER TABLE `t_avoir_email`
  MODIFY `id_avoir_email` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `t_email`
--
ALTER TABLE `t_email`
  MODIFY `id_email` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `t_personne`
--
ALTER TABLE `t_personne`
  MODIFY `id_personne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `t_sexe`
--
ALTER TABLE `t_sexe`
  MODIFY `id_sexe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `t_avoir_email`
--
ALTER TABLE `t_avoir_email`
  ADD CONSTRAINT `t_avoir_email_ibfk_1` FOREIGN KEY (`fk_email`) REFERENCES `t_email` (`id_email`),
  ADD CONSTRAINT `t_avoir_email_ibfk_2` FOREIGN KEY (`fk_personne`) REFERENCES `t_personne` (`id_personne`);

--
-- Contraintes pour la table `t_personne`
--
ALTER TABLE `t_personne`
  ADD CONSTRAINT `t_personne_ibfk_1` FOREIGN KEY (`fk_sexe`) REFERENCES `t_sexe` (`id_sexe`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
