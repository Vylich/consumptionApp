import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";
import { categories } from "../../../shared/config/categories";

export const selectSpentByCategoryWithSubs = createSelector(
  (state: RootState) => state.expenses.list,
  (expenses) => {
    // Создаём словарь с накоплениями
    const spentMap: Record<string, number> = {};

    expenses.forEach(({ amount, category, subcategory }) => {
      const key = subcategory || category; // если есть подкатегория — считаем по ней
      if (!spentMap[key]) spentMap[key] = 0;
      spentMap[key] += amount;
    });

    // Формируем структуру с подкатегориями
    return categories.map((cat) => {
      const subSpent =
        cat.subcategories?.map((sub) => ({
          key: sub.key,
          name: sub.name,
          spent: spentMap[sub.key] || 0,
        })) || [];

      // Считаем общую сумму по категории как сумму подкатегорий или по категории напрямую
      const spentTotal =
        subSpent.length > 0
          ? subSpent.reduce((sum, s) => sum + s.spent, 0)
          : spentMap[cat.key] || 0;

      return {
        key: cat.key,
        name: cat.name,
        limit: cat.limit,
        spent: Number(spentTotal),
        subcategories: subSpent,
      };
    });
  },
);
