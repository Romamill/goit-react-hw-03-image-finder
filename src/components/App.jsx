import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import MyLoader from './Loader/MyLoader';
import Modal from './Modal/Modal';
import axios from 'axios';

const API_KEY = '37990722-3d7325777fa7dcec3ffe4a675';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = async () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <AppContainer>
        <Searchbar onSubmit={handleSearchSubmit} />
        <ContentContainer>
          <ImageGallery images={images} onImageClick={openModal} />
          {isLoading && <MyLoader />}
          {!isLoading && images.length > 0 && (
            <LoadMoreButton onClick={loadMoreImages}>Load more</LoadMoreButton>
          )}
          {modalImage && <Modal image={modalImage} onClose={closeModal} />}
        </ContentContainer>
      </AppContainer>
    </div>
  );
};

export default App;
