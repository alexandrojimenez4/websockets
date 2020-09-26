import io from "socket.io-client"

var socket = io.connect('http://localhost:3001', { 'forceNew': true });

async function getMessages(data) {
	return data
}
socket.on('messages', data => {
	return data
})

function render (data){
	var html = data.map(function(elem, index){
		return(`<div>
					<strong>${elem.author}</strong>:
					<em>${elem.text}</em>
				</div>`)
	}).join(" ");

 	document.getElementById('messages').innerHTML = html;
}

async function addMessage(options = {}) {
	var payload = {
		author: document.getElementById('username').value,
		text: document.getElementById('texto').value
	};
	const response = await socket.emit('new-message', options.body);
	return response
}

const api = {
	messages: {
		list() {
			
		},
		create(message) {
			return addMessage({
				body: JSON.stringify(message)
			})
		}
	}
}

export default api