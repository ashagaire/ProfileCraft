import { Container, Box, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          MUI Layout Project
        </Typography>
        <Typography variant="body1" className="text-3xl font-bold underline">
          Start building your layout components below...
        </Typography>
        <div className="text-3xl font-bold text-blue-600 p-6">
      Hello Tailwind + React + TypeScript!
    </div>
      </Box>
    </Container>
  );
}

export default App;
