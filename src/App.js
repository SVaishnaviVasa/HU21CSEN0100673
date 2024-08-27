import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './Pages/AllProductsPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={AllProductsPage} />
          <Route path="/product-details" component={ProductDetailsPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
