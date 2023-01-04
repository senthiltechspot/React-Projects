import React from "react";
 
class UseRefInClassComponent extends React.Component{
    constructor(props){
        super(props)
        //Create a ref to store the textInput DOM element
        this.textInput = React.createRef()
    }
 
    focusOnTextInput(){
        this.textInput.current.focus()
        console.log("Value inside the useRef object" + this.textInput.current)
    }
 
    render(){
        return(
            <div>
                <input type="text" ref={this.textInput}/>
                <input type="button" value="Focus on the input box"
                onClick={() => this.focusOnTextInput()}/>
            </div>
        )
    }
}
 
export default UseRefInClassComponent
