import React, { Fragment } from "react"
import {
  TableContainer,
  Table as TableCustom,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Avatar,
  IconButton,
  Box
} from "@mui/material"
import CircularProgress from "@mui/joy/CircularProgress"
import EditIcon from "@mui/icons-material/Edit"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"
import { cadenaAleatoria } from "../helpers/initialsGenerator"
import { TableModal } from "../components"

const Table = ({
  data,
  columns,
  handleEditDesign = () => {},
  editModalOpen = false,
  editedDesign = null,
  handleOpenEditModal = () => {},
  handleCloseEditModal = () => {},
  handleChange = () => {}
}) => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: "50rem", boxShadow: "none" }}
      >
        <TableCustom stickyHeader aria-label="sticky table">
          {!data?.length ? (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={columns.length + (editedDesign ? 1 : 0)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40rem"
                  }}
                >
                  <CircularProgress variant="solid" size="lg" color="neutral" />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <>
              <TableHead>
                <TableRow key={uuidv4()}>
                  <>
                    {!!editedDesign && (
                      <TableCell key={uuidv4()}>Actions</TableCell>
                    )}
                    {columns?.map((column) => (
                      <TableCell key={uuidv4()}>{column}</TableCell>
                    ))}
                  </>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row) => (
                  <TableRow key={uuidv4()}>
                    {!!editedDesign && (
                      <TableCell key={uuidv4()}>
                        <IconButton onClick={() => handleOpenEditModal(row)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    )}
                    {columns?.map((column) => (
                      <Fragment key={uuidv4()}>
                        {!!row[column.toLowerCase()] && (
                          <TableCell key={uuidv4()} sx={{ height: "2.5rem" }}>
                            {row[column.toLowerCase()]}
                          </TableCell>
                        )}
                        {!row[column.toLowerCase()] &&
                          column === "Machine Name" && (
                            <TableCell key={uuidv4()} sx={{ height: "2.5rem" }}>
                              {row["machine_name"]}
                            </TableCell>
                          )}
                        {!row[column.toLowerCase()] &&
                          column === "Machine Width" && (
                            <TableCell key={uuidv4()} sx={{ height: "2.5rem" }}>
                              {row["machine_width"]}
                            </TableCell>
                          )}
                        {!row[column.toLowerCase()] &&
                          column === "Last Updated" && (
                            <TableCell key={uuidv4()} sx={{ height: "2.5rem" }}>
                              {moment(row["updated"]).format("DD/MM/YYYY")}
                            </TableCell>
                          )}
                        {!row[column.toLowerCase()] && column === "By" && (
                          <TableCell key={uuidv4()} sx={{ height: "2.5rem" }}>
                            <Avatar sx={{ bgcolor: "#64b3a4" }}>
                              {!row[column.toLowerCase()] &&
                                column === "By" &&
                                cadenaAleatoria(2)}
                            </Avatar>
                          </TableCell>
                        )}
                      </Fragment>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </TableCustom>
      </TableContainer>
      <TableModal
        handleEditDesign={handleEditDesign}
        editModalOpen={editModalOpen}
        editedDesign={editedDesign}
        handleCloseEditModal={handleCloseEditModal}
        handleChange={handleChange}
      />
    </>
  )
}

export default Table
