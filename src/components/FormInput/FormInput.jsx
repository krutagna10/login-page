function FormInput({ className, type, placeholder }) {
  return (
    <input
      className={`form__input ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
}