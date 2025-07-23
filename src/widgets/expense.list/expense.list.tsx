import { Box, Typography, Stack, Divider } from "@mui/material";
import dayjs from "dayjs";
import { useAppSelector } from "../../app/store";
import type { Expense } from "../../entities/expense/model/expenseSlice";

const groupByDate = (expenses: Expense[]) => {
  return expenses.reduce<Record<string, Expense[]>>((acc, exp) => {
    const date = dayjs(exp.date).format("YYYY-MM-DD");
    if (!acc[date]) acc[date] = [];
    acc[date].push(exp);
    return acc;
  }, {});
};

export const ExpenseList = () => {
  const expenses = useAppSelector((s) => s.expenses.list);
  const grouped = groupByDate(expenses);
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <Box>
      {Object.entries(grouped)
        .sort(([a], [b]) => (dayjs(b).isAfter(dayjs(a)) ? 1 : -1))
        .map(([date, exps]) => (
          <Box key={date} mb={2}>
            <Typography variant="h6">
              {dayjs(date).format("D MMMM YYYY")}
            </Typography>
            <Stack spacing={1} pl={2} mt={1}>
              {exps.map((exp) => (
                <Box key={exp.id} display="flex" justifyContent="space-between">
                  <Typography>
                    {exp.category}
                    {exp.subcategory && ` / ${exp.subcategory}`} — {exp.user}
                  </Typography>
                  <Typography fontWeight={500}>{exp.amount} ₽</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}

      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Итого: {total} ₽</Typography>
    </Box>
  );
};
