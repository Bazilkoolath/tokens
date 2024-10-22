import React, { useState } from 'react';
import "./Generator.css";

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
      <div key={index} className="tokens-row">
        {row.map((token, idx) => (
          <div
            key={idx}
            className={`token ${token.color}`}
          >
            {token.label}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="container">
      <h1>Token Generator Application</h1>
      <div className="input-group">
        <label><b>Number Of Blue Tokens</b></label>
        <input
          type="number"
          placeholder="Number Of Blue Tokens"
          value={blueTokenCount}
          onChange={(e) => setBlueTokenCount(e.target.value)} />

        <label><b>Blue Token Prefix</b></label>
        <input
          type="text"
          placeholder="Blue Token Prefix"
          value={blueTokenPrefix}
          onChange={(e) => setBlueTokenPrefix(e.target.value)}/>

        <label><b>Blue Tokens Per Row</b></label>
        <input
          type="number"
          placeholder="Blue Tokens Per Row"
          value={blueTokensPerRow}
          onChange={(e) => setBlueTokensPerRow(e.target.value)}/>

        <label><b>Number Of Red Tokens</b></label>
        <input
          type="number"
          placeholder="Number Of Red Tokens"
          value={redTokenCount}
          onChange={(e) => setRedTokenCount(e.target.value)}/>

        <label><b>Red Token Prefix</b></label>
        <input
          type="text"
          placeholder="Red Token Prefix"
          value={redTokenPrefix}
          onChange={(e) => setRedTokenPrefix(e.target.value)}/>

        <label><b>Red Tokens Per Row</b></label>
        <input
          type="number"
          placeholder="Red Tokens Per Row"
          value={redTokensPerRow}
          onChange={(e) => setRedTokensPerRow(e.target.value)}/>
      </div>

      <div className="button-group">
        <button onClick={handleGenerate}>Generate</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <h2>Blue Tokens</h2>
      {renderTokens(tokens.blue, blueTokensPerRow)}

      <h2>Red Tokens</h2>
      {renderTokens(tokens.red, redTokensPerRow)}
    </div>
  );
}

export default Generator;
