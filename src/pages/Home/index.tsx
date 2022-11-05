
import { Link } from "phosphor-react";
import { HomeContainer, Informations, Links, PostCard, Posts, Profile, SearchSection } from "./styles";

export function HomePage() {
  return (
    <HomeContainer className="container">
      <Profile>
        <img src="https://i.picsum.photos/id/696/536/354.jpg?hmac=uGNdlIQW9BEffSIG-ZdaiIwQxRQPjiwqLcJOurFOUC8"/>

        <Informations>
          <span>
            <h2>Fernanda Rabaçal</h2>
            <a href="https://github.com/fernanda-rabacal">
              GITHUB
              <Link size={16} weight='bold' />
            </a>
          </span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

          <Links> 
            <p>fernanda-rabacal</p>
            <p>Rocketseat</p>
            <p>32 seguidores</p>
          </Links>
        </Informations>
      </Profile>

      <SearchSection>
        <label htmlFor="post-search">
          <span>
            <h4>Publicações</h4>
            <p>6 publicações</p>
          </span>
          <input id="post-search" type="search" placeholder="Buscar conteúdo" />
        </label>
      </SearchSection>

      <Posts>
        <PostCard>
          <span>
            <h2>Mó trampo</h2>
            <p>há 1 dia</p>
          </span>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </PostCard>
        <PostCard>
          <span>
            <h2>Mó trampo</h2>
            <p>há 1 dia</p>
          </span>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </PostCard>
        <PostCard>
          <span>
            <h2>Mó trampo</h2>
            <p>há 1 dia</p>
          </span>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </PostCard>
      </Posts>
    </HomeContainer>
  )
}