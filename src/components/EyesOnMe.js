import React from 'react'

export default class EyesOnMe extends React.Component{
    constructor(){
        super()   
    }

    handleOnFocus=()=>{
        console.log('Good!')
    }

    handleOnBlur=()=>{
        console.log('Hey! Eyes on me!')
    }
    render(){
        return <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}/>;
    }
}