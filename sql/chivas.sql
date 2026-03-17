SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Base de datos: `LaboratoriosLalo`

-- --------------------------------------------------------

-- Tabla `users`

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(300) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

-- Tabla `jugadores`

CREATE TABLE `jugadores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `posicion` varchar(100) DEFAULT NULL,
  `imagen` varchar(300) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Datos iniciales

INSERT INTO `jugadores` (`id`, `nombre`, `posicion`, `imagen`) VALUES
(1, 'Tala Rangel', 'Portero', 'https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fchi%2Ffull%2FCHI_20250817_CHI_196865_Imago-1682444.webp&width=490&height=275'),
(2, 'Chicharito', 'Delantero', 'https://s.yimg.com/ny/api/res/1.2/ecpD7J8CpwR.YPCoPI8NPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2022-08/66e3d770-18f7-11ed-9ed3-6ba43a29946e');

-- Indexes

ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT

ALTER TABLE `jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

COMMIT;