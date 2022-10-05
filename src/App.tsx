import { ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./Layouts";
import { AnimesRouter, HomeRouter, LightNovelsRouter, MovieRouter, SeriesRouter } from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    //<ThemeProvider theme={theme}>
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="/*" element={<HomeRouter />}/>
        <Route path="Anime/*" element={<AnimesRouter />}/>
        <Route path="LightNovels/*" element={<LightNovelsRouter />}/>
        <Route path="Movies/*" element={<MovieRouter />}/>
        <Route path="Series/*" element={<SeriesRouter />}/>
        <Route path="*" element={<Navigate replace to="/"/>} /> 
      </Route>
    </Routes>
    //</ThemeProvider>
  );
}

export default App;
