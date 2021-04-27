import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addapi } from '../actions'

export class Addtask extends Component {
    state = {
        name: '',
        age: ''
    }
    onSubmit = e => {
        e.preventDefault()
        const { name, age } = this.state
        this.props.addapi(name, age)
    }
    hangdleOnchange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { name, age } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <table>
                    <tr>
                        <td>name:</td>
                        <td><input type="text" name="name" value={name} onChange={this.hangdleOnchange} id="" /></td>
                    </tr>
                    <tr>
                        <td>age:</td>
                        <td><input type="number" name="age" value={age} onChange={this.hangdleOnchange} id="" /></td>
                    </tr>
                    <tr><td><input type="submit" value="Add" /></td></tr>
                </table>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return {
        addapi: (name, age) => {
            dispatch(addapi(name, age));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addtask)
