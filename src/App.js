import {Component} from 'react'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    editChange: '',
    isButtonClick: false,
  }

  onGetEdit = event => {
    this.setState({editChange: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClick: !prevState.isButtonClick}))
  }

  render() {
    const {editChange, isButtonClick} = this.state
    const EditOrSaveButton = isButtonClick ? 'Edit' : 'Save'
    return (
      <div className="container">
        <div className="input-container">
          <h1>Editable Text input</h1>
          <div>
            {isButtonClick ? (
              <p>{editChange}</p>
            ) : (
              <input type="text" value={editChange} onChange={this.onGetEdit} />
            )}
            <button
              className="save-button"
              type="button"
              onClick={this.onClickButton}
            >
              {EditOrSaveButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
