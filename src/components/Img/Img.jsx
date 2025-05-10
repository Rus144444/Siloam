export const Img = ({ className, src, alt }) => {
  return (
    <div>
      <img className={className} src={src} alt={alt} />
    </div>
  );
};
