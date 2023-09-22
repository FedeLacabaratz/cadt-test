import React from "react"
import { Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: "30%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "10rem",
          width: "17.5%",
          boxSizing: "border-box",
          backgroundColor: "#64b3a4",
          "& div": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          },
          "& ul": {
            width: "100%"
          },
          "& a:hover": {
            color: "#FFF",
            backgroundColor: "#000"
          }
        }
      }}
      variant="permanent"
      anchor="left"
      data-testid="sidebar"
    >
      <div>
        <List>
          <ListItem button component={Link} to="/designs">
            <ListItemText primary="Designs" />
          </ListItem>
          <ListItem button component={Link} to="/setouts">
            <ListItemText primary="Setouts" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default Sidebar
