
const Container = ({ children, className, ...props }) => {
  return (
    <div className={`container w-full max-w-7xl mx-auto flex flex-col gap-5 my-5 px-5 xl:px-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;