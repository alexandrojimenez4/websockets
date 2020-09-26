import React from 'react'
import ChatForm from '../components/ChatForm'
import MessagesList from '../components/MessageList'
import io from "socket.io-client"

const socket = io.connect('http://localhost:3001', { 'forceNew': true })

class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            author: '',
            loading: true,
            error: null,
            form: {
                author: '',
                text: ''
            },
            data: []
        }
    }

    componentDidMount() {
        socket.on("messages", data => this.setState({ data: data }));
    }

    handleSubmit = async e => {
        e.preventDefault()
        console.log('submit')
        const message = {
            id: Math.floor(Math.random() * 1000),
            ...this.state.form,
        }
        socket.emit('new-message', message)
    }

    handleChange = (e) => {
        if (e.target.name === 'author') {
            this.setState({
                author: e.target.value
            })
        }
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Hello world app</h1>
                <div className="Messages__container">
                    <MessagesList data={this.state.data} author={this.state.author} />
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