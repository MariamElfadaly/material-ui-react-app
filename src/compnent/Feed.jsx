import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Stack,
  Button,
  Divider,
  IconButton,
  InputBase,
} from "@mui/material";
import {
  LiveTv as LiveTvIcon,
  PhotoLibrary as PhotoLibraryIcon,
  SentimentSatisfied as SentimentIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";

// Stories Component
const StoriesSection = () => {
  const stories = [
    { name: "Create Story", isCreate: true },
    {
      name: "Rohit Sharma",
      emoji: "",
      image:
        "https://randompicturegenerator.com/img/picture-generator/57e2d64a4d50a814f1dc8460962e33791c3ad6e04e507441722a72dd9f4dc1_640.jpg",
    },
    {
      name: "Surya Kumar",
      emoji: "",
      image:
        "https://randompicturegenerator.com/img/picture-generator/57e2d64a4d50a814f1dc8460962e33791c3ad6e04e507441722a72dd9f4dc1_640.jpg",
    },
    {
      name: "Rishab Par",
      emoji: "",
      image:
        "https://randompicturegenerator.com/img/picture-generator/57e2d64a4d50a814f1dc8460962e33791c3ad6e04e507441722a72dd9f4dc1_640.jpg",
    },
  ];

  return (
    <Card
      sx={{
        bgcolor: "#242526",
        border: "1px solid #3a3b3c",
        mb: 2,
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} sx={{ overflowX: "auto", pb: 1 }}>
          {stories.map((story, index) => (
            <Box
              key={index}
              sx={{
                minWidth: 120,
                height: 200,
                borderRadius: 2,
                position: "relative",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: story.isCreate ? "center" : "flex-end",
                p: 1.5,
                bgcolor: story.isCreate ? "#3a3b3c" : "transparent",
                backgroundImage: story.isCreate
                  ? "none"
                  : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${story.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              {story.isCreate ? (
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      fontSize: 32,
                      color: "#1877f2",
                      mb: 1,
                      fontWeight: "300",
                    }}
                  >
                    +
                  </Box>
                  <Typography sx={{ color: "#e4e6ea", fontSize: 12 }}>
                    Create Story
                  </Typography>
                </Box>
              ) : (
                <>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "2px solid white",
                      alignSelf: "center",
                      mb: 1,
                    }}
                  >
                    <img
                      src="https://randompicturegenerator.com/img/picture-generator/57e2d64a4d50a814f1dc8460962e33791c3ad6e04e507441722a72dd9f4dc1_640.jpg"
                      alt={story.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: "bold",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    {story.name}
                  </Typography>
                </>
              )}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

// Post Creation Component
const PostCreation = () => {
  return (
    <Card
      sx={{
        bgcolor: "#242526",
        border: "1px solid #3a3b3c",
        mb: 2,
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Avatar sx={{ width: 40, height: 40, bgcolor: "#3a3b3c" }}>👤</Avatar>
          <Box
            sx={{
              flex: 1,
              bgcolor: "#3a3b3c",
              borderRadius: "25px",
              px: 2,
              py: 1.5,
              cursor: "pointer",
              transition: "background-color 0.2s",
              "&:hover": { bgcolor: "#4e4f50" },
            }}
          >
            <Typography sx={{ color: "#b0b3b8", fontSize: 16 }}>
              What's on your mind, Eric?
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ bgcolor: "#3a3b3c", mb: 2 }} />

        <Stack direction="row" spacing={1}>
          <Button
            startIcon={<LiveTvIcon />}
            sx={{
              color: "#b0b3b8",
              flex: 1,
              textTransform: "none",
              borderRadius: 2,
              py: 1,
              "&:hover": { bgcolor: "#3a3b3c" },
            }}
          >
            Live Video
          </Button>
          <Button
            startIcon={<PhotoLibraryIcon />}
            sx={{
              color: "#b0b3b8",
              flex: 1,
              textTransform: "none",
              borderRadius: 2,
              py: 1,
              "&:hover": { bgcolor: "#3a3b3c" },
            }}
          >
            Photo/Video
          </Button>
          <Button
            startIcon={<SentimentIcon />}
            sx={{
              color: "#b0b3b8",
              flex: 1,
              textTransform: "none",
              borderRadius: 2,
              py: 1,
              "&:hover": { bgcolor: "#3a3b3c" },
            }}
          >
            Feeling/Activity
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

// News Post Component
const NewsPost = () => {
  return (
    <Card
      sx={{
        bgcolor: "#242526",
        border: "1px solid #3a3b3c",
        mb: 2,
        borderRadius: 2,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src="https://randomuser.me/api/portraits/lego/0.jpg"
            sx={{ bgcolor: "#1877f2", width: 40, height: 40 }}
          ></Avatar>
        }
        action={
          <IconButton sx={{ color: "#b0b3b8" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography
            sx={{
              color: "#e4e6ea",
              fontWeight: "bold",
              fontSize: 15,
              textAlign: "left",
            }}
          >
            Indian Cricket Team
          </Typography>
        }
        subheader={
          <Typography
            sx={{ color: "#b0b3b8", textAlign: "left", fontSize: 12 }}
          >
            5h • 🌍
          </Typography>
        }
        sx={{ pb: 1 }}
      />

      <CardContent sx={{ pt: 0 }}>
        <Typography
          sx={{
            color: "#e4e6ea",
            mb: 2,
            lineHeight: 1.5,
            fontSize: 14,
            textAlign: "left",
          }}
        >
          India has been touring Australia since 1947, but all that changed
          after winning the first and third Tests in Adelaide and Melbourne,
          respectively.
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: 300,
            bgcolor: "#3a3b3c",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            cursor: "pointer",
            transition: "opacity 0.2s",
            "&:hover": { opacity: 0.9 },
          }}
        >
          <img
            src="https://randompicturegenerator.com/img/picture-generator/57e2d64a4d50a814f1dc8460962e33791c3ad6e04e507441722a72dd9f4dc1_640.jpg"
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

function Feed() {
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: 590,
        mx: "auto",
        p: 2,
        bgcolor: "#18191a",
      }}
    >
      <StoriesSection />
      <PostCreation />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
    </Box>
  );
}

export default Feed;
