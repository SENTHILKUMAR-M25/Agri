

// import { createSlice } from "@reduxjs/toolkit";
// import { cropPrices } from "../../PriceChart/PriceData";

// const priceSlice = createSlice({
//   name: "prices",
//   initialState: {
//     crops: cropPrices // FULL HISTORY
//   },
//   reducers: {
//     addCropPrice: (state, action) => {
//       const { name, location, price } = action.payload;

//       // Find LAST price of same crop
//       const previous = [...state.crops]
//         .reverse()
//         .find(
//           (c) => c.name === name && c.location === location
//         );

//       let percentage = 0;
//       let trend = "neutral";

//       if (previous) {
//         percentage = (
//           ((price - previous.price) / previous.price) *
//           100
//         ).toFixed(2);

//         trend = percentage >= 0 ? "up" : "down";
//       }

//       state.crops.unshift({
//         id: Date.now(),
//         ...action.payload,
//         percentage: Number(percentage),
//         trend
//       });
//     }

//   }
// });

// export const { addCropPrice } = priceSlice.actions;
// export default priceSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { cropPrices } from "../../PriceChart/PriceData";

const priceSlice = createSlice({
  name: "prices",
  initialState: {
    crops: cropPrices // FULL HISTORY (latest first)
  },
  reducers: {
    addCropPrice: (state, action) => {
      const { name, location, price } = action.payload;

      // Find MOST RECENT previous price
      const previous = state.crops.find(
        (c) => c.name === name && c.location === location
      );

      let percentage = 0;
      let trend = "neutral";

      if (previous && previous.price > 0) {
        percentage = (
          ((price - previous.price) / previous.price) *
          100
        ).toFixed(2);

        trend = percentage >= 0 ? "up" : "down";
      }

      // Add NEW entry but keep history
      state.crops.unshift({
        id: Date.now(),
        ...action.payload,
        percentage: Number(percentage),
        trend
      });
    }
  }
});

export const { addCropPrice } = priceSlice.actions;
export default priceSlice.reducer;
