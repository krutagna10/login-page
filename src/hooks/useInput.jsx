import { useReducer } from "react";

const initialValue = {
  value: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "value-change": {
      return { ...state, value: action.value };
    }
  }
}
function useInput() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handleValueChange(value) {
    dispatch({ type: "value-change", value: value });
  }

  return {
    value: state.value,
    handleValueChange: handleValueChange,
  };
}

export default useInput;
