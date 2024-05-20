import { v4 as uuidv4 } from "uuid";

function EquipmentBox({equipment}: {equipment: string[]}) {

    const equipmentList = equipment.map((item: string) => {
        return {name: item, id: uuidv4()}})
    
    const equipmentElements = equipmentList.map((item) => {
        return (
            <div key={item.id}>{item.name}</div>
        )
    })


    return(
        <>
            <h3>Equipment</h3>
            {equipmentElements}
        </>
    )
}


export default EquipmentBox;