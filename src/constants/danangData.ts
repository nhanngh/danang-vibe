import type { Place, FoodItem } from "@/types";

export const bridges: Place[] = [
  {
    id: "1",
    name: "Cầu Rồng",
    description: "Cây cầu hình rồng biểu tượng của Đà Nẵng, phun lửa và nước vào cuối tuần",
    imageUrl: "/images/cau-rong.jpg",
    category: "bridge",
  },
  {
    id: "2",
    name: "Cầu Vàng",
    description: "Cây cầu trên đôi bàn tay khổng lồ nổi tiếng toàn thế giới tại Bà Nà Hills",
    imageUrl: "/images/cau-vang.jpg",
    category: "bridge",
  },
];

export const foods: FoodItem[] = [
  {
    id: "1",
    name: "Mì Quảng",
    description: "Món mì đặc trưng của miền Trung với nước dùng đậm đà",
    price: 35000,
    imageUrl: "/images/mi-quang.jpg",
  },
  {
    id: "2",
    name: "Bánh Tráng Cuốn Thịt Heo",
    description: "Đặc sản không thể bỏ qua khi đến Đà Nẵng",
    price: 45000,
    imageUrl: "/images/banh-trang.jpg",
  },
];
