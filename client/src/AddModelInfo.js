import React from 'react';


class AddModelInfo extends React.Component {
  render(){
    return (
      <form>
        <label> Model Name:     
          <input/>
        </label>

        <label> Description:     
          <input/>
        </label>

        <label> Picture 1:     
          <input/>
        </label>

        <label> Picture 2:     
          <input/>
        </label>

        <button>add</button>

    </form>
    )
  }
}


export default AddModelInfo