import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class CategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api_url: props.api_url,
      category: ""
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="category_form" autoComplete="off">
        <TextField id="category_name" label="Category Name" variant="outlined" type="text" name="category[name]" onChange={this.handleCategoryChange}/>
        <Button variant='contained' color="primary" type="submit">Create Category</Button>
        </form>
      </div>
    )
  }
}

export default CategoryForm