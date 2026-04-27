import { useState } from 'react';
import { Slider, Typography, Box } from '@mui/material';
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState<number>(30);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        React Navbar Slider
      </Typography>
      <Typography gutterBottom>Slider Value: {value}</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        min={0}
        max={100}
        sx={{ mb: 2 }}
      />
      <Button color="primary" onClick={() => console.log("Clicked! Value:", value)}>
        My Styled Button
      </Button>
    </Box>
  );
}

export default App;