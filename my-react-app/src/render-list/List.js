import React, { Component } from 'react'
const stateInfo = [
  {id: "1", state: "Telenagana", city:"Hyderabad"},
  {id:"2", state: "Karnataka", city:"Bengaluru"},
  {id:"3", state: "Tamilnadu", city:"Chennai"}
]
export class List extends Component {
  render() {
    return (
      <div>
        {
          stateInfo.map(stateData => {
            return(
              <div key={stateData.id}>{stateData.state} - {stateData.city}</div>
            )
          })
        }
      </div>
    )
  }
}

export default List
