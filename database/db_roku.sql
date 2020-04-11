-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 11, 2020 at 07:46 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

DROP TABLE IF EXISTS `tbl_comments`;
CREATE TABLE IF NOT EXISTS `tbl_comments` (
  `comments_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `comments_name` varchar(125) NOT NULL,
  `comments_copy` text NOT NULL,
  `comments_rating` int(1) NOT NULL,
  `media_name` int(11) NOT NULL,
  PRIMARY KEY (`comments_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

DROP TABLE IF EXISTS `tbl_genre`;
CREATE TABLE IF NOT EXISTS `tbl_genre` (
  `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(125) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'action'),
(2, 'adventure'),
(3, 'comedy'),
(4, 'crime'),
(5, 'drama'),
(6, 'historical'),
(7, 'horror'),
(8, 'musical'),
(9, 'sciencefiction'),
(10, 'war'),
(11, 'western'),
(12, 'animation'),
(13, 'family'),
(14, 'fantasy'),
(15, 'romance'),
(16, 'thriller');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(125) NOT NULL,
  `cover` varchar(75) NOT NULL DEFAULT 'title.jpg',
  `year` varchar(5) NOT NULL,
  `runtime` varchar(25) NOT NULL,
  `description` text NOT NULL,
  `source` varchar(75) NOT NULL DEFAULT 'title.mp4',
  `rating` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`id`, `title`, `cover`, `year`, `runtime`, `description`, `source`, `rating`) VALUES
(1, 'Singin\' in the Rain', 'singinintherain.jpg', '1952', '1h 43m', 'A silent film production company and cast make a difficult transition to sound.', 'singinintherain.mp4', 0),
(2, 'Lady and the Tramp', 'ladyandthetramp.jpg', '1955', '1h 16m', 'The romantic tale of a sheltered uptown Cocker Spaniel dog and a streetwise downtown Mutt.', 'ladyandthetramp.mp4', 0),
(3, 'Rebel Without a Cause', 'rebelwithoutacause.jpg', '1955', '1h 51m', 'A rebellious young man with a troubled past comes to a new town, finding friends and enemies.', 'rebelwithoutacause.mp4', 1),
(4, 'The Sound of Music', 'soundofmusic.jpg', '1965', '2h 52m', 'A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.', 'soundofmusic.mp4', 0),
(5, 'Psycho', 'psycho.jpg', '1960', '1h 49m', 'A Phoenix secretary embezzles forty thousand dollars from her employer\'s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.', 'psycho.mp4', 1),
(6, 'Planet of the Apes', 'planetoftheapes.jpg', '1968', '1h 52m', 'An astronaut crew crash-lands on a planet in the distant future where intelligent talking apes are the dominant species, and humans are the oppressed and enslaved.', 'planetoftheapes.mp4', 0),
(7, 'Alien', 'alien.jpg', '1979', '1h 57m', 'After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.', 'alien.mp4', 1),
(8, 'Jaws', 'jaws.jpg', '1975', '2h 4m', 'When a killer shark unleashes chaos on a beach community, it\'s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', 'jaws.mp4', 1),
(9, 'Willy Wonka & the Chocolate Factory', 'willywonka.jpg', '1971', '1h 40m', 'A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka\'s mysterious chocolate factory.', 'willywonka.mp4', 0),
(10, 'The Breakfast Club', 'breakfastclub.jpg', '1985', '1h 37m', 'Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.', 'breakfastclub.mp4', 1),
(11, 'The Princess Bride', 'princessbride.jpg', '1987', '1h 38m', 'While home sick in bed, a young boy\'s grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.', 'princessbride.mp4', 0),
(12, 'E.T. the Extra Terrestrial', 'et.jpg', '1982', '1h 55m', 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.', 'et.mp4', 0),
(13, 'The Lion King', 'lionking.jpg', '1994', '1h 28m', 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father\'s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', 'lionking.mp4', 0),
(14, 'Clueless', 'clueless.jpg', '1995', '1h 37m', 'A rich high school student tries to boost a new pupil\'s popularity, but reckons without affairs of the heart getting in the way.', 'clueless.mp4', 1),
(15, 'Fight Club', 'fightclub.jpg', '1999', '2h 19m', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.', 'fightclub.mp4', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_genre`
--

DROP TABLE IF EXISTS `tbl_mov_genre`;
CREATE TABLE IF NOT EXISTS `tbl_mov_genre` (
  `mov_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movies_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL,
  PRIMARY KEY (`mov_genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mov_genre`
--

INSERT INTO `tbl_mov_genre` (`mov_genre_id`, `movies_id`, `genre_id`) VALUES
(1, 1, 3),
(2, 1, 8),
(3, 1, 15),
(4, 2, 2),
(5, 2, 3),
(6, 2, 5),
(7, 2, 12),
(8, 2, 13),
(9, 2, 15),
(10, 3, 5),
(11, 4, 5),
(12, 4, 8),
(13, 4, 13),
(14, 4, 15),
(15, 5, 7),
(16, 5, 16),
(17, 6, 2),
(18, 6, 9),
(19, 7, 7),
(20, 7, 9),
(21, 8, 2),
(22, 8, 5),
(23, 8, 16),
(24, 9, 8),
(25, 9, 13),
(26, 9, 14),
(27, 10, 3),
(28, 10, 5),
(29, 11, 2),
(30, 11, 13),
(31, 11, 14),
(32, 11, 15),
(33, 12, 9),
(34, 12, 13),
(35, 13, 2),
(36, 13, 5),
(37, 13, 8),
(38, 13, 12),
(39, 13, 13),
(40, 14, 3),
(41, 14, 15),
(42, 15, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

DROP TABLE IF EXISTS `tbl_music`;
CREATE TABLE IF NOT EXISTS `tbl_music` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(125) NOT NULL,
  `year` varchar(5) NOT NULL,
  `cover` varchar(75) NOT NULL DEFAULT 'title.jpg',
  `runtime` varchar(25) NOT NULL,
  `artist` varchar(125) NOT NULL,
  `source` varchar(75) NOT NULL DEFAULT 'title.mp3',
  `rating` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`id`, `title`, `year`, `cover`, `runtime`, `artist`, `source`, `rating`) VALUES
(1, 'Love Me Tender', '1956', 'lovemetender.jpg', '2m 46s', 'Elvis Preseley', 'lovemetender.mp3', 0),
(2, 'Learnin\' the Blues', '1955', 'learnintheblues.jpg', '3m 26s', 'Frank Sinatra', 'learnintheblues.mp3', 0),
(3, 'I Saw Mommy Kissing Santa Claus', '1952', 'mommykissingsanta.jpg', '2m 31s', 'Jimmy Boyd', 'mommykissingsanta.mp3', 0),
(4, 'The Loco-Motion', '1962', 'locomotion.jpg', '2m 32s', 'Little Eva', 'locomotion.mp3', 0),
(5, 'I\'m a Believer', '1967', 'believer.jpg', '2m 47s', 'The Monkees', 'believer.mp3', 0),
(6, 'Good Vibrations', '1966', 'goodvibrations.jpg', '3m 35s', 'The Beach Boys', 'goodvibrations.mp3', 0),
(7, 'Stayin\' Alive', '1977', 'stayinalive.jpg', '4m 10s', 'The Bee Gees', 'stayinalive.mp3', 0),
(8, 'Dancing Queen', '1976', 'dancingqueen.jpg', '3m 52s', 'ABBA', 'dancingqueen.mp3', 0),
(9, 'I\'ll Be There', '1970', 'bethere.jpg', '4m 16s', 'The Jackson 5', 'bethere.mp3', 0),
(10, 'Another One Bites the Dust', '1980', 'bitesthedust.jpg', '3m 43s', 'Queen', 'bitesthedust.mp3', 0),
(11, 'Every Breath You Take', '1983', 'breathyoutake.jpg', '3m 49s', 'The Police', 'breathyoutake.mp3', 0),
(12, 'Beat It', '1982', 'beatit.jpg', '4m 59s', 'Michael Jackson', 'beatit.mp3', 0),
(13, 'U Can\'t Touch This', '1990', 'touchthis.jpg', '4m 16s', 'MC Hammer', 'touchthis.mp3', 0),
(14, 'My Name Is', '1999', 'mynameis.jpg', '4m 9s', 'Eminem', 'mynameis.mp3', 1),
(15, 'All Star', '1999', 'allstar.jpg', '3m 57s', 'Smash Mouth', 'allstar.mp3', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

DROP TABLE IF EXISTS `tbl_tv`;
CREATE TABLE IF NOT EXISTS `tbl_tv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(125) NOT NULL,
  `cover` varchar(25) NOT NULL DEFAULT 'title.jpg',
  `year` varchar(5) NOT NULL,
  `runtime` varchar(25) NOT NULL,
  `description` text NOT NULL,
  `source` varchar(75) NOT NULL DEFAULT 'title.mp4',
  `rating` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`id`, `title`, `cover`, `year`, `runtime`, `description`, `source`, `rating`) VALUES
(1, 'I Love Lucy', 'ilovelucy.jpg', '1951', '23m', 'Join Lucille Ball and her singer husband Ricky Ricardo, along with their best friends and landlords Fred Mertz and Ethel Mertz in their everyday life happenings. ', 'ilovelucy.mp4', 0),
(2, 'Gunsmoke', 'gunsmoke.jpg', '1955', '26m', 'Western series about the adventures of U.S. Marshal Matt Dillon and the citizenry of Dodge City, Kansas. Watch him restore peace and win over the love of a woman.', 'gunsmoke.mp4', 1),
(3, 'The Mickey Mouse Club', 'mickey.jpg', '1955', '1h', 'Who wants to dance, sing and play? Definitely you! Join Mickey Mouse and his fan club in a fun, entertaining show. Get ready for skits, musical numbers and guest stars.', 'mickey.mp4', 0),
(4, 'Hogan\'s Heroes', 'hogansheroes.jpg', '1965', '25m', 'The inmates of a German World War II prisoner of war camp conduct an espionage and sabotage campaign right under the noses of their warders.', 'hogansheroes.mp4', 1),
(5, 'Bewitched', 'bewitched.jpg', '1964', '25m', 'A witch married to an ordinary man cannot resist using her magic powers to solve the problems her family faces.', 'bewitched.mp4', 0),
(6, 'Sesame Street', 'sesamestreet.jpg', '1969', '1h', 'On a special inner city street, the inhabitants, human and muppet, teach preschool subjects with comedy, cartoons, games, and songs.', 'sesamestreet.mp4', 0),
(7, 'Charlie\'s Angels', 'charliesangels.jpg', '1976', '48m', 'A wealthy mystery man named Charlie runs a detective agency via a speakerphone and his personal assistant, John Bosley. His detectives are three beautiful women, who end up in a variety of difficult situations.', 'charliesangels.mp4', 1),
(8, 'Emergency', 'emergency.jpg', '1972', '1h', 'The crew of Los Angeles County Fire Department Station 51, particularly the paramedic team, and Rampart Hospital respond to emergencies in their operating area.', 'emergency.mp4', 0),
(9, 'The Addams Family', 'addamsfamily.jpg', '1973', '30m', 'The misadventures of a blissfully macabre but extremely loving family. They take delight in most of the things that \"normal\" people would be terrified of.', 'addamsfamily.mp4', 0),
(10, 'Family Ties', 'familyties.jpg', '1982', '30m', 'Chronicles liberal ex-hippies Steven and Elyse Keaton, their conservative son Alex, daughters Mallory and Jennifer, and later, youngest child Andrew.', 'fmailyties.mp4', 0),
(11, 'Miami Vice', 'miamivice.jpg', '1984', '48m', 'Resplendent with authentic 1980\'s music, fashion and vibe, \"Miami Vice\" follows two undercover detectives and their extended team through the mean streets of Miami.', 'miamivice.mp4', 1),
(12, 'Inspector Gadget', 'inspectorgadget.jpg', '1983', '22m', 'A bumbling bionic police inspector stumbles about on his cases, while his niece and dog secretly do the real investigative work.', 'inspectorgadget.mp4', 0),
(13, 'The Fresh Prince of Bel-Air', 'freshprince.jpg', '1990', '22m', 'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.', 'freshprince.mp4', 0),
(14, 'Saturday Night Live', 'saturdaynightlive.jpg', '1995', '1h 30m', 'A famous guest host stars in parodies and sketches created by the cast of this witty show. Who will be on the show today?', 'saturdaynightlive.mp4', 1),
(15, 'Arthur', 'arthur.jpg', '1996', '29m', 'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.', 'arthur.mp4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(30) DEFAULT NULL,
  `lname` varchar(30) DEFAULT NULL,
  `uname` varchar(30) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `isadmin` tinyint(1) DEFAULT NULL,
  `isadult` tinyint(1) DEFAULT NULL,
  `permissions` tinyint(4) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`ID`, `fname`, `lname`, `uname`, `avatar`, `isadmin`, `isadult`, `permissions`, `password`) VALUES
(1, 'Ariana', 'Blake', 'ari', 'user_5_profile.jpg', 1, 1, 5, '123'),
(2, 'Hillary', 'Strong', 'hillary', 'user_4_profile.jpg', 1, 0, 5, 'password');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
