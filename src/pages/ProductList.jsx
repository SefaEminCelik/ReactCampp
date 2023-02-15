import React, { useState, useEffect, useDebugValue } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import ProductService from '../Services/productService'

export default function ProductList() {

  useDispatch

  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setTechnologies(result.data.data))
  }, [])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Teknoloji Adı</Table.HeaderCell>
            <Table.HeaderCell>Dil Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            technologies.map((technology) => (
              <Table.Row key={technology.technologyId}>
                <Table.Cell><Link to={`/products/${technology.technologyId}`}>{technology.technologyName}</Link></Table.Cell>
                <Table.Cell>{technology.language.languageName}</Table.Cell>
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
