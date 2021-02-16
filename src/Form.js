import axios from 'axios';
import React from 'react';

class Form extends React.Component {
    userNameInput = React.createRef();


    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resp = await axios.get(`https://api.github.com/users/${this.userNameInput.current.value}`)
            console.log(resp);
        } catch (error) {
            console.log(error)
        }
        
       
        // console.log(this.userNameInput.current.value)
        // Code I want to execute
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type ="text" placeholder="Github username" ref={this.userNameInput} required>
                </input>
                
                <button>Add Card</button>

            </form>
        );
    }
}

export default Form;