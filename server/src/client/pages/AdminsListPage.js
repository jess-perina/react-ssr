import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(({ id, name }) => {
      return (
        <li key={id}>{name}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        {this.renderAdmins()}
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins }
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}
