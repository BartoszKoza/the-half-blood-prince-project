import {
    TileWrapper,
    TileImage,
    Name,
    Role,
    NameWrapper,
} from "./styled";

import noPerson from "../../images/no-person.png";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185";

export default function PersonTile({ person, role }) {
    const imageUrl = person.profile_path
        ? `${IMAGE_BASE_URL}${person.profile_path}`
        : noPerson;

    return (
        <TileWrapper>
            <TileImage src={imageUrl} alt={person.name} />
            <NameWrapper>
                <Name>{person.name}</Name>
                {role && <Role>{role}</Role>}
            </NameWrapper>
        </TileWrapper>
    );
}
