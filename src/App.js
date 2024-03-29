import { Stack, } from "@mui/system";
import { Box } from "@material-ui/core";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Add from './components/Add';
import { useState } from "react";
function App(){
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette:{
      mode:mode,
    },
  });
  return(
    <ThemeProvider theme={darkTheme} >
      <Box bgcolor={'background.default'} >
      <Navbar/>
      <Stack bgcolor={'background.default'} color={'text.primary'} direction='row' spacing={2} justifyContent='space-between'>
      <Sidebar setMode={setMode} mode={mode} />
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
     </Box>
    </ThemeProvider>
   
     

  );
}

export default App;