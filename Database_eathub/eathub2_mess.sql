-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: eathub2
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mess`
--

DROP TABLE IF EXISTS `mess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mess` (
  `mess_id` int NOT NULL AUTO_INCREMENT,
  `mess_name` varchar(64) NOT NULL,
  `owner_name` varchar(64) NOT NULL,
  `mess_address` varchar(256) NOT NULL,
  `city` varchar(16) NOT NULL,
  `contactno` varchar(255) DEFAULT NULL,
  `email` varchar(64) NOT NULL,
  `login_id` int NOT NULL,
  `area` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mess_id`),
  UNIQUE KEY `owner_name` (`owner_name`),
  UNIQUE KEY `mess_address` (`mess_address`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `login_id` (`login_id`),
  UNIQUE KEY `contactno` (`contactno`),
  CONSTRAINT `messlogin_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess`
--

LOCK TABLES `mess` WRITE;
/*!40000 ALTER TABLE `mess` DISABLE KEYS */;
INSERT INTO `mess` VALUES (104,'Parvati','Bhushan Kumar','Near Main Bus stop','pune','6578887764','bhushan23@gmail.com',306,'Karvenagar'),(105,'RuchiMess','Ruchita Chadha','Phase 1 Hinjewadi','pune','7756355436','ruchita23@gmail.com',307,'Hinjewadi'),(106,'FoodieMess','Dipak kumar','near westend mall','pune','8940594099','dipak1@gmail.com',309,'Aundh');
/*!40000 ALTER TABLE `mess` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-24 14:04:18
