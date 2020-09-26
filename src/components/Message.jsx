import React from 'react'
import './styles/Message.css'

class Message extends React.Component {
    render() {
        if (this.props.author === this.props.message.author) {
            return(
                <li className="media owner">
                    <div className="media-body">
                        <h5 className="mt-0 mb-1 text-right">{this.props.message.author} <small className="font-weight-lighter"><i>{this.props.message.send_at}</i></small></h5>
                        <p className="text-right">{this.props.message.text}</p>
                    </div>
                    <img src="https://www.gravatar.com/avatar/205e460b489e2e5b68aec07710c08d50?d=identicon" className="ml-3" alt="avatar" />
                </li>
            )
        }
        return (
            <li className="media other">
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b68aec07710c08d50?d=identicon" className="align-self-center mr-3" alt="avatar" />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.message.author} <small className="font-weight-lighter"><i>{this.props.message.send_at}</i></small></h5>
                    <p>{this.props.message.text}</p>
                </div>
            </li>
        )
    }
}

export default Message