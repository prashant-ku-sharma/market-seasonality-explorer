export const getColorForData = (data) => {
  const colorCoding = {
    profit: ["#d3f9d8", "#69f0ae", "#43a047", "#1b5e20"],
    loss: ["#f9c2c2", "#f66", "#e53935", "#b71c1c"],
    order: ["#e0d7ff", "#9b8cff", "#6a5acb", "#4b3fa4"],
  };

  if (!data) return "#eaebed";

  if (data.profit > 0) {
    if (data.profit < 100) return colorCoding.profit[0];
    if (data.profit < 500) return colorCoding.profit[1];
    if (data.profit < 1000) return colorCoding.profit[2];
    if (data.profit < 4000) return colorCoding.profit[3];
  }

  if (data.loss > 0) {
    if (data.loss < 100) return colorCoding.loss[0];
    if (data.loss < 500) return colorCoding.loss[1];
    if (data.loss < 1000) return colorCoding.loss[2];
    if (data.loss < 4000) return colorCoding.loss[3];
  }

  if (data.order) {
    if (data.order === 1) return colorCoding.order[0];
    if (data.order === 2) return colorCoding.order[1];
    if (data.order === 3) return colorCoding.order[2];
    if (data.order >= 5) return colorCoding.order[3];
  }
  return "#eaebed";
};
