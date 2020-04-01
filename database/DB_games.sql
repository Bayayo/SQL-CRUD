-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB
--
-- Host: localhost    Database: ng_games_db
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `games`
--

CREATE DATABASE  IF NOT EXISTS `ng_games_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `ng_games_db`;

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(180) DEFAULT NULL,
  `description` varchar(180) DEFAULT NULL,
  `image` varchar(180) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;


LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES 
	(1,'Resident Evil','Cuyo título original es Biohazard — es el primer título de una serie de videojuegos que salió a la venta en Japón en el año 1996.','https://3.bp.blogspot.com/-J9uHuvQDkNc/WxsdULj3HmI/AAAAAAAAAew/J8a2A4mc_LcZVN08g4nS67hWEOw7ZnJpgCLcBGAs/s400/residentevildirectorscut.jpg','2020-03-09 23:51:48'),
	(2,'Castlevania','Conocido en Japón como Akumajō Dracula X: Gekka no Yasōkyoku, es un videojuego de acción-aventura de gráficos 2D desarrollado y publicado por Ko','https://3.bp.blogspot.com/-w3g2-DhKk20/W16c9hGcajI/AAAAAAAABuU/3DPc1NH-TbcpUqWacgj2XxyYsunIh36YQCLcBGAs/s400/castlevania-symphony-of-the-night_uz3a.jpg','2020-03-11 17:42:10'),
	(3,'Batletoads','Es un videojuego del género beat \'em up donde con el personaje uno debe luchar contra muchos enemigos (como en Double Dragon o Final Fight). Fue publicado por primera vez para la v','https://www.gamesource.it/wp-content/uploads/2014/11/battletoads-nes.jpg','2020-03-11 17:43:27'),
	(9,'Mario Bros','Mario Bros. es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. Ha sido presentado como un minijuego en la serie de Super Mario Ad','https://images-na.ssl-images-amazon.com/images/I/81ynyeS7BmL._AC_SL1500_.jpg','2020-03-27 04:27:46'),
	(10,'Zombies ate my Neighbors','Zombies Ate My Neighbors. Es un videojuego de 1993, de acción, plataformas y disparos para las consolas Mega Drive de Sega y Super NES de Nintendo.','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXix0tTCK18mpcJ50e9Q2R_bGVCAS5c7gnsHQe3z8QxdySW6Ic','2020-03-27 04:42:13'),
	(12,'Super Mario Bros 2 - B','Conocido en Japón como Super Mario USA, es un videojuego de plataformas desarrollado por Nintendo para la consola Nintendo Entertainment System. Fue lanzado or','https://1.bp.blogspot.com/-0MjB02ZQy5k/VVI6_1Ykz_I/AAAAAAAAED8/yWyhbRJZ-5s/s1600/mario%2B2.jpg','2020-03-27 11:50:21'),
	(13,'Adventure Island NES','Conocido en Japón como Takahashi Meijin no Bōken Jima es un videojuego desarrollado y distribuido por Hudson Soft para las consolas NES, Game Boy, ordenador MSX, ','https://3.bp.blogspot.com/--6oCtYwrMtU/VVIx3indU9I/AAAAAAAAECM/oQZHb3bMIZQ/s1600/adventure.jpg','2020-03-28 02:12:24'),
	(14,'Mario Bros 3','Mario Bros. es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. Ha sido presentado como un minijuego en la serie de Super Mario Ad','https://images-na.ssl-images-amazon.com/images/I/81ynyeS7BmL._AC_SL1500_.jpg','2020-03-27 04:27:46');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;


