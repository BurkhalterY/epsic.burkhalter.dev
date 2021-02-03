<?php

$file =

"-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 21 Février 2019 à 22:38
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";
SET time_zone = \"+00:00\";

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
";

foreach ($tables as $table) {

    $id = 'id';
    foreach ($table['columns'] as $col) {
        if(isset($col['pk'])){
            $id = $col['name'];
        }
    }
    $file .= "
--
-- Structure de la table `t_".$table['name']."s`
--

CREATE TABLE `t_".$table['name']."s` (";
    $bool = false;
    foreach ($table['columns'] as $col) {
        if(isset($col['pk'])){
            $type = 'int(11) NOT NULL';
        } else if($col['type'] == 'int'){
            $type = 'int(11) DEFAULT NULL';
        } else if($col['type'] == 'varchar'){
            $type = 'varchar(255) DEFAULT NULL';
        } else if($col['type'] == 'date'){
            $type = 'date DEFAULT NULL';
        } else if($col['type'] == 'timestamp'){
            $type = 'timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP';
        } else if($col['type'] == 'float'){
            $type = 'float DEFAULT NULL';
        }
        if($bool){
            $file .= ',';
        }
        $file .= "
  `".$col['name']."` ".$type;
        $bool = true;
    }
$file .= "
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
";
}

"--
-- Index pour les tables exportées
--

";

foreach ($tables as $table) {
    $id = 'id';
    foreach ($table['columns'] as $col) {
        if(isset($col['pk'])){
            $id = $col['name'];
        }
    }
$file .= "--
-- Index pour la table `t_".$table['name']."s`
--
ALTER TABLE `t_".$table['name']."s`
  ADD PRIMARY KEY (`".$id."`);

";
}

foreach ($tables as $table) {
    $id = 'id';
    foreach ($table['columns'] as $col) {
        if(isset($col['pk'])){
            $id = $col['name'];
        }
    }
$file .= "--
-- AUTO_INCREMENT pour la table `t_".$table['name']."s`
--
ALTER TABLE `t_".$table['name']."s`
  MODIFY `".$id."` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
";
}

if (!file_exists('generator/output/'.$time)) {
    mkdir('generator/output/'.$time);
}
$fp = fopen('generator/output/'.$time.'/NOM_PRENOM_SUJET_BD_104.sql', 'w');
fwrite($fp, $file);
fclose($fp);

?>