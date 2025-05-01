import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  widget: {
    widgets: [],
  },
};

export const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const newWidget = action.payload;
      if (!state.widget.widgets.includes(newWidget)) {
        state.widget.widgets.push(newWidget);
      }
    },
    removeWidget: (state, action) => {
      const widgetToRemove = action.payload;
      state.widget.widgets = state.widget.widgets.filter(
        (w) => w !== widgetToRemove
      );
    },
  },
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;