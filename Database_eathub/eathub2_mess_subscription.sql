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
-- Table structure for table `mess_subscription`
--

DROP TABLE IF EXISTS `mess_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mess_subscription` (
  `mess_subscription_id` int NOT NULL AUTO_INCREMENT,
  `mess_id` int DEFAULT NULL,
  `subscription_id` int DEFAULT NULL,
  `rate` int NOT NULL,
  PRIMARY KEY (`mess_subscription_id`),
  UNIQUE KEY `mess_subscription_id` (`mess_subscription_id`),
  KEY `fk_mess_id` (`mess_id`),
  KEY `fk_subscription_id` (`subscription_id`),
  CONSTRAINT `fk_mess_id` FOREIGN KEY (`mess_id`) REFERENCES `mess` (`mess_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_subscription_id` FOREIGN KEY (`subscription_id`) REFERENCES `subscription_table` (`subscription_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_subscription`
--

LOCK TABLES `mess_subscription` WRITE;
/*!40000 ALTER TABLE `mess_subscription` DISABLE KEYS */;
INSERT INTO `mess_subscription` VALUES (11,104,1,8),(12,105,1,100),(13,104,1,1200),(14,104,2,12000),(15,104,2,0),(16,104,2,2100),(17,104,2,2100),(18,104,2,22000),(19,104,1,8000),(20,104,3,6780),(21,104,1,1200),(22,104,1,1200),(23,104,1,1200),(24,104,1,1200),(25,104,3,1300),(26,104,4,1500),(27,104,1,100),(28,104,1,200),(29,104,1,200),(30,104,1,200),(31,104,1,200),(32,104,2,1000),(33,104,2,100),(34,104,1,200),(35,104,1,200),(36,104,2,1000),(37,104,2,20),(38,104,2,20),(39,104,2,1234),(40,105,2,1234),(41,105,3,2345),(42,105,2,245),(43,105,3,900),(44,106,2,200),(45,104,4,333),(46,105,3,3663),(47,105,2,3636),(48,105,3,7474),(49,105,3,74744),(50,104,1,100),(51,105,2,9000),(52,105,4,9000),(53,105,2,5678),(54,105,4,76589),(55,105,1,1000),(56,105,1,350),(57,105,1,350),(58,106,1,456),(59,106,1,273),(60,106,2,4960),(61,106,2,0),(62,106,1,9000);
/*!40000 ALTER TABLE `mess_subscription` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-24 14:04:19
