import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Login } from "./pages/Login";


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
    }
  });

  
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login/>
    </ThemeProvider>
     
    
  );
}

export default App;
