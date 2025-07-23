import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Expense = {
  id: string;
  amount: number;
  date: string; // ISO
  category: string;
  subcategory?: string;
  user: "ilya" | "sofia";
};

type ExpensesState = {
  list: Expense[];
};

const initialState: ExpensesState = {
  list: [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Omit<Expense, "id">>) => {
      const newExpense: Expense = {
        id: crypto.randomUUID(),
        ...action.payload,
      };
      state.list.push(newExpense);
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((exp) => exp.id !== action.payload);
    },
    clearExpenses: (state) => {
      state.list = [];
    },
  },
});

export const { addExpense, removeExpense, clearExpenses } =
  expensesSlice.actions;
export default expensesSlice;
