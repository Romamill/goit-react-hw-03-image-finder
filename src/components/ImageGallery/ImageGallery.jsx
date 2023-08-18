import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 20px;
`;

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryContainer>
      {images.map(image => (
        <img
          key={image.id}
          src={image.webformatURL}
          alt=""
          onClick={() => onImageClick(image)}
        />
      ))}
    </ImageGalleryContainer>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;