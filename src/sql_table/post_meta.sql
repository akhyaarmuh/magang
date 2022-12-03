CREATE TABLE `post_meta` (
  `meta_id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `meta_key` VARCHAR(255) DEFAULT NULL,  
  `meta_value` TEXT,
  PRIMARY KEY (`meta_id`),
  CONSTRAINT `fk_postmeta_posts` FOREIGN KEY (`post_id`) REFERENCES posts(`id`)
) ENGINE = InnoDB;