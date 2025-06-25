import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Stack,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";
import {
  OndemandVideo as VideoIcon,
  Search as SearchIcon,
  MoreHoriz as MoreIcon,
} from "@mui/icons-material";

function RightBar() {
  const contacts = [
    { name: "Anushka Sharma", online: true },
    { name: "Smriti Mandhana", online: false },
    { name: "MS Dhoni", online: true },
    { name: "Hardik Pandya", online: false },
    { name: "Ellyse Perry", online: true },
    { name: "Shubhman Gill", online: false },
    { name: "KL Rahul", online: true },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <Box
      sx={{
        width: 280,
        height: "calc(100vh - 64px)",
        position: "fixed",
        right: 0,
        top: 64,
        bgcolor: "#18191a",
        py: 2,
        px: 2,
        overflowY: "auto",
        display: { xs: "none", lg: "block" },
      }}
    >
      {/* Your Pages and Profiles */}
      <Typography
        sx={{
          color: "#b0b3b8",
          fontSize: 16,
          mb: 2,
          fontWeight: 600,
        }}
      >
        Your Pages And Profiles
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          borderRadius: 2,
          cursor: "pointer",
          "&:hover": { bgcolor: "#3a3b3c" },
          mb: 2,
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: "#1877f2",
            mr: 2,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          ICC
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "#e4e6ea", fontSize: 14, fontWeight: 500 }}>
            ICC Officials
          </Typography>
          <Typography sx={{ color: "#b0b3b8", fontSize: 12 }}>
            ICC.officials
          </Typography>
        </Box>
        <Chip
          label="1"
          size="small"
          sx={{
            bgcolor: "#e41e3f",
            color: "white",
            fontSize: 10,
            height: 20,
            minWidth: 20,
            "& .MuiChip-label": { px: 0.5 },
          }}
        />
        <IconButton size="small" sx={{ color: "#b0b3b8", ml: 1 }}>
          <MoreIcon fontSize="small" />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: "#3a3b3c", my: 2 }} />

      {/* Birthdays */}
      <Typography
        sx={{
          color: "#b0b3b8",
          fontSize: 16,
          mb: 2,
          fontWeight: 600,
        }}
      >
        Birthdays
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Box sx={{ mr: 2, fontSize: 24 }}>🎂</Box>
        <Typography sx={{ color: "#e4e6ea", fontSize: 14 }}>
          <strong>Anushka</strong> and <strong>2 others</strong> have birthdays
          today.
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: "#3a3b3c", my: 2 }} />

      {/* Contacts */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            color: "#b0b3b8",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Contacts
        </Typography>
        <Stack direction="row" spacing={0.5}>
          <IconButton size="small" sx={{ color: "#b0b3b8" }}>
            <VideoIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "#b0b3b8" }}>
            <SearchIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "#b0b3b8" }}>
            <MoreIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      <List disablePadding>
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              py: 1,
              cursor: "pointer",
              "&:hover": { bgcolor: "#3a3b3c" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 44 }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#3a3b3c",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {getInitials(contact.name)}
                </Avatar>
                {contact.online && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -2,
                      right: -2,
                      width: 12,
                      height: 12,
                      bgcolor: "#42b883",
                      borderRadius: "50%",
                      border: "2px solid #18191a",
                    }}
                  />
                )}
              </Box>
            </ListItemIcon>
            <ListItemText
              primary={contact.name}
              sx={{
                color: "#e4e6ea",
                "& .MuiTypography-root": { fontSize: 14 },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default RightBar;
