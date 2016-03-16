var actions = {
	appendText: function(text) {
		return {
			type: 'APPEND_TEXT',
			text: text
		}
	}
}

module.exports = actions;