import * as React from "react";
import Container from "@mui/material/Container";
import Catalog from "./Catalog";

export default function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Catalog />
    </Container>
  );
}
