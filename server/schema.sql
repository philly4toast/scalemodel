-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'models'
-- 
-- ---

DROP TABLE IF EXISTS `models`;
		
CREATE TABLE `models` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `model_name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  `completed` BOOLEAN NOT NULL,
  `rawProjImgURL` VARCHAR(400), 
  `completedProjImgURL` VARCHAR(400), 
  PRIMARY KEY (`id`)
);

-- INSERT INTO `models` (`id`,`model_name`,`description`,`completed`,`rawProjImgURL`,`completedProjImgURL`) VALUES
-- ('','','','','','');
INSERT INTO `models` (`model_name`,`description`,`completed`,`rawProjImgURL`,`completedProjImgURL`) VALUES
('Mitsubishi A6M3','IJN Zero Fighter',true,'https://i.pinimg.com/originals/e8/17/fc/e817fc0c7d808681156199164ff023e3.jpg','https://www.warbirdphotographs.com/NavyBWZeros/A6M2-Mt-Fuji-173af+s.jpg');
INSERT INTO `models` (`model_name`,`description`,`completed`,`rawProjImgURL`,`completedProjImgURL`) VALUES
('Grumman F4F','USN Wildcat',true,'https://sep.yimg.com/ay/airplanepictures/when-you-see-zeros-fight-em-by-william-s-phillips-f4f-wildcat-2.jpg','https://airandspace.si.edu/sites/default/files/styles/slideshow_xlg/public/images/collection-objects/record-images/NASM-NASM-9A00201.jpg?itok=Y1C_Buoi');
INSERT INTO `models` (`model_name`,`description`,`completed`,`rawProjImgURL`,`completedProjImgURL`) VALUES
('Mitsubishi Type 97','IJA Chi-ha',false,'https://cdn3.volusion.com/bmfcy.fjqhr/v/vspfiles/photos/TM35137-2.jpg?v-cache=1533738074','https://www.globalsecurity.org/military/world/japan/images/type-97-chi-ha-image02.jpg');
-- ---
-- Table 'pictures'
-- 
-- ---

-- DROP TABLE IF EXISTS `pictures`;
		
-- CREATE TABLE `pictures` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `image_url` VARCHAR(200) NOT NULL,
--   `model_id` INTEGER NOT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `pictures` ADD FOREIGN KEY (model_id) REFERENCES `models` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `models` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `pictures` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `models` (`id`,`model_name`,`description`,`completed`) VALUES
-- ('','','','');
-- INSERT INTO `pictures` (`id`,`image_url`,`model_id`) VALUES
-- ('','','');
-- SELECT * FROM models LEFT JOIN pictures on models.id = pictures.model_id