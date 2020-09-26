import React from 'react'
import ChatForm from '../components/ChatForm'
import MessagesList from '../components/MessageList'
import io from "socket.io-client"
import api from '../api'

class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            form: {
                author: '',
                text: ''
            },
            data: []
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        console.log('submit')
        this.setState({loading:true, error: null})
        try {
            await api.create(this.state.form)
            this.setState({loading: false, error: null})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <h1>My app chat</h1>
                <div className="Messages__container">
                    <MessagesList data={this.state.data} />
                </div>
                <ChatForm
                    onSubmit={this.handleSubmit} 
                    onChange={this.handleChange} 
                    formValues={this.state.form} />
            </div>
        )
    }
}

export default Chat