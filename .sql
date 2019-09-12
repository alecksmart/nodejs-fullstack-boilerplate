DROP DATABASE IF EXISTS `nodejs-fullstack-boilerplate`;
CREATE DATABASE `nodejs-fullstack-boilerplate` CHARACTER SET utf8 COLLATE utf8_general_ci ;
GRANT ALL ON `nodejs-fullstack-boilerplate`.* TO `nodejs-fullstack-boilerplate`@localhost IDENTIFIED BY 'nodejs-fullstack-boilerplate';
FLUSH PRIVILEGES;

USE `nodejs-fullstack-boilerplate`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `highscores`;
CREATE TABLE `highscores` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned NOT NULL,
  `highscore` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `highscores_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
