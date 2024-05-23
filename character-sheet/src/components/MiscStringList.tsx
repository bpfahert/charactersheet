
interface MiscStringProps {
    title: string,
    list: string[],
}

function MiscStringList({title, list}: MiscStringProps) {
    const listElements = list.map((item) => {
        return(
            <li>{item}</li>
        )
    })

    return(
        <>
            <h4>{title}:</h4>
            <ul>
                {listElements}
            </ul>
        </>
    )
}

export default MiscStringList;