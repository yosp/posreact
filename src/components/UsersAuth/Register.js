import React, { Component } from 'react'
import { connect } from 'react-redux'


import { getUser, registerUser } from '../../actions/UserAction'

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onGetUser: () => dispatch(getUser('yeisp1011@gmail.com')),
    onRegisterUser: (email, fullname, password, password2)=> dispatch(registerUser(email, fullname, password, password2))
  }
}
class Register extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      fullname: '',
      password: '',
      password2: ''
    }
  }

  // componentDidMount() {
  //   this.props.onGetUser();
  // }
     render () {  
      //  const {
      //   fullname
      //  } = this.props.users
       
      return (
        <div className="row">
          <h1>Registrar Usuario</h1>
          <div className="input-field col s4 offset-l4">
            <input id="email" type="text" className="validate" value={this.state.email} 
              onChange= {e => this.setState({ email: e.target.value })} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s4 offset-l4">
            <input id="fullname" type="text" className="validate" value={this.state.fullname} 
              onChange= {e => this.setState({ fullname: e.target.value })} />
            <label htmlFor="fullname">Nombre Completo</label>
          </div>
          <div className="input-field col s4 offset-l4">
            <input id="password" type="password" className="validate" value={this.state.password} 
              onChange= {e => this.setState({ password: e.target.value })} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s4 offset-l4">
            <input id="password2" type="password" className="validate" value={this.state.password2} 
              onChange= {e => this.setState({ password2: e.target.value })} />
            <label htmlFor="password2">Repita el Password</label>
          </div>
          <div className="col s4 offset-l4">
          <button type="button" className="btn btn-primary waves-effect waves-light"
            onClick={() => this.props.onRegisterUser(this.state.email, this.state.fullname,
                                  this.state.password, this.state.password2)}>
              Guardar
            </button>
          </div>
        </div>
      )
    }
  }

  const UserRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

  export default UserRegister