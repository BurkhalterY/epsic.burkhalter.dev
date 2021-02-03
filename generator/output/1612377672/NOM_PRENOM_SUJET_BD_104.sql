-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 21 Février 2019 à 22:38
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `nom_prenom_sujet_bd_104`
--
-- Database: NOM_PRENOM_SUJET_BD_104

-- Détection si une autre base de donnée du même nom existe

DROP DATABASE IF EXISTS NOMPRENOMSUJET_BD_104_V1;

-- Création d'un nouvelle base de donnée

CREATE DATABASE IF NOT EXISTS NOMPRENOMSUJET_BD_104_V1;

-- Utilisation de cette base de donnée

USE NOMPRENOMSUJET_BD_104_V1;
-- --------------------------------------------------------

--
-- Structure de la table `t_personnes`
--

CREATE TABLE `t_personnes` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `t_voitures`
--

CREATE TABLE `t_voitures` (
  `id` int(11) NOT NULL,
  `model` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Index pour la table `t_personnes`
--
ALTER TABLE `t_personnes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `t_voitures`
--
ALTER TABLE `t_voitures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour la table `t_personnes`
--
ALTER TABLE `t_personnes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
--
-- AUTO_INCREMENT pour la table `t_voitures`
--
ALTER TABLE `t_voitures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
