import { useMemo, useState } from "react"
import { AxisOptions, Chart } from "react-charts"
import { ButtonPrimary } from "../../components"
import { useFetchData } from "../../hooks/useFetchData"

type EcgApiType = {
    count: number,
    next:string | null,
    previous: string | null,
    results: {ecg_list: string}[]
}
type EcgPoint = {
    lp: number,
    value: number,
  }
  
type Series = {
    label: string,
    data: EcgPoint[]
  }

const getConvertDataToArray  = (data: EcgApiType | undefined):Series[] | undefined => {
    const convertedData = data?.results[0].ecg_list.replace('[', '').replace(']', '').split(', ').map((el,i):EcgPoint => ({lp:i ,value:+(el.replaceAll("'", ""))}))
    if(convertedData){
        return [{label:'Ecg Data', data: convertedData.slice(0, 100)}]
    }
}


export const EcgChart = () => {
    const [currentEcg, setCurrentEcg] = useState('ecgs')
    const data = useFetchData< EcgApiType>(currentEcg)
    const ecgs =  getConvertDataToArray(data)

    const primaryAxis = useMemo(
        (): AxisOptions<EcgPoint> => ({
          getValue: datum => datum.lp,
        }),
        []
      )
    
      const secondaryAxes = useMemo(
        (): AxisOptions<EcgPoint>[] => [
          {
            getValue: datum => datum.value,
          },
        ],
        []
      )

    if (!ecgs) return <h1>Loading</h1>

    return (
    <div className="w-screen h-screen">
      <div className="h-4/5 w-full" >
        <Chart
        options={{
          data: ecgs,
          primaryAxis,
          secondaryAxes,
        }}
        />
      </div> 
      <div className="w-full flex gap-7 justify-center">
        <ButtonPrimary text="Poprzednie badanie"  onClick={() => {
          if(!data?.previous) return
          setCurrentEcg(data.previous.split('/').slice(-2).join('/'))
        }}/>
        <ButtonPrimary onClick={() => {
          if(!data?.next) return
          setCurrentEcg(data.next.split('/').slice(-2).join('/'))
        }} text="Następne badanie"/>
      </div>
    </div>
    )
}