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
-- Table structure for table `menu_subscription`
--

DROP TABLE IF EXISTS `menu_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_subscription` (
  `menu_subscription_id` int NOT NULL AUTO_INCREMENT,
  `mess_subscription_id` int NOT NULL,
  `menu_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`menu_subscription_id`),
  UNIQUE KEY `menu_subscription_id` (`menu_subscription_id`),
  KEY `fkid` (`mess_subscription_id`),
  KEY `fkidno` (`menu_id`),
  CONSTRAINT `fkid` FOREIGN KEY (`mess_subscription_id`) REFERENCES `mess_subscription` (`mess_subscription_id`),
  CONSTRAINT `fkidno` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_subscription`
--

LOCK TABLES `menu_subscription` WRITE;
/*!40000 ALTER TABLE `menu_subscription` DISABLE KEYS */;
INSERT INTO `menu_subscription` VALUES (1,11,3,2),(2,11,3,2),(3,51,2,12),(4,51,2,12),(5,51,2,120),(6,12,6,12),(8,56,1,1000),(9,56,4,1),(10,43,4,1),(11,44,6,1),(12,44,6,1),(13,44,1,1),(14,44,4,1),(15,44,4,1),(16,44,4,77),(17,44,6,55),(18,44,4,1),(19,58,2,1),(20,58,1,12),(21,44,4,2),(22,44,1,1);
/*!40000 ALTER TABLE `menu_subscription` ENABLE KEYS */;
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
