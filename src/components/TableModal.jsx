import React from "react"
import { Modal, Box, Button, TextField, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment'

const TableModal = ({ 
  handleEditDesign, 
  editModalOpen,
  editedDesign,
  handleCloseEditModal, 
  handleChange 
}) => {
  return (
    <Modal open={editModalOpen} onClose={handleCloseEditModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            padding: '16px',
            minWidth: '300px',
            minHeight: '400px'
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Edit Design</Typography>
            <IconButton onClick={handleCloseEditModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="column" padding={'2rem'} justifyContent="space-between">
          <TextField
            fullWidth
            sx={{
              paddingBottom: "1rem"
            }}
            name="name"
            label="Name"
            value={editedDesign?.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            fullWidth
            sx={{
              paddingBottom: "1rem"
            }}
            name="courses"
            label="Courses"
            value={editedDesign?.courses}
            onChange={(e) => handleChange("courses", e.target.value)}
          />
          <TextField
            fullWidth
            sx={{
              paddingBottom: "1rem"
            }}
            name="wales"
            label="Wales"
            value={editedDesign?.wales}
            onChange={(e) => handleChange("wales", e.target.value)}
          />
          <TextField
            fullWidth
            name="updated"
            label="Updated"
            type="datetime-local"
            value={editedDesign?.updated ? moment(editedDesign.updated).format("YYYY-MM-DDTHH:mm") : ''}
            onChange={(e) => handleChange("updated", e.target.value)}
          />
          </Box>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" sx={{
              marginRight: "1rem",
              backgroundColor: "#64b3a4",
              borderColor: "#64b3a4",
              ":hover": {
                backgroundColor: "#aeebe0",
              }
            }}
            onClick={handleEditDesign}>
              Save
            </Button>
            <Button variant="outlined" sx={{
              marginRight: "1rem",
              color: "#000",
              backgroundColor: "#64b3a4",
              borderColor: "#64b3a4",
              ":hover": {
                backgroundColor: "#fff",
              }
            }}
            onClick={handleCloseEditModal}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
  );
}

export default TableModal
