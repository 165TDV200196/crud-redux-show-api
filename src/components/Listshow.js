import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteapi, listapi } from '../actions'

export class Listshow extends Component {
    componentDidMount() {
        this.props.showapi();
    }
    render() {
        return (
            <div>
                {this.props.tasks.map((ok, index) => (
                    <p>{ok.id}: {ok.name} <span className="action">xoa</span> <span className="action" onClick={
                        () => {
                            this.props.deleteapi(ok.id)
                        }
                    }>delete</span></p>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => {
    return {
        showapi: () => {
            dispatch(listapi());
        }, deleteapi: (id) => {
            dispatch(deleteapi(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listshow)
