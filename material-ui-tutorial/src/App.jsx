import "./App.css";
import { Button, ButtonGroup, Checkbox, FormControlLabel } from "@mui/material";
import { Save, Delete, Menu } from "@mui/icons-material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto";
import {
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
});

function ButtonStyled() {
  return (
    <Button
      sx={{
        background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color: "white",
        padding: "5px 30px",
      }}
    >
      Test Styled Button
    </Button>
  );
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<Delete />}
            checkedIcon={<Save />}
            onChange={() => setChecked(!checked)}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        required
        label="Name"
      />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <Menu />
            </IconButton>
            <Typography variant="h6">MUI Themeing</Typography>
            <Button> Login </Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h2" component="div">
          Welcome to MUI
        </Typography>
        <Typography variant="subtitle1">
          Learn how to use Material UI
        </Typography>
        <ButtonStyled />
        <Grid container spacing={2} justify="center">
          <Grid item xs={3} sm={6} lg={12}>
            <Paper style={{ height: 75, width: "100%" }} />
          </Grid>
          <Grid item xs={3} sm={6} lg={12}>
            <Paper style={{ height: 75, width: "100%" }} />
          </Grid>
          <Grid item xs={3} sm={6} lg={12}>
            <Paper style={{ height: 75, width: "100%" }} />
          </Grid>
        </Grid>
        <CheckboxExample />
        <ButtonGroup variant="contained" color="secondary">
          <Button startIcon={<Save />} style={{ fontSize: "24px" }}>
            Save
          </Button>
          <Button startIcon={<Delete />} style={{ fontSize: "24px" }}>
            Delete
          </Button>
        </ButtonGroup>
      </Container>
    </ThemeProvider>
  );
}

export default App;
