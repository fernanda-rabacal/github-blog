import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserGroup, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Informations, Links, ProfileContainer } from "./styles";
import { Link } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

export interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);

  const getProfileData = useCallback(async () => { 
    const response = await api.get(`/users/${username}`);

    setProfileData(response.data); 
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  return(
    <ProfileContainer>
        <img src={profileData.avatar_url}/>

        <Informations>
          <span>
            <h2>{profileData.name}</h2>
            <a target="_blank" href={`https://github.com/${username}`}>
              GITHUB
              <Link size={16} weight='bold' />
            </a>
          </span>
          <p>{profileData.bio}</p>

          <Links> 
            <p>
              <FontAwesomeIcon icon={faGithub}/>
              {profileData.login}
            </p>
            {profileData.company && 
              <p>
                <FontAwesomeIcon icon={faBuilding}/>
                {profileData.company}
              </p>}
            <p>
            <FontAwesomeIcon icon={faUserGroup}/>
              {profileData.followers} seguidores
            </p>
          </Links>
        </Informations>
      </ProfileContainer>
  )
}