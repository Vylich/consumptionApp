import { FC, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { useAppDispatch } from "../../app/store";
import { categories, type Category } from "../../shared/config/categories";
import { addExpense } from "../../entities/expense/model/expenseSlice";

type FormValues = {
  amount: number;
  date: Dayjs;
  category: string;
  subcategory?: string;
  user: "ilya" | "sofia";
};

export const ExpenseForm: FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      date: dayjs(),
      user: "ilya",
    },
  });

  const dispatch = useAppDispatch();

  const selectedCategory = categories.find(
    (cat: Category) => cat.key === watch("category"),
  );

  const onSubmit = (data: FormValues) => {
    dispatch(addExpense({ ...data, date: data.date.toISOString() }));
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} p={2}>
      <Typography variant="h6" gutterBottom>
        Добавить трату
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Сумма"
          type="number"
          {...register("amount", { required: true, min: 1 })}
          error={!!errors.amount}
          helperText={errors.amount && "Введите сумму больше 0"}
        />

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Дата"
              value={field.value}
              onChange={(newValue) => field.onChange(newValue)}
            />
          )}
        />

        <TextField
          select
          label="Категория"
          defaultValue=""
          {...register("category", { required: true })}
        >
          {categories.map((cat: Category) => (
            <MenuItem key={cat.key} value={cat.key}>
              {cat.name}
            </MenuItem>
          ))}
        </TextField>

        {selectedCategory?.subcategories?.length > 0 && (
          <TextField
            select
            label="Подкатегория"
            defaultValue=""
            {...register("subcategory")}
          >
            {selectedCategory.subcategories.map(
              (sub: Category["subcategories"]) => (
                <MenuItem key={sub.key} value={sub.key}>
                  {sub.name}
                </MenuItem>
              ),
            )}
          </TextField>
        )}

        <TextField
          select
          label="Пользователь"
          {...register("user", { required: true })}
        >
          <MenuItem value="ilya">Илья</MenuItem>
          <MenuItem value="sofia">Софья</MenuItem>
        </TextField>

        <Button type="submit" variant="contained">
          Добавить
        </Button>
      </Stack>
    </Box>
  );
};
