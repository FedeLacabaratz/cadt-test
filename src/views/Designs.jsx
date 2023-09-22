import React, { useState, useEffect } from "react"
import { fetchData, updateData } from "../helpers/fetchData"
import { Table } from "../components"

const Designs = () => {
  const [designs, setDesigns] = useState([])
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [selectedDesign, setSelectedDesign] = useState(null)
  const initialState = {
    id: "",
    name: "",
    courses: "",
    wales: "",
    updated: ""
  }
  const [editedDesign, setEditedDesign] = useState(initialState)

  useEffect(() => {
    const fetchDataFn = async () => {
      try {
        const newData = await fetchData("designs")
        setDesigns(newData)
      } catch (error) {
        console.log("Error fetching data from endpoint: ", error)
      }
    }
    fetchDataFn()
  }, [])

  const handleEditDesign = async () => {
    try {
      // Actualiza el diseño localmente
      setDesigns((prevDesigns) =>
        prevDesigns?.map((design) =>
          design?.id === editedDesign?.id ? editedDesign : design
        )
      );
      // Realiza la actualización en la base de datos mock (db.json)
      await updateData("designs", editedDesign.id, editedDesign);
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error updating design: ", error);
    }
  };

  const handleOpenEditModal = (design) => {
    setSelectedDesign(design)
    setEditedDesign(design)
    setEditModalOpen(true)
  }

  const handleCloseEditModal = () => {
    setSelectedDesign(null)
    setEditedDesign(initialState)
    setEditModalOpen(false)
  }

  const handleChange = (name, value) => {
    setEditedDesign({
      ...editedDesign,
      [name]: value
    })
  }

  return (
    <>
      <Table
        data={designs}
        columns={["Name", "Courses", "Wales", "Last Updated", "By"]}
        handleEditDesign={handleEditDesign}
        editModalOpen={editModalOpen}
        editedDesign={editedDesign}
        handleOpenEditModal={handleOpenEditModal}
        handleCloseEditModal={handleCloseEditModal}
        handleChange={handleChange}
      />
    </>
  )
}

export default Designs
