import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [formState, setformState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value
    });
  };

  const onClickReset = () => {
    setformState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onClickReset
  }
}
