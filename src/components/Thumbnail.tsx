import styled from "styled-components";

const Wrapper = styled.div``;

const Img = styled.img`
  max-width: 100%;
`;

type ThumbnailProps = {
  imgUrl: string;
};

function Thumbnail(props: ThumbnailProps) {
  return (
    <Wrapper className="Thumbnail">
      <Img src={props.imgUrl}></Img>
    </Wrapper>
  );
}

export default Thumbnail;
