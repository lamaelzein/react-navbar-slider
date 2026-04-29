import React from "react";
 
import Slider from '@mui/material/Slider';

function App() {
  return (
    <div>
      {}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyProject</a>
        </div>
      </nav>

      {}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
  <h2>Welcome to My React Project</h2>
</div>
      <div style={{ width: "300px", margin: "50px auto" }}>
        <h3>Material UI Slider</h3>
        <Slider defaultValue={50} valueLabelDisplay="auto" />
      </div>
    </div>
  );
}

export default App;