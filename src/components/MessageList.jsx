import React from 'react'
import Message from './Message'

class MessageList extends React.Component {
    render() {
        if (this.props.data.length === 0) {
            return(
                <div>
                    <h3>No message yet</h3>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.data.map((message) => {
                    return (
                        <Message key={message} data={message} />
                    )
                })}
            </ul>
        )
    }
}

export default MessageList