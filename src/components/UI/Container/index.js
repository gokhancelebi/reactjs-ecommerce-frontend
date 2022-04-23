
const Container = ({ children, className, ...props }) => {
  return (
    <div className={`container max-w-7xl mx-auto flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;