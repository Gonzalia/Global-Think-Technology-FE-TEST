import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
  value: number;
}

export default function RatingStars({ value }: RatingProps) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ffc107" />);
    }
  }

  return <div style={{ display: "flex", gap: "4px" }}>{stars}</div>;
}
