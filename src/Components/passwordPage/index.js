import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../passwordItem/Index'

import './index.css'

class PasswordPage extends Component {
  state = {
    passwordDetailList: [],
    currentWebsite: '',
    currentUsername: '',
    currentPassword: '',
    showPassword: false,
    search: '',
  }

  updateWebsite = event => {
    const name = event.target.value
    this.setState({currentWebsite: name})
  }

  updateUsername = event => {
    const name = event.target.value
    this.setState({currentUsername: name})
  }

  updatePassword = event => {
    const name = event.target.value
    this.setState({currentPassword: name})
  }

  updateForm = event => {
    event.preventDefault()
    const {currentPassword, currentUsername, currentWebsite} = this.state
    const newList = {
      id: uuidv4(),
      websiteName: currentWebsite,
      userName: currentUsername,
      password: currentPassword,
    }

    this.setState(prev => ({
      passwordDetailList: [...prev.passwordDetailList, newList],
      currentWebsite: '',
      currentUsername: '',
      currentPassword: '',
    }))
  }

  toggleShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  updateSearch = event => {
    const value1 = event.target.value
    this.setState({search: value1})
  }

  deleteList = id => {
    const {passwordDetailList} = this.state

    const newList = passwordDetailList.filter(eachItem => eachItem.id !== id)

    this.setState({passwordDetailList: newList})
  }

  render() {
    const {
      passwordDetailList,
      currentPassword,
      currentUsername,
      currentWebsite,
      search,
      showPassword,
    } = this.state

    const finalList = passwordDetailList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(search.toLowerCase()),
    )

    const form = (
      <div className="form-bg">
        <h1>Add New Password</h1>
        <form className="" onSubmit={this.updateForm}>
          <div className="input-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <hr />
            <input
              onChange={this.updateWebsite}
              type="input"
              placeholder="Enter Website"
              value={currentWebsite}
              className="input"
            />
          </div>
          <div className="input-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <hr />
            <input
              onChange={this.updateUsername}
              type="input"
              placeholder="Enter Username"
              value={currentUsername}
              className="input"
            />
          </div>
          <div className="input-form">
            <img
              className="input-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <hr />
            <input
              onChange={this.updatePassword}
              type="input"
              placeholder="Enter Password"
              value={currentPassword}
              className="input"
            />
          </div>
          <div className="button-container">
            <button className="submit-btn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )

    const noPasswordContainer = (
      <div className="no-password-container">
        <img
          className="img2"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p>No Password</p>
      </div>
    )

    const listOfPassword = (
      <ul className="list-container">
        {finalList.map(eachItem => (
          <PasswordItem
            key={eachItem.id}
            details={eachItem}
            showPassword={showPassword}
            deleteList={this.deleteList}
          />
        ))}
      </ul>
    )

    const x = (
      <div className="main-bg">
        <div className="">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="container-1">
          {form}
          <div className="password-section-img">
            <img
              className="password-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="container-2">
          <div className="c2-header">
            <div className="h2">
              <p className="margin-zero">Your Password</p>
              <p className="margin-zero count">{finalList.length}</p>
            </div>
            <div className="horizontal">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <br />
              <input
                type="search"
                placeholder="Search"
                value={search}
                onChange={this.updateSearch}
              />
            </div>
          </div>
          <hr />
          <div>
            <div className="show-password-section">
              <label className="password-label">
                <input
                  className="check-box"
                  type="checkbox"
                  onChange={this.toggleShowPassword}
                />
                Show Password
              </label>
            </div>
          </div>
          <div>
            {finalList.length === 0 ? noPasswordContainer : listOfPassword}
          </div>
        </div>
      </div>
    )
    return x
  }
}
export default PasswordPage
