import { Links, PostContent, PostInformationsSection, PostPageContainer, ProfileInformations } from "./styles";
import { CaretLeft, Link }from "phosphor-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export function PostPage() {
  return(
    <PostPageContainer className="container">
      <PostInformationsSection>
        <Links>
          <a href="">
            <CaretLeft size={16} weight="bold" />
            Voltar
          </a>
          <a href="">
            Ver no github
            <Link size={16} weight="bold" />
          </a>
        </Links>

        <h2>Teste de javascript github blog</h2>

        <ProfileInformations>
          <span>
            <FontAwesomeIcon icon={faGithub}/>
            fernanda-rabacal
            </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay}/>
            Há 1 dia
            </span>
          <span>
            <FontAwesomeIcon icon={faComment}/>
            5 comentários
            </span>
        </ProfileInformations>

      </PostInformationsSection>

      <PostContent>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
      </PostContent>
    </PostPageContainer>
  )
}