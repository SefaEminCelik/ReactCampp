import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router'


export default function Dashboard() {
  return (
    <div>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
            <Route exact path="/" element={<ProductList/>}/>
            <Route path="/products" element={<ProductList/>}/>
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </div>
  )
}
