// import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Stack,
  Avatar,
  Badge,
} from "@mui/material";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  OndemandVideo as VideoIcon,
  Storefront as StorefrontIcon,
  People as PeopleIcon,
  SportsEsports as GamingIcon,
  Apps as AppsIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

function AppBarComponent() {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#1c1e21",
        boxShadow: "none",
        borderBottom: "1px solid #393a3c",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        {/* Left Section - Logo and Search */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography
            variant="h4"
            sx={{
              color: "#1877f2",
              fontWeight: "bold",
              fontFamily: "inherit",
            }}
          >
            f
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              bgcolor: "#3a3b3c",
              borderRadius: "50px",
              px: 2,
              py: 1,
              minWidth: 240,
            }}
          >
            <SearchIcon sx={{ color: "#b0b3b8", mr: 1 }} />
            <InputBase
              placeholder="Search Facebook"
              sx={{ color: "#e4e6ea", flex: 1 }}
            />
          </Box>
        </Stack>

        {/* Center Section - Navigation Icons */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <IconButton
            sx={{
              color: "#1877f2",
              bgcolor: "rgba(24, 119, 242, 0.1)",
              borderRadius: 2,
              p: 1.5,
            }}
          >
            <HomeIcon />
          </IconButton>
          <IconButton sx={{ color: "#b0b3b8", borderRadius: 2, p: 1.5 }}>
            <VideoIcon />
          </IconButton>
          <IconButton sx={{ color: "#b0b3b8", borderRadius: 2, p: 1.5 }}>
            <StorefrontIcon />
          </IconButton>
          <IconButton sx={{ color: "#b0b3b8", borderRadius: 2, p: 1.5 }}>
            <PeopleIcon />
          </IconButton>
          <IconButton sx={{ color: "#b0b3b8", borderRadius: 2, p: 1.5 }}>
            <GamingIcon />
          </IconButton>
        </Stack>

        {/* Right Section - User Actions */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            sx={{
              color: "#b0b3b8",
              bgcolor: "#3a3b3c",
              borderRadius: "50%",
              p: 1,
            }}
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#b0b3b8",
              bgcolor: "#3a3b3c",
              borderRadius: "50%",
              p: 1,
            }}
          >
            <MessageIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#b0b3b8",
              bgcolor: "#3a3b3c",
              borderRadius: "50%",
              p: 1,
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#3a3b3c",
              cursor: "pointer",
            }}
            src="/path-to-profile-image.jpg"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
