import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            comments: '',
            
        }
        
    }

    handleChange = (event) => {
        const { name, value } = event.target
        
        this.setState({ [name]: value })
    }

    handleClick = () => {
        ReactDOM.render(<p id='thank'>Thank You For Your Feedback!</p>, document.querySelector('form'))
    }

    
    render(){
        return(
            <React.Fragment>
                <h1 className='contacth1'>Contact Us</h1>
                <form>
                    <input 
                    type='text' 
                    name='name'  
                    value = {this.state.Name}
                    onChange = {this.handleChange} 
                    placeholder='Name'
                    />
                    <input 
                    type='text' 
                    name='email'  
                    value = {this.state.email}
                    onChange = {this.handleChange} 
                    placeholder='Email'
                    />

                    <input 
                    type='text' 
                    name='phone'  
                    value = {this.state.phone}
                    onChange = {this.handleChange} 
                    placeholder='Phone Number'
                    />
                    
                    <textarea 
                    type='text' 
                    name='comments'  
                    value = {this.state.comments}
                    onChange = {this.handleChange} 
                    placeholder='Comments'
                    />

                    <button type='button' onClick={this.handleClick}>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}




export default Contact