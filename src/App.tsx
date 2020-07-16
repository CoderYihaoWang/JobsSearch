import React from 'react';
import { Container, Grid, makeStyles, createStyles, Theme, CssBaseline } from '@material-ui/core';
import SearchPanel from './Components/SearchPanel';
import ResultsPanel from './Components/ResultsPanel';
import './App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'blue'
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <CssBaseline>
      <div className="App">
        <Container maxWidth="lg">
          <h1>Github Jobs Search</h1>
        </Container>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item sm={3}>
              <SearchPanel></SearchPanel>
            </Grid>
            <Grid item sm={9}>
              <ResultsPanel></ResultsPanel>
            </Grid>
          </Grid>
        </Container>
      </div>  
    </CssBaseline>
  );
}

