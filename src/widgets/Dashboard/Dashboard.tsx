import { Box, Typography, Grid, Paper } from "@mui/material";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useAppSelector } from "../../app/store";
import { selectSpentByCategoryWithSubs } from "../../entities/expense/model/selectors";

export const Dashboard = () => {
  const categories = useAppSelector(selectSpentByCategoryWithSubs);

  return (
    <Grid container spacing={2}>
      {categories.map(({ key, name, spent, limit, subcategories }) => (
        <Grid item xs={12} sm={6} md={4} key={key}>
          <CategoryCard
            name={name}
            spent={spent}
            limit={limit}
            subcategories={subcategories}
          />
        </Grid>
      ))}
    </Grid>
  );
};
