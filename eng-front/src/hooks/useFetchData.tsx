import { useEffect, useState } from 'react'

export const useFetchData = <T,>(dataPath:string) => {
  const [data, setData] = useState<T>()
  
  useEffect(() => {
    const fetchData = async() => {
      const data = await fetch(`http://192.168.1.31:8000/api/${dataPath}`)
      const response = await data.json()
      setData(response)
    }
    fetchData()
  }, [dataPath])
    return data
}