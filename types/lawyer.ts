export interface Lawyer {
  id: number;
  name: string;
  about: string;
  website: string;
  phone: string;
  email: string;
  isFeatured: boolean;
  yearOfExperience: number;
  lawFirmId: number;
  lawFirmName: string;
  createdAt: Date;
  updatedAt: Date;
}
