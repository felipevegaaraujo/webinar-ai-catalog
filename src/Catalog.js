import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ReactJS + MUI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const images = [
  {
    key: 1,
    name: "Arquitectura exótica",
    src: "https://mj-gallery.com/39403b29-a2f9-4d2c-863f-280715293883/grid_0.png",
    description:
      "Architecture, museum, tom wright, aesthetic, burj al arab, iconic, luxury, 4k",
  },
  {
    key: 2,
    name: "Avión en el túnel",
    src: "https://mj-gallery.com/0fa41635-dc89-430a-8be7-f58572953752/grid_0.png",
    description:
      "A commercial aeroplane going towards a big time portal in round shape which shows like a time jump, high octane, realistic, hdr--wallpaper",
  },
  {
    key: 3,
    name: "Ventanas de colores",
    src: "https://mj-gallery.com/311296ff-09f2-4dbc-ad71-6f11605fce69/grid_0.png",
    description:
      "Architecture, museum interior,tom wright,aesthetic,iconic,luxury,4k",
  },
  {
    key: 4,
    name: "Paisaje con nieve",
    src: "https://mj-gallery.com/a928095b-c85d-4929-be73-dfdfc9d1282e/grid_0.png",
    description: "Snowy mountains ice frost winter storm dream unreal",
  },
  {
    key: 5,
    name: "Medusa embotellada",
    src: "https://mj-gallery.com/c4e9ef76-d265-4400-af60-0c630f9b2883/grid_0.png",
    description: "Jellyfish in a bottle",
  },
  {
    key: 6,
    name: "Colombia",
    src: "https://mj-gallery.com/6f4a8bc1-eb16-4b98-b932-753fd43df893/grid_0.png",
    description: "Colombia being the most amazing country in the world",
  },
];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Catalog() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Catálogo - AI
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Subasta ahora
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Las siguientes imágenes fueron generadas mediante{" "}
              <Link href="https://midjourney.com" underline="hover">
                MidJourney
              </Link>
              {". "}
              Escoge tus favoritas e ingresa el valor que estas dispuesto a
              pagar.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={colorMode.toggleColorMode}>
                Suscribete ahora
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 2 }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {images.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia component="img" image={card.src} alt="random" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <ThumbUpOffAltIcon />
                    </IconButton>
                    <Button size="small">Subastar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Este sitio web es el resultado de un ejercicio para el Diplomado con
          ReactJS!
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Catalog />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
