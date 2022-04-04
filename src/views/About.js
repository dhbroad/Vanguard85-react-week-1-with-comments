import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
          <ul>
            {this.props.myClass.map((person,i)=><li key={i} >{person}</li>)} {/* You can't use a for loop, but you can still do .map() 
            Each thing in the list needs a unique key, so we are creating a key using the index {i} */}
          </ul>
      </div>
    )
  }
}
