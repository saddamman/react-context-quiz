import { cn } from "../../utils/utils";

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        `bg-pink-600 text-white text-sm rounded-md py-3 px-4`,
        props.className
      )}
    >
      {children}
    </button>
  );
};
