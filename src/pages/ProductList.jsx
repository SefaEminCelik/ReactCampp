import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../Services/productService'
import { AddtoCart } from "../store/actions/cartActions"
import {toast} from "react-toastify"

export default function ProductList() {

  const dispatch = useDispatch()

  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setTechnologies(result.data.data))
  }, [])

  const handleAddtoCart = (technology) => {
    dispatch(AddtoCart(technology))
    toast.success(`${technology.technologyName} Sepete Eklendi!`)
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Teknoloji Adı</Table.HeaderCell>
            <Table.HeaderCell>Dil Adı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            technologies.map((technology) => (
              <Table.Row key={technology.technologyId}>
                <Table.Cell><Link to={`/products/${technology.technologyId}`}>{technology.technologyName}</Link></Table.Cell>
                <Table.Cell>{technology.language.languageName}</Table.Cell>
                <Table.Cell><Button onClick={()=>handleAddtoCart(technology)}>Sepete Ekle</Button></Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
