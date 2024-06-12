export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className=" bg-pink-600	 text-white text-sm rounded-md py-3 px-4"
    >
      {children}
    </button>
  );
};
