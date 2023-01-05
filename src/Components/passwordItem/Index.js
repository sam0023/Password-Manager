import './index.css'

const PasswordItem = props => {
  const {details, deleteList, showPassword} = props

  const {id, websiteName, userName, password} = details

  const requestDeleteList = () => {
    deleteList(id)
  }

  const symbol = websiteName[0].toUpperCase()

  const finalPassword = showPassword ? password : '*'.repeat(password.length)

  const x = (
    <li>
      <div>
        <div>
          <h1>{symbol}</h1>
        </div>
        <div>
          <p>{websiteName}</p>
          <p>{userName}</p>
          <p>{finalPassword}</p>
        </div>
        <div>
          <button onClick={requestDeleteList} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
  return x
}
export default PasswordItem
