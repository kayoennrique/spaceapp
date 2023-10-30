import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerBackground from './assets/banner.png';
import Gallery from "./components/Gallery";
import photos from './photos.json';
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentGallery = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)
  const [photoWithZoom, setPhotoWithZoom] = useState(null)

  useEffect(() => {
      const photosFiltered = photos.filter(photo => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle = !filter || photo.title.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })
    setGalleryPhotos(photosFiltered)
  }, [filter, tag])

  const whenToggleFavorite = (photo) => {
    if (photo.id === photoWithZoom?.id) {
      setPhotoWithZoom({
        ...photoWithZoom,
        favorite: !photoWithZoom.favorite
      })
    }
    setGalleryPhotos(galleryPhotos.map(galleryPhotos => {
      return {
        ...galleryPhotos,
        favorite: galleryPhotos.id === photo.id ? !photo.favorite : galleryPhotos.favorite
      }
    }))
  }
  
  return (
       
      <GradientBackground>
        <GlobalStyles />
        <AppContainer>
          <Header
          filter={filter}
          setFilter={setFilter}
          />
          <MainContainer>
            <SideBar />
            <ContentGallery>
              <Banner
              backgroundImage={bannerBackground}
              text="A galeria mais completa de fotos do espaço!"
              />
              <Gallery 
                photos={galleryPhotos}
                toSelectedPhoto={photo => setPhotoWithZoom(photo)} 
                whenToggleFavorite={whenToggleFavorite}                
                setTag={setTag}
              />
            </ContentGallery>
          </MainContainer>
        </AppContainer>
        <ModalZoom 
          photo={photoWithZoom}
          toClose={() => setPhotoWithZoom(null)}
          whenToggleFavorite={whenToggleFavorite}
        />
        <Footer />
      </GradientBackground>
      
    )
  }
  
  export default App;