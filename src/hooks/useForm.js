import { useState } from "react";

const useForm = (initialState, onSubmit) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useForm;
