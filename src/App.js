import React, { useState, useEffect } from 'react'
import Header from './componets/ui/header'
import './App.css';
import axios from 'axios'
import Categories from './categories/categories'
import Typography from "@material-ui/core/Typography"
import CategoryForm from './categories/categoryForm';

const App = () => {
  return (
    <div className="container">
     <Typography variant="h2">Welcome</Typography>
     <hr />
     <CategoryForm />
      <Categories />
    </div>
  );
}

export default App;
