// store/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepData: {}, // Datos de cada paso
  currentStep: 1, // El paso actual
  stepsValidation: { 1: false, 2: false },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveStepData: (state, action) => {
      state.stepData = { ...state.stepData, ...action.payload };
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      state.currentStep -= 1;
    },
    setStepValidationStatus: (state, action) => {
      const { step, isValid } = action.payload;
      state.stepsValidation[step] = isValid;
    },
    resetForm: (state) => {
      state.stepData = {};
      state.currentStep = 1;
      state.stepsValidation = { 1: false, 2: false };
    },
  },
});

export const {
  saveStepData,
  nextStep,
  previousStep,
  resetForm,
  setStepValidationStatus,
} = formSlice.actions;
export default formSlice.reducer;
