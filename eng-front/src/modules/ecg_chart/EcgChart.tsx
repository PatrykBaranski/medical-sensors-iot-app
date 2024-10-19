import { useFetchData } from "../../hooks/useFetchData"

type EcgApiType = {
    count: number,
    next:string | null,
    previous: string | null,
    results: {ecg_list: string}[]
}


export const EcgChart = () => {
    const data = useFetchData< EcgApiType>('ecgs')

    return <div className="text-3xl font-bold underline"></div>
}