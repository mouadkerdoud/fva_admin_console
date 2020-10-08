import React, { Component } from 'react'
import ReactTags from 'react-tag-autocomplete'




export default class Tags extends Component {
    constructor (props) {
        super(props)
     
        this.state = {
          tags: [
            { id: 1, name: "Apples" },
            { id: 2, name: "Pears" }
          ],
          suggestions: [
            { id: 3, name: "Bananas" },
            { id: 4, name: "Mangos" },
            { id: 5, name: "Lemons" },
            { id: 6, name: "Apricots" }
          ]
        }
     
        this.reactTags = React.createRef()
      }
     
      onDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
      }
     
      onAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
      }
     
      render () {
        const menuStyle = {
            borderRadius: '3px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2px 0',
            fontSize: '90%',
            position: 'fixed',
            overflow: 'auto',
            maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
            "zIndex": 100,
          };
        return (
            <div className="container">
                <ReactTags
                    ref={this.reactTags}
                    tags={this.state.tags}
                    suggestions={this.state.suggestions}
                    onDelete={this.onDelete.bind(this)}
                    onAddition={this.onAddition.bind(this)}
                    inputProps={{ style: { width: '100%',height: '100px'}, placeholder: 'test'}}  
                    wrapperStyle={{ width:  '100%'   }}

                 />
            </div>
         
        )
    }
}
