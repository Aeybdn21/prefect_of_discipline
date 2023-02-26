-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2023 at 03:04 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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
  `Register_Date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registrar_studentsection`
--

INSERT INTO `registrar_studentsection` (`No`, `Section_ID`, `Student_ID`, `Lastname`, `Firstname`, `Middlename`, `Course`, `Year_Level`, `Section`, `Semester`, `Major`, `Academic_Year`, `Student_Type`, `Register_Date`) VALUES
(1, 1, 19018110, 'Dela Cruz', 'Kenneth', 'Gracia', 'BSIT', 4, 41001, '1st', 'IM', '2022-2023', 'Regular', '2023-02-01'),
(2, 1, 19018111, 'Villario', 'John Harold', 'Montalban', 'BSIT', 4, 41001, '1st', 'IM', '2022-2023', 'Regular', '2023-02-04'),
(3, 1, 19018112, 'Nattan', 'Rhea', 'Aquino', 'BSIT', 4, 41001, '1st', 'IM', '2022-2023', 'Regular', '2023-02-04'),
(4, 4, 19018113, 'Grande', 'Teresa', 'Amar', 'BSED', 1, 11001, '1st', '', '2022-2023', 'Regular', '2023-02-21');

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
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
