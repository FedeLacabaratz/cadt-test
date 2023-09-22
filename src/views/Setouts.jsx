import React, { useState, useEffect } from "react"
import { fetchData } from "../helpers/fetchData"
import { Table } from "../components"

const Setouts = () => {
  const [setouts, setSetouts] = useState([])
  
  useEffect(() => {
    const fetchDataFn = async () => {
      try {
        const newData = await fetchData("setouts")
        setSetouts(newData)
      } catch (error) {
        console.log("Error fetching data from endpoint: ", error)
      }
    }
    fetchDataFn()
  }, [])

  return (
    <Table
      data={setouts}
      columns={[
        "Name",
        "Machine Name",
        "Machine Width",
        "Courses",
        "Last Updated"
      ]}
    />
  )
}

export default Setouts
