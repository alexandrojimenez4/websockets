import React from 'react'

class ChatForm extends React.Component {

    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Author:</label>
                        <input 
                            type="text" name="author" 
                            onChange={this.props.onChange}
                            className="form-control"
                            value={this.props.formValues.author} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Message:</label>
                        <textarea type="text" name="text" 
                            onChange={this.props.onChange} 
                            className="form-control"
                            value={this.props.formValues.text} />
                    </div>
                    
                    <input type="submit" value="enviar" className="btn btn-info" />
                </form>
            </React.Fragment>
        )
    }
}

export default ChatForm