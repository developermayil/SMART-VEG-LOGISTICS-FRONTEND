"use client";
import { ReactNode, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Sidebar from "./Sidebar";
import animationData from "../../../public/loading/BikrimartDelivery.json";
import dynamic from "next/dynamic";
import Footer from "./Footer";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});
export default function AppLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [user, loading, router]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </Box>
    );
  }

  if (!user) return null;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1, p: 3, overflow: "hidden" }}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
