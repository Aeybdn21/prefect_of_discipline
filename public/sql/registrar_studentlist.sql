-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2023 at 04:26 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smsregistrar-college`
--

-- --------------------------------------------------------

--
-- Table structure for table `registrar_studentlist`
--

CREATE TABLE `registrar_studentlist` (
  `Student_ID` int(8) NOT NULL,
  `Lastname` varchar(15) NOT NULL,
  `Firstname` varchar(25) NOT NULL,
  `Middlename` varchar(25) NOT NULL,
  `Suffix` varchar(8) DEFAULT NULL,
  `Email` varchar(75) DEFAULT NULL,
  `Gender` text NOT NULL,
  `Age` int(3) NOT NULL,
  `Birthday` date NOT NULL,
  `Course` varchar(25) NOT NULL,
  `Major` varchar(30) DEFAULT NULL,
  `Civil Status` text NOT NULL,
  `Citizenship` text NOT NULL,
  `Address_No` varchar(120) NOT NULL,
  `Barangay` varchar(12) NOT NULL,
  `Municipality` varchar(30) NOT NULL,
  `Contact_No` bigint(11) DEFAULT NULL,
  `Guardian` varchar(50) NOT NULL,
  `Guardian_Contact` bigint(11) NOT NULL,
  `Guardian_Occu` varchar(25) NOT NULL,
  `Last_School` varchar(65) NOT NULL,
  `Year_Start` int(5) NOT NULL,
  `Year_End` int(5) NOT NULL,
  `School_Type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registrar_studentlist`
--

INSERT INTO `registrar_studentlist` (`Student_ID`, `Lastname`, `Firstname`, `Middlename`, `Suffix`, `Email`, `Gender`, `Age`, `Birthday`, `Course`, `Major`, `Civil Status`, `Citizenship`, `Address_No`, `Barangay`, `Municipality`, `Contact_No`, `Guardian`, `Guardian_Contact`, `Guardian_Occu`, `Last_School`, `Year_Start`, `Year_End`, `School_Type`) VALUES
(19018110, 'Dela Cruz', 'Kenneth', 'Gracia', NULL, 'KennethDelaCruz01@gmail.com', 'Male', 22, '2001-02-06', 'BSIT', 'IM', 'Single', 'Filipino', 'Blk 15, Lot2 Santol St. ', '12', 'Quezon City', 9635478951, 'Arnel Dela Cruz', 9873215478, 'Construction Worker', 'Our Lady of Fatima University', 2018, 2019, 'Private'),
(19018111, 'Villario', 'John Harold', 'Montalban', NULL, 'JohnHarold@gmail.com', 'Male', 20, '2003-02-01', 'BSIT', 'IM', 'Single', 'Filipino', 'Blk 12, Lot 3 Yellow Bell', '172', 'Caloocan City', 9265478412, 'Jim Villario', 9235147285, 'Mechanic', 'Bagong Silang High School', 2018, 2019, 'Public'),
(19018112, 'Nattan', 'Rhea', 'Aquino', NULL, 'RheaNattan@gmail.com', 'Female', 20, '2003-01-16', 'BSIT', 'IM', 'Single', 'Filipino', 'Blk 8, Lot 2 Santa Maria St.', '4', 'Valenzuela City', 9213682547, 'Maria Nattan', 9356228751, 'House Wife', 'Bestlink College of the Philippines', 2018, 2019, 'Private'),
(19018113, 'Grande', 'Teresa', 'Amar', NULL, 'TeresaGrande@gmail.com', 'Female', 21, '2021-01-30', 'BSED', NULL, 'Single', 'Filipino', 'New Street ', '12', 'Valenzuela City', 9253615782, 'Andrea Grande', 9254128760, 'House Wife', 'Valenzuela High School', 2016, 2018, 'Public');

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
