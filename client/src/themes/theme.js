import { lightBlue, pink, blueGrey, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const styles = {
  "&.MuiButton-root": {
    border: "2px black solid"
  },
  "&.MuiButton-text": {
    color: "grey"
  },
  "&.MuiButton-contained": {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: purple[800],
    borderRadius: 0,
    border: 0
  },
  "&.MuiButton-outlined": {
    color: "brown"
  }
};

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: lightBlue[900]
    }
  },
});