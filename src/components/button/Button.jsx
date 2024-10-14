const Button = ({ type, title, disable, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${type} border px-8 py-2 text-sm`}
      disabled={disable}
    >
      {title}
    </button>
  );
};

export default Button;
