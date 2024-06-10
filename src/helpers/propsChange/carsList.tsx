import { CarProps } from "src/store/features/adminCars/types";

interface InputCarProps {
  id: number;
  car_name: string;
  car_year: string;
  car_type: string;
  cargo_capacity: string;
  seats: string;
  car_class: string;
  price: string;
  car_images: CarImage[];
}

interface CarImage {
  id: number;
  car_id: number;
  created_at: string;
  updated_at: string;
  path: string;
}

export const extractPaths = (carImages: CarImage[]): string[] => {
  return carImages.map((image: CarImage) => image.path);
};

export const carListChangeKey = (data: InputCarProps[]): CarProps[] => {
  return data.map((item: InputCarProps) => ({
    id: item.id,
    carName: item.car_name,
    year: item.car_year,
    carType: item.car_type,
    cargoCapacity: item.cargo_capacity,
    seats: item.seats,
    carClass: item.car_class,
    price: item.price,
    images: extractPaths(item.car_images)
  }));
};
