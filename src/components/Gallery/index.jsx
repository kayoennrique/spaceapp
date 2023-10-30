import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";

const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Gallery = ({ photos = [], setTag, toSelectedPhoto, whenToggleFavorite }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GalleryContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ImagesContainer>
                        {photos.map(photo => <Image
                            photo={photo} 
                            key={photo.id}
                            toRequestedZoom={toSelectedPhoto}
                            whenToggleFavorite={whenToggleFavorite}
                        />)}
                    </ImagesContainer>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    )
}

export default Gallery;