import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

function Generator() {
  const [blueTokenCount, setBlueTokenCount] = useState('');
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState('');
  const [redTokenCount, setRedTokenCount] = useState('');
  const [redTokenPrefix, setRedTokenPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState('');
  const [tokens, setTokens] = useState({ blue: [], red: [] });

  const handleGenerate = () => {
    const blueTokens = Array.from({ length: parseInt(blueTokenCount || 0) }, (_, i) => ({
      label: `${blueTokenPrefix}${i + 1}`,
      color: 'blue',
    }));

    const redTokens = Array.from({ length: parseInt(redTokenCount || 0) }, (_, i) => ({
      label: `${redTokenPrefix}${i + 1}`,
      color: 'red',
    }));

    setTokens({ blue: blueTokens, red: redTokens });
  };

  const handleClear = () => {
    setBlueTokenCount('');
    setBlueTokenPrefix('');
    setBlueTokensPerRow('');
    setRedTokenCount('');
    setRedTokenPrefix('');
    setRedTokensPerRow('');
    setTokens({ blue: [], red: [] });
  };

  const renderTokens = (tokens, perRow) => {
    const rows = [];
    for (let i = 0; i < tokens.length; i += parseInt(perRow || tokens.length)) {
      rows.push(tokens.slice(i, i + parseInt(perRow || tokens.length)));
    }
    return rows.map((row, index) => (
      <Box key={index} sx={{ display: 'flex', justifyContent: 'left', mb: 1 }}>
        {row.map((token, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: token.color === 'blue' ? '#4a90e2' : '#d9534f',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
              marginRight: '5px',
              fontWeight: 'bold',
              minWidth: '60px',
              textAlign: 'center',
            }}
          >
            {token.label}
          </Box>
        ))}
      </Box>
    ));
  };

  return (
    <Box sx={{ maxWidth: '600px', mx: 'auto', mt: 5, p: 3, bgcolor: 'white', borderRadius: '8px', boxShadow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        Token Generator Application
      </Typography>
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Number Of Blue Tokens"
          variant="outlined"
          type="number"
          value={blueTokenCount}
          onChange={(e) => setBlueTokenCount(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Blue Token Prefix"
          variant="outlined"
          value={blueTokenPrefix}
          onChange={(e) => setBlueTokenPrefix(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Blue Tokens Per Row"
          variant="outlined"
          type="number"
          value={blueTokensPerRow}
          onChange={(e) => setBlueTokensPerRow(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Number Of Red Tokens"
          variant="outlined"
          type="number"
          value={redTokenCount}
          onChange={(e) => setRedTokenCount(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Red Token Prefix"
          variant="outlined"
          value={redTokenPrefix}
          onChange={(e) => setRedTokenPrefix(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Red Tokens Per Row"
          variant="outlined"
          type="number"
          value={redTokensPerRow}
          onChange={(e) => setRedTokensPerRow(e.target.value)}
          margin="normal"
        />
      </Box>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleGenerate}>
            Generate
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h5" component="h2" sx={{ mt: 4, color: '#4a90e2', textAlign: 'center' }}>
        Blue Tokens
      </Typography>
      {renderTokens(tokens.blue, blueTokensPerRow)}

      <Typography variant="h5" component="h2" sx={{ mt: 4, color: '#d9534f', textAlign: 'center' }}>
        Red Tokens
      </Typography>
      {renderTokens(tokens.red, redTokensPerRow)}
    </Box>
  );
}

export default Generator;
