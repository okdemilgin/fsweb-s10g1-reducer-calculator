export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CHANGE_OPERATION";
export const MEMORY_PLUS = "CHANGE_OPERATION";
export const MEMORY_RECORD = "CHANGE_OPERATION";
export const MEMORY_CLEAR = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};


export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (ope) => {
  return { type: CHANGE_OPERATION, payload: ope };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY, payload: null };
};

export const memoryPlus = () => {
  return { type: MEMORY_PLUS };
};

export const memoryRecord = () => {
  return { type: MEMORY_RECORD };
};

export const memoryClear = (ope) => {
  return { type: MEMORY_CLEAR };
};