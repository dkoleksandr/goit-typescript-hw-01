type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}
type CheckALLType = Pick<AllType, 'name' | 'position' | 'color' | 'weight'>

function compare(top: CheckALLType, bottom: CheckALLType): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}
