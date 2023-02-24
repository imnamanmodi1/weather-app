import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Search from "./Search";

function AppData() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ padding: "0 !important" }} maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            width: "100%",
            padding: "10px",
          }}
        >
          <Search />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default AppData;
