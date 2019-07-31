export interface Car {
    type: string;
    img: string;
    mobileName?: string;
    name: string;
}

export const allCar: Car[] = [
  { type: '4-DoorSedan', img: 'car-1.png', mobileName: 'Sedan', name: 'car' },
  { type: 'PickupTruck', img: 'car-2.png', name: 'truck' },
  { type: 'SportUtilityVehicle', img: 'car-3.png', mobileName: 'SUV', name: 'suv'},
  { type: 'Minivan', img: 'car-4.png', name: 'minivan' },
  { type: 'Hybrid/Electric', img: 'car-5.png', mobileName: 'Electric', name: 'electric' },
  { type: 'Exotic', img: 'car-6.png', name: 'exotic' },
];
