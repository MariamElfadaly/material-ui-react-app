import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Person as PersonIcon,
  People as PeopleIcon,
  Storefront as StorefrontIcon,
  Schedule as ScheduleIcon,
  Groups as GroupsIcon,
  OndemandVideo as VideoIcon,
} from "@mui/icons-material";

function LeftBar() {
  const menuItems = [
    {
      icon: <PersonIcon sx={{ color: "#1877f2" }} />,
      text: "Virat Kohli",
      primary: true,
    },
    { icon: <PeopleIcon />, text: "Friends" },
    { icon: <StorefrontIcon />, text: "Marketplace" },
    { icon: <ScheduleIcon />, text: "Most Recent" },
    { icon: <GroupsIcon />, text: "Groups" },
    { icon: <VideoIcon />, text: "Watch" },
  ];

  const shortcuts = [
    { name: "RCB Fanclub", avatar: "RF", color: "#e74c3c" },
    { name: "Test Championship", avatar: "TC", color: "#3498db" },
  ];

  return (
    <Box
      sx={{
        width: 280,
        height: "calc(100vh - 64px)",
        position: "fixed",
        left: 0,
        top: 64,
        bgcolor: "#18191a",
        py: 2,
        px: 1,
        overflowY: "auto",
        display: { xs: "none", md: "block" },
      }}
    >
      <List disablePadding>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              cursor: "pointer",
              "&:hover": { bgcolor: "#3a3b3c" },
              py: 1,
            }}
          >
            <ListItemIcon sx={{ minWidth: 48 }}>
              {item.primary ? (
                <Avatar sx={{ width: 36, height: 36, bgcolor: "#1877f2" }}>
                  <PersonIcon />
                </Avatar>
              ) : (
                <Box sx={{ color: "#b0b3b8", fontSize: 20 }}>{item.icon}</Box>
              )}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                color: "#e4e6ea",
                "& .MuiTypography-root": {
                  fontSize: 15,
                  fontWeight: item.primary ? 600 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ bgcolor: "#3a3b3c", my: 2, mx: 2 }} />

      <Typography
        sx={{
          color: "#b0b3b8",
          fontSize: 14,
          px: 2,
          mb: 1,
          fontWeight: 500,
        }}
      >
        Your Shortcuts
      </Typography>

      <List disablePadding>
        {shortcuts.map((shortcut, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              cursor: "pointer",
              "&:hover": { bgcolor: "#3a3b3c" },
              py: 1,
            }}
          >
            <ListItemIcon sx={{ minWidth: 48 }}>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: shortcut.color,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {shortcut.avatar}
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={shortcut.name}
              sx={{
                color: "#e4e6ea",
                "& .MuiTypography-root": { fontSize: 15 },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 2, px: 2 }}>
        <ListItem
          sx={{
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": { bgcolor: "#3a3b3c" },
            py: 1,
          }}
        >
          <ListItemIcon sx={{ minWidth: 48 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                bgcolor: "#3a3b3c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              ⌄
            </Box>
          </ListItemIcon>
          <ListItemText
            primary="See More"
            sx={{
              color: "#e4e6ea",
              "& .MuiTypography-root": { fontSize: 15 },
            }}
          />
        </ListItem>
      </Box>
    </Box>
  );
}

export default LeftBar;