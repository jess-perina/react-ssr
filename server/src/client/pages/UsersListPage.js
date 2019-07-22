import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(({id, name}) => {
      return (
        <li key={id}>{name}</li>
      )
    })
  }

  head() {
    return (
      <Helmet>
        <title>Users List App</title>
        <meta property="og:title" content="Users List App" />
      </Helmet>
  )
  }

  render() {
    return (
      <div>
        {this.head()}
        UsersList
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return { users }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}
