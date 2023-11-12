import Image from 'next/image';

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.src} alt={image.alt} width={500} height={300} />
          <p>{image.tag}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;