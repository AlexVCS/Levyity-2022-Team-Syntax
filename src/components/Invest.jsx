import Card from "./Card";
import { Grid } from "@mui/material";
import { Weather } from "./Weather";

const sections = [
  {
    title: "Crypto",
    description: "$$$",
    size: 6,
  },
  { title: "Stocks", description: "$", size: 6 },
  { title: "h", description: "l", size: 12 },
];

// const cards = sections.map((section) => (
//   <Grid container item xs={4}>
//     <Weather />
//   </Grid>
// ));

function Live() {
  return (
    <div className="grid">
      <Weather />
    </div>
  );
}

export default Live;
