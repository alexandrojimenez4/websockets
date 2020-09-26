import React from 'react'

class ChatForm extends React.Component {

    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.props.onSubmit}>
                    <input type="text" name="author" onChange={this.props.onChange} value={this.props.formValues.author} />
                    <input type="text" name="text" onChange={this.props.onChange} value={this.props.formValues.text} />
                    <input type="submit" value="enviar" />
                </form>
            </React.Fragment>
        )
    }
}

export default ChatForm