-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2021 at 03:27 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ansv`
--

-- --------------------------------------------------------

--
-- Table structure for table `highlight`
--

CREATE TABLE `highlight` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header_title` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `highlight`
--

INSERT INTO `highlight` (`id`, `img`, `header_title`, `title`, `sub_title`, `content`, `url`, `updated_at`, `updated_by`) VALUES
(1, 'gioi-thieu-chung.png', 'VỀ CHÚNG TÔI', 'Giới thiệu chung', 'TNHH Thiết bị Viễn thông ANSV', 'Công ty TNHH Thiết bị Viễn thông ANSV được thành lập từ tháng 7 năm 1993 trong quan hệ hợp tác liên doanh giữa Tập đoàn Alcatel (nay là Alcatel-Lucent) với...', 've-chung-toi', '2021-11-01 11:46:36', 'levanthanh'),
(2, '5g_1.jpg', 'Viễn thông', 'Công nghệ mạng 5G', 'Đi cùng với thế giới', '<font color=\"#e67e22\"><b>ANSV</b></font> là đơn vị đầu tiên thực hiện các dự án triển khai mạng di động từ những năm 1993 tới nay, Cùng với cách mạng công nghiệp 4.0 và sự bùng nổ công nghệ thông tin...', 'chuyen-nganh-vien-thong', '2021-10-27 05:23:53', 'admin1'),
(3, 'chi_dao_dieu_hanh.jpg', 'GIẢI PHÁP', 'Trung tâm thông tin', 'Chỉ đạo điều hành', 'Trung tâm thông tin, chỉ đạo điều hành bao gồm: các dữ liệu số về tình hình biến động các chỉ số kinh tế - xã hội của địa phương, tỉnh, thành phố, quốc gia; các chỉ số...', 'cong-nghe-thong-tin', '2021-10-27 16:03:04', 'levanthanh');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `news_type` int(11) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `img`, `title`, `content`, `url`, `news_type`, `updated_at`, `updated_by`) VALUES
(1, 'hop-tac.jpg', 'VNPT và Nokia hợp tác về nghiên cứu và phát triển hạ tầng số', 'Theo thỏa thuận này, hai bên nhất trí tăng cường mối quan hệ hợp tác chiến lược để nâng cấp năng lực mạng đường trục, mạng lõi, phát triển nền tảng 4G, 5G, IOT,... hiện đại đáp ứng với nhu cầu quan trọng của một hạ tầng sô, phục vụ cho chuyển đổi số quốc gia.', 'javascript:void(0)', 1, '2021-10-21 14:46:04', 'levanthanh'),
(2, 'qr.jpg', 'Thống nhất mã QR dùng chung cho các nền tảng công nghệ...', 'Mỗi cá nhân sử dụng các nền tảng, ứng dụng phòng chống dịch Covid-19 được cấp duy nhất một mã QR cá nhân. Mã QR cá nhân có thể được sử dụng để cá nhân, tổ chức có thẩm quyền đọc và truy vấn các dữ liệu liên quan phục vụ công tác phòng, chống dịch, bệnh Covid-19.', 'javascript:void(0)', 1, '2021-10-19 16:30:21', 'nguyenvana'),
(3, 'toc-do-internet.jpg', 'Tốc độ Internet Việt Nam thấp hơn mức trung bình thế giới', 'Tốc độ mạng di động và băng thông rộng Việt Nam đứng thứ 58 và 59 thế giới, trong đó, chỉ số tải xuống thấp hơn mức tring bình.<br> Trong tháng 9, tốc độ Internet tại Việt Nam có thể sẽ không cải thiện do tuyến cáp AAE-1 gặp lỗi và tiếp tục bị ảnh hưởng từ sự cố với tuyến cáp AAG xảy ra hồi tháng 7.', 'javascript:void(0)', 1, '2021-10-19 16:30:21', 'abcxyz'),
(4, '5g.jpg', 'Đẩy nhanh việc triển khai và thương mại hóa 5G tại Việt Nam', 'Việc nghiên cứu, xây dựng và hoàn thiện các quy định hướng dẫn về tiêu chuẩn, quy chuẩn, là yêu cầu cấp thiết, cả đối với thiết bị, mạng lưới, hạ tầng, chất lược dịch vụ, các vấn đề an toàn an ninh mạng, góp phần nhanh chóng hoàn thiện môi trường quản lý, đẩy nhanh việc triển khai và thương mại hóa 5G tại Việt Nam.', 'javascript:void(0)', 1, '2021-10-19 16:30:21', 'thanh123'),
(5, 'mobile-money.jpg', 'Xem xét cấp phép thí điểm dịch vụ Mobile Money trong tháng 10', 'Mobile Money là hình thức thanh toán thuận tiện nhưng cũng đòi hỏi phải an toàn, tránh bị lợi dụng. Ngân hàng Nhà nước Việt Nam hy vọng trong tháng 10 sẽ cùng các Bộ TT&TT, Công an thống nhất hồ sơ của VNPT, Viettel và MobiFone. Khi đủ điều kiện và được 3 Bộ thống nhất, sẽ quyết định cho cấp phép để 3 đơn vị thí điểm Mobile Money.', 'javascript:void(0)', 1, '2021-11-01 14:12:08', 'levanthanh');

-- --------------------------------------------------------

--
-- Table structure for table `news_type`
--

CREATE TABLE `news_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news_type`
--

INSERT INTO `news_type` (`id`, `name`, `updated_at`, `updated_by`) VALUES
(1, 'Tin tức ICT', '2021-11-08 04:41:08', 'levanthanh'),
(2, 'Tin tức nội bộ', '2021-11-08 04:46:41', 'tranthanhnga'),
(3, 'Tin tức truyền thông', '2021-11-08 04:48:03', 'levanthanh'),
(4, 'Tin tức tuyển dụng', '2021-11-08 04:48:03', 'tranthanhnga');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `slideshow`
--

CREATE TABLE `slideshow` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `caption` varchar(50) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slideshow`
--

INSERT INTO `slideshow` (`id`, `img`, `caption`, `content`, `url`, `updated_at`, `updated_by`) VALUES
(1, 'our_company.jpg', 'ANSV_logo.png', '<font color=\"#FF6600\"><b>A</b></font>DVANCED\r\n<font color=\"#FF6600\"><b>N</b></font>ETWORK\r\n<font color=\"#FF6600\"><b>S</b></font>YSTEMS\r\n<font color=\"#FF6600\"><b>V</b></font>IETNAM<br>\r\nCOMPANY LIMITED', 've-chung-toi', '2021-10-13 08:38:38', 'levanthanh'),
(2, '5G.jpg', '5G', 'Đi cùng với thế giới', 'chuyen-nganh-vien-thong', '2021-11-01 10:53:20', 'levanthanh'),
(3, 'big-data-ai.jpeg', 'AI<br>Big Data', 'Ứng dụng toàn cầu', 'cong-nghe-thong-tin', '2021-11-01 08:58:48', 'levanthanh');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `employee_code` int(11) DEFAULT NULL,
  `enabled` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `display_name`, `employee_code`, `enabled`, `created_at`, `created_by`) VALUES
(1, 'levanthanh', '{noop}123456', 'Thành Lê', 102030405, 1, '2021-10-12 11:53:17', 'nguyenvana123'),
(2, 'kai', '{noop}123456', 'Đây là Kai', 23213132, 1, '2021-10-18 04:42:22', 'tranthanhnga'),
(3, 'sena', '{noop}123456', 'Đây là Sena', 213112313, 1, '2021-10-18 04:42:22', 'levanthanh'),
(4, 'tranthanhnga', '{noop}010203', 'Trần Thanh Nga', 123123123, 1, '2021-11-03 08:47:43', 'abcxyz');

-- --------------------------------------------------------

--
-- Table structure for table `users_roles`
--

CREATE TABLE `users_roles` (
  `id` int(11) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_roles`
--

INSERT INTO `users_roles` (`id`, `user`, `role`) VALUES
(1, 1, 1),
(2, 1, 2),
(4, 2, 2),
(5, 3, 2),
(6, 4, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `highlight`
--
ALTER TABLE `highlight`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_type` (`news_type`);

--
-- Indexes for table `news_type`
--
ALTER TABLE `news_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slideshow`
--
ALTER TABLE `slideshow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `_idx` (`user`),
  ADD KEY `dfdf_idx` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `highlight`
--
ALTER TABLE `highlight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `news_type`
--
ALTER TABLE `news_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `slideshow`
--
ALTER TABLE `slideshow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`news_type`) REFERENCES `news_type` (`id`);

--
-- Constraints for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `role` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
