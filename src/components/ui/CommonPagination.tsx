"use client";
import {
  Box,
  IconButton,
  Typography,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
} from "@mui/icons-material";

export default function CommonPagination({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: any) {
  const totalPages = Math.max(1, Math.ceil(count / rowsPerPage));
  const currentPage = page + 1;
  const startItem = count === 0 ? 0 : page * rowsPerPage + 1;
  const endItem = Math.min(count, (page + 1) * rowsPerPage);

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      )
        pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const pageBtnSx = (active: boolean) => ({
    minWidth: 32,
    height: 32,
    px: 1,
    borderRadius: "8px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    userSelect: "none" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: active ? "#2E7D32" : "text.secondary",
    background: active ? "rgba(46, 125, 50, 0.14)" : "transparent",
    backdropFilter: active ? "blur(6px)" : "none",
    border: active
      ? "1px solid rgba(46, 125, 50, 0.35)"
      : "1px solid transparent",
    transition:
      "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease",
    "&:hover": {
      background: active ? "rgba(46, 125, 50, 0.2)" : "rgba(46,125,50,0.08)",
      color: "#2E7D32",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        gap: 2,
        p: 2,
        borderTop: "1px solid rgba(46,125,50,0.1)",
        bgcolor: "#FAFDF8",
      }}
    >
      {/* Left: showing X-Y of Z */}
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontWeight: 500 }}
      >
        Showing <b style={{ color: "#2E7D32" }}>{startItem}</b>–
        <b style={{ color: "#2E7D32" }}>{endItem}</b> of{" "}
        <b style={{ color: "#2E7D32" }}>{count}</b>
      </Typography>

      {/* Middle: page controls */}
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <IconButton
          size="small"
          disabled={page === 0}
          onClick={() => onPageChange(0)}
          sx={{ color: "#2E7D32" }}
        >
          <FirstPage fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          disabled={page === 0}
          onClick={() => onPageChange(page - 1)}
          sx={{ color: "#2E7D32" }}
        >
          <ChevronLeft fontSize="small" />
        </IconButton>

        {getPageNumbers().map((p, idx) =>
          p === "..." ? (
            <Typography
              key={`dots-${idx}`}
              sx={{ px: 0.5, color: "text.secondary" }}
            >
              …
            </Typography>
          ) : (
            <Box
              key={p}
              sx={pageBtnSx(p === currentPage)}
              onClick={() => onPageChange((p as number) - 1)}
            >
              {p}
            </Box>
          ),
        )}

        <IconButton
          size="small"
          disabled={page >= totalPages - 1}
          onClick={() => onPageChange(page + 1)}
          sx={{ color: "#2E7D32" }}
        >
          <ChevronRight fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          disabled={page >= totalPages - 1}
          onClick={() => onPageChange(totalPages - 1)}
          sx={{ color: "#2E7D32" }}
        >
          <LastPage fontSize="small" />
        </IconButton>
      </Stack>

      {/* Right: rows per page */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Rows per page
        </Typography>
        <Select
          size="small"
          value={rowsPerPage}
          onChange={(e) => {
            onRowsPerPageChange(Number(e.target.value));
            onPageChange(0);
          }}
          sx={{
            height: 34,
            borderRadius: "10px",
            fontSize: 13,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(46,125,50,0.3)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2E7D32",
            },
          }}
        >
          {[5, 10, 25, 50].map((n) => (
            <MenuItem key={n} value={n}>
              {n}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Box>
  );
}
