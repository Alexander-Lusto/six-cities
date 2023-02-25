interface PropertyImageWrapper {
  src: string;
}

function ImageWrapper({ src }: PropertyImageWrapper) {
  return (
    <div className="property__image-wrapper" key={src}>
      <img className="property__image" src={src} alt="Photo studio" />
    </div>
  );
}

export default ImageWrapper;
