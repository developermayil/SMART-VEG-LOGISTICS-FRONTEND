"use client";
import { Box, Typography, Stack, Avatar } from "@mui/material";
import { Spa, Favorite } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // py: 1.5,
        m: 1,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          px: 2,
          py: 0.75,
          borderRadius: "999px",
          background: "#FFFFFF",
          boxShadow: "0 4px 16px rgba(46,125,50,0.08)",
        }}
      >
        <Avatar
          sx={{
            width: 22,
            height: 22,
            background: "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)",
          }}
        >
          <Spa sx={{ fontSize: 13, color: "#fff" }} />
        </Avatar>

        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontWeight: 500, fontSize: 12 }}
        >
          Smart Veg Logistics · © {new Date().getFullYear()}
        </Typography>

        <Box
          sx={{
            width: "1px",
            height: 12,
            bgcolor: "rgba(0,0,0,0.12)",
          }}
        />

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            Powered by
          </Typography>
          {/* <Favorite
            sx={{
              fontSize: 12,
              color: "#E53935",
              animation: "heartbeat 1.4s ease-in-out infinite",
              "@keyframes heartbeat": {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.25)" },
              },
            }}
          /> */}
          <Box
            component="span"
            sx={{
              fontWeight: 800,
              fontSize: 12,
              background: "linear-gradient(135deg, #2E7D32 0%, #FF6F00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Developer Mayil
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
