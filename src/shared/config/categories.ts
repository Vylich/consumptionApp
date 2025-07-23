export type Subcategory = {
  key: string;
  name: string;
};

export type Category = {
  key: string;
  name: string;
  limit: number;
  subcategories?: Subcategory[];
};

export const categories: Category[] = [
  {
    key: "products",
    name: "Продукты",
    limit: 22500,
    subcategories: [
      { key: "food", name: "Еда" },
      { key: "household", name: "Быт" },
    ],
  },
  {
    key: "health",
    name: "Здоровье",
    limit: 5000,
    subcategories: [
      { key: "doctor", name: "Приём у врача" },
      { key: "medicines", name: "Лекарства" },
      { key: "lenses", name: "Линзы" },
    ],
  },
  {
    key: "office",
    name: "Кабинет",
    limit: 23000,
    subcategories: [
      { key: "rent", name: "Аренда" },
      { key: "consumables", name: "Расходники" },
      { key: "tax", name: "Налог" },
    ],
  },
  {
    key: "rent_and_ku",
    name: "Съем + ку",
    limit: 32000,
  },
  {
    key: "seasonal_clothes",
    name: "Сезонная одежда",
    limit: 2500,
  },
  {
    key: "connection",
    name: "Связь и интернет",
    limit: 1700,
    subcategories: [
      { key: "vpn", name: "VPN" },
      { key: "sim", name: "Симка" },
      { key: "wifi", name: "Wi-Fi" },
    ],
  },
  {
    key: "transport",
    name: "Транспорт",
    limit: 5300,
    subcategories: [
      { key: "ilya", name: "Илья" },
      { key: "sofiya", name: "Софья" },
    ],
  },
  {
    key: "beauty",
    name: "Красота",
    limit: 3000,
  },
  {
    key: "apartment_payment",
    name: "Платеж за квартиру",
    limit: 51500,
  },
];
