CREATE TABLE `wp_postmeta` (
  `meta_id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `meta_key` VARCHAR(255) DEFAULT NULL,  
  `meta_value` TEXT,
  PRIMARY KEY (`meta_id`),
  CONSTRAINT `fk_wp_postmeta_wp_posts` FOREIGN KEY (`post_id`) REFERENCES wp_posts(`id`)
) ENGINE = InnoDB;