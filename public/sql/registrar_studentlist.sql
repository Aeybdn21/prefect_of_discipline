-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 28, 2023 at 03:55 PM
-- Server version: 10.5.16-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u476821515_SMS`
--

-- --------------------------------------------------------

--
-- Table structure for table `registrar_studentlist`
--

CREATE TABLE `registrar_studentlist` (
  `Student_ID` int(8) NOT NULL,
  `Lastname` varchar(15) DEFAULT NULL,
  `Firstname` varchar(25) DEFAULT NULL,
  `Middlename` varchar(25) DEFAULT NULL,
  `Suffix` varchar(8) DEFAULT NULL,
  `Email` varchar(75) DEFAULT NULL,
  `Gender` text DEFAULT NULL,
  `Age` int(5) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `Course` varchar(25) DEFAULT NULL,
  `Major` varchar(30) DEFAULT NULL,
  `Year_Level` varchar(250) DEFAULT NULL,
  `Section` varchar(25) DEFAULT NULL,
  `Citizenship` text DEFAULT NULL,
  `Contact_No` varchar(25) DEFAULT NULL,
  `Guardian` varchar(50) DEFAULT NULL,
  `Guardian_Contact` varchar(25) DEFAULT NULL,
  `Address` varchar(250) DEFAULT NULL,
  `Province` varchar(250) DEFAULT NULL,
  `Zip` varchar(15) DEFAULT NULL,
  `Last_School` varchar(65) DEFAULT NULL,
  `Academic_Year` varchar(50) DEFAULT NULL,
  `School_Type` varchar(20) DEFAULT NULL,
  `Student_Status` varchar(25) DEFAULT NULL,
  `Student_Type` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registrar_studentlist`
--

INSERT INTO `registrar_studentlist` (`Student_ID`, `Lastname`, `Firstname`, `Middlename`, `Suffix`, `Email`, `Gender`, `Age`, `birth_date`, `Course`, `Major`, `Year_Level`, `Section`, `Citizenship`, `Contact_No`, `Guardian`, `Guardian_Contact`, `Address`, `Province`, `Zip`, `Last_School`, `Academic_Year`, `School_Type`, `Student_Status`, `Student_Type`) VALUES
(2300001, 'Moraga', 'Jose', 'Salunga', 'Jr.', 'josemoragaezrael@gmail.com', 'Male', 21, '2001-07-10', 'BS Information Technology', 'Information Technology', '1st Year', NULL, 'Filipino', '09123', 'Lorna', '09123', 'FCM', 'NCR', '1118', 'CVA', '2018-2019', 'Private', 'Active', 'Freshmen'),
(2300002, 'Juntilla', 'Arnel', 'Fallurin', 'sd', '123@123', 'Male', 25, '2007-12-25', 'BSIT', '', '', NULL, 'filipino', '142415135', 'weff', '', 'sdfsdf', 'sdf', '1234', '', '', 'Select School Type', 'Active', 'Freshmen'),
(2300003, 'sdf', 'fsdf', 'sdf', 'f', 'fadf@fdaf', 'Female', 0, '0000-00-00', 'BS Information Technology', 'Information Technology', '1st Year', NULL, 'fsadfsadf', '123123123', 'fasdfasdf', '5', 'asdf', 'sdf', '13123', 'fdsfsdf', 'sadfsad', 'Public', 'Active', 'Freshmen'),
(2300005, 'Legaspi', 'Angelica', 'Paghubasan', '', 'legaspianglca12345@gmail.com', 'Female', 22, '2007-12-18', 'BS Information Technology', 'Information Technology', '1st Year', NULL, 'Filipino', '099999999999', 'HAHA', '099999999999', 'FCM', 'NCR', '2001', 'CVA', '2018-2019', 'Private', 'Active', 'New Student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registrar_studentlist`
--
ALTER TABLE `registrar_studentlist`
  ADD PRIMARY KEY (`Student_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
