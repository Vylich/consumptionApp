import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

type Subcategory = {
  key: string;
  name: string;
  spent: number;
};

type CategoryCardProps = {
  name: string;
  spent: number;
  limit: number;
  subcategories?: Subcategory[];
};

export const CategoryCard = ({
  name,
  spent,
  limit,
  subcategories,
}: CategoryCardProps) => {
  const percent = Math.min((spent / limit) * 100, 100);

  const formattedSpent = Number(spent).toLocaleString("ru-RU");

  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color={spent > limit ? "error" : "text.secondary"}>
          Потрачено: {formattedSpent} ₽ из {limit.toLocaleString("ru-RU")} ₽
        </Typography>
        <Box sx={{ mt: 1, mb: 1 }}>
          <LinearProgress variant="determinate" value={percent} />
        </Box>

        {subcategories && subcategories.length > 0 && (
          <List dense>
            {subcategories.map((sub) => {
              const subPercent = Math.min((sub.spent / limit) * 100, 100);
              return (
                <ListItem key={sub.key} sx={{ pl: 2 }}>
                  <ListItemText
                    primary={`${sub.name} — ${sub.spent} ₽`}
                    secondary={
                      <LinearProgress
                        variant="determinate"
                        value={subPercent}
                        sx={{ height: 6, borderRadius: 2 }}
                      />
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
