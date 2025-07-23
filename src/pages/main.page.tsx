import { Container, Typography, Divider } from "@mui/material";
import { Dashboard } from "../widgets/Dashboard/Dashboard";
import { ExpenseForm } from "../features/ui/expense.form";
import { ExpenseList } from "../widgets/expense.list/expense.list";

export const MainPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" mb={3}>
        Калькулятор расходов
      </Typography>

      <Dashboard />

      <Divider sx={{ my: 4 }} />

      <ExpenseForm />

      <Divider sx={{ my: 4 }} />

      <ExpenseList />
    </Container>
  );
};
