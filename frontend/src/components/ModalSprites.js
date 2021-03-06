
export const ModalSprites = ({ detail }) => {
    let sprites = Object.values(detail.sprites)

    return (
        <>
            {sprites.map((sprite, i) =>
                (sprite != null) &&
                (sprite != "[object Object]") ?
                    <img src={sprite} key={i} />
                    : null
            )}
        </>
    )
}
