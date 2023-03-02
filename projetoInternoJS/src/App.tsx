import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ptBR } from "@mui/material/locale";
import { AppRoutes } from "./routes/AppRoutes";


function App(): JSX.Element{

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F9A006",
        light: "#FFFFFF"
      },
      secondary: {
        main: "#E60B82"
      },
      background: {
        default: "#F0F0F0"
      },
      contrastThreshold: 2
    },
    typography: {
      fontFamily: [
        "Poppins",
        "sans-serif"
      ].join(",")
    },
    breakpoints:{
      values: {
        xs: 0,
        sm: 900,
        md: 900,
        lg: 1200,
        xl: 1536
      }}
  }, ptBR);

  
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes/>
    </ThemeProvider>
     
    
  );
}

export default App;
