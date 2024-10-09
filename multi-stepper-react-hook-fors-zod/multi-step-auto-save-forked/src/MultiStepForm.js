import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  saveStepData,
  nextStep,
  previousStep,
  setStepValidationStatus,
  resetForm,
} from "./formSlice";
import { step1Schema, step2Schema } from "./schemas";
import { mockResponse } from "./mockResponse";

const MultiStepForm = () => {
  const [direction, setDirection] = useState("next");
  const dispatch = useDispatch();
  const { stepData, currentStep, stepsValidation } = useSelector(
    (state) => state.form
  );

  const schema = currentStep === 1 ? step1Schema : step2Schema;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: stepData,
  });

  const allStepsValid = Object.values(stepsValidation).every(
    (curr) => curr === true
  );

  //submit
  const onSubmit = (data) => {
    dispatch(saveStepData(data)); // Guarda los datos en Redux

    console.log("allStepsValid: ", allStepsValid);

    if (direction === "next") {
      dispatch(nextStep());
    } else if (direction === "prev") {
      dispatch(previousStep());
    }
    if (allStepsValid) {
      alert("valid form");
    }
  };

  const resetFormState = () => {
    dispatch(resetForm());
    reset();
  };

  //initial load
  useEffect(() => {
    mockResponse(2).then((data) => {
      console.log("data: ", data);
      reset(data);
      dispatch(saveStepData(data));
    });
  }, [reset, dispatch]);

  //save step state
  useEffect(() => {
    dispatch(setStepValidationStatus({ step: currentStep, isValid }));
  }, [isValid, currentStep, dispatch]);

  return (
    <div>
      <h1>Paso {currentStep}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <>
            <div>
              <label>Nombre</label>
              <input {...register("firstName")} />
              {errors.firstName && (
                <p style={{ color: "red" }}>{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label>Apellido</label>
              <input {...register("lastName")} />
              {errors.lastName && (
                <p style={{ color: "red" }}>{errors.lastName.message}</p>
              )}
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div>
              <label>Email</label>
              <input {...register("email")} />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label>Teléfono</label>
              <input {...register("phoneNumber")} />
              {errors.phoneNumber && (
                <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
              )}
            </div>
          </>
        )}

        {currentStep < 2 && (
          <button type="submit" onClick={() => setDirection("next")}>
            Siguiente
          </button>
        )}
        {currentStep > 1 && (
          <button type="submit" onClick={() => setDirection("prev")}>
            Anterior
          </button>
        )}
      </form>

      <button disabled={!allStepsValid}>submit</button>
      <button onClick={resetFormState}>reset</button>
    </div>
  );
};

export default MultiStepForm;
