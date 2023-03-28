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
-- Table structure for table `registrar_studentsection`
--

CREATE TABLE `registrar_studentsection` (
  `No` int(11) NOT NULL,
  `Section_ID` int(11) NOT NULL,
  `Student_ID` int(8) NOT NULL,
  `Lastname` varchar(15) NOT NULL,
  `Firstname` varchar(15) NOT NULL,
  `Middlename` varchar(15) DEFAULT NULL,
  `Course` varchar(15) NOT NULL,
  `Year_Level` int(4) NOT NULL,
  `Section` int(6) NOT NULL,
  `Semester` varchar(15) NOT NULL,
  `Major` varchar(15) DEFAULT NULL,
  `Academic_Year` varchar(25) NOT NULL,
  `Student_Type` varchar(20) NOT NULL,
  `Status` varchar(25) NOT NULL,
  `Register_Date` date NOT NULL DEFAULT current_timestamp(),
  `submitted_by` varchar(50) DEFAULT NULL,
  `qr_text` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registrar_studentsection`
--

INSERT INTO `registrar_studentsection` (`No`, `Section_ID`, `Student_ID`, `Lastname`, `Firstname`, `Middlename`, `Course`, `Year_Level`, `Section`, `Semester`, `Major`, `Academic_Year`, `Student_Type`, `Status`, `Register_Date`, `submitted_by`, `qr_text`) VALUES
(49, 15, 2300001, 'Moraga', 'Jose', 'Salunga', 'BSIT', 1, 11001, '1st', 'NULL', '2022-2023', 'New Student', 'Active', '2023-03-27', 'Record Officer', 'https://registrar.bcpsms.com/Record%20Officer/Section%20Management/COR.php?corid=2300001'),
(55, 26, 2300002, 'Juntilla', 'Arnel', 'Fallurin', 'BSIT', 2, 21001, '1st', 'NULL', '2022-2023', 'New Student', 'Active', '2023-03-28', 'Record Officer', 'https://registrar.bcpsms.com/Record%20Officer/Section%20Management/COR.php?corid=2300002'),
(56, 27, 2300003, 'sdf', 'fsdf', 'sdf', 'BSIT', 3, 31001, '1st', 'NULL', '2022-2023', 'New Student', 'Active', '2023-03-28', 'Record Officer', 'https://registrar.bcpsms.com/Record%20Officer/Section%20Management/COR.php?corid=2300003');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registrar_studentsection`
--
ALTER TABLE `registrar_studentsection`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registrar_studentsection`
--
ALTER TABLE `registrar_studentsection`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
