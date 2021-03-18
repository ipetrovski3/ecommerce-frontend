import React, {Component} from 'react'
import Category from './category'

const api_url = 'https://backshopmk.herokuapp.com/api/v1/categories'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    this.getCategories()
  }
  getCategories() {
    fetch(api_url)
    .then(response => response.json())
    .then(response_items => {
      this.setState({
        categories: response_items
      })
    })
  }
  render () {
    return (
      <div>
        <ul id="categories_list">
          {this.state.categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
          }
          <li>Category 1</li>
        </ul>
      </div>
    )
  }
}

export default Categories