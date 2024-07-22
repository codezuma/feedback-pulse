
const Logo = ({ className }: PropsWithClassName) => {
  return (
    <div className={className}>
      <img src="/images/logo.svg" className="h-8" alt="Logo" />
    </div>
  );
};

export default Logo;
