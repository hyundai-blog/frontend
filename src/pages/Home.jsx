import * as S from "../styles/home/home.style";
function Home() {
  return (
    <S.Container>
      <S.ImgClock src="/images/clock.png" alt="Centered" />
      <S.Title>틈새에서 내 목소리로 블로그를 들을 수 있습니다.</S.Title>
      <S.Subtitle>
        바쁜 일상 속 틈새에서 나만의 플레이리스트를 완성해보는 건 어떤가요?
      </S.Subtitle>
      <S.CategorySection>
        <S.CategoryButton>전체</S.CategoryButton>
        <S.CategoryButton>기술</S.CategoryButton>
        <S.CategoryButton>음식</S.CategoryButton>
        <S.CategoryButton>여행</S.CategoryButton>
        <S.CategoryButton>반려동물</S.CategoryButton>
        <S.CategoryButton>리뷰</S.CategoryButton>
      </S.CategorySection>
      <S.PostContainer>
        <S.Thumbnail src="/images/home/thumbnail.png" alt="Post Thumbnail" />
        <S.PostContent>
          <S.PostHeader>
            <S.Profile>
              <S.ProfileImage
                src="/images/home/profileImage.png"
                alt="Profile Image"
              />
              <S.ProfileTextWrap>
                <S.UserName>Username</S.UserName>
                <S.PostDate>3 days ago - 3:27</S.PostDate>
              </S.ProfileTextWrap>
            </S.Profile>
            <S.Icon />
          </S.PostHeader>
          <S.PostBody>
            <S.PostTitle>틈새에서 나만의 플레이리스트 만들기</S.PostTitle>
            <S.PostSummary>
              바쁜 일상 속 잠깐의 틈새에 당신의 목소리로 블로그를 들어보세요.
              나만의 플레이리스트를 완성하며, 원하는 순간마다 나만의 블로그
              콘텐츠를 감상해보세요. 우리 프로젝트는 사용자에게 음성 기반의
              맞춤형 블로그 청취 경험을 제공하며, 당신의 목소리로 특별한 순간을
              만들어 갑니다.
            </S.PostSummary>
            <S.PostCategory>기술</S.PostCategory>
          </S.PostBody>
        </S.PostContent>
      </S.PostContainer>

      <S.ImgClock src="/images/clock.png" alt="Centered" />
    </S.Container>
  );
}

export default Home;
