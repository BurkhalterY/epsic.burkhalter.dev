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
-- Structure de la table `t_types`
--

CREATE TABLE `t_types` (
  `ID_type` int(11) NOT NULL,
  `Nom_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Index pour la table `t_types`
--
ALTER TABLE `t_types`
  ADD PRIMARY KEY (`ID_type`);

--
-- AUTO_INCREMENT pour la table `t_types`
--
ALTER TABLE `t_types`
  MODIFY `ID_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
