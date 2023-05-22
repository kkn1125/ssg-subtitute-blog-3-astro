import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

const menuList = [
  {
    name: "test",
    to: "/about",
  },
];

function SideBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleRedirect = (path: string) => {
    
  };

  return (
    <Box sx={{ flex: "0 1 30%" }}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Nested List Items
          </ListSubheader>
        }>
        {menuList.map(({ name, to },i) => (
          <ListItemButton key={i} onClick={() => handleRedirect(to)}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        ))}

        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Starred' />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}

export default SideBar;
