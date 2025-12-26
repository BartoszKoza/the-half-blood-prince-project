import { TileWrapper, TileImage, TileName, Placeholder } from "./styled";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185";

export default function PersonTile({ person }) {
    const imageUrl = person.profile_path
        ? `${IMAGE_BASE_URL}${person.profile_path}`
        : null;

    return (
        <TileWrapper>
            {imageUrl ? (
                <TileImage src={imageUrl} alt={person.name} />
            ) : (
                <Placeholder />
            )}
            <TileName>{person.name}</TileName>
        </TileWrapper>
    );
}
