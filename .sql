DROP DATABASE IF EXISTS `coding-demo`;
CREATE DATABASE `coding-demo` CHARACTER SET utf8 COLLATE utf8_general_ci ;
GRANT ALL ON `coding-demo`.* TO `coding-demo`@localhost IDENTIFIED BY 'coding-demo';
FLUSH PRIVILEGES;