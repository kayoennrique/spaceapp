import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerBackground from './assets/banner.png';
import Gallery from "./components/Gallery";
import photos from './photos.json';
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
 width: 1440px;
 margin: 0 auto;
 max-width: 100%;
`;

const MainContainer = styled.main`
display: flex;
gap: 24px;
`;

const ContentGallery = styled.section`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
`;



const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [photoSelected, setPhotoSelected] = useState(null);
  const whenToggleFavorite = (photo) => {
    if (photo.id === photoSelected?.id) {
      setPhotoSelected({
        ...photoSelected,
        favorite: !photoSelected.favorite
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
          <Header />
          <MainContainer>
            <SideBar />
            <ContentGallery>
              <Banner
                text="A galeria mais completa de fotos do espaço!"
                backgroundImage={bannerBackground}
              />
              <Gallery 
                toSelectedPhoto={photo => setPhotoSelected(photo)} 
                whenToggleFavorite={whenToggleFavorite}
                photos={galleryPhotos}
              />
            </ContentGallery>
          </MainContainer>
        </AppContainer>
        <ModalZoom 
          photo={photoSelected}
          toClose={() => setPhotoSelected(null)}
          whenToggleFavorite={whenToggleFavorite}
        />
      </GradientBackground>
    )
  }
  
  export default App;