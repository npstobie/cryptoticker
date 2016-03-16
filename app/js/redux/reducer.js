var getId = function(state) {
	return state.text.reduce(function(maxId, todo) {
		return Math.max(todo.id, maxId)
	}, -1) + 1;
}

var reducer = function(state, action) {
	switch (action.type) {
		case 'APPEND_TEXT':
			return Object.assign(
				{},
				state,
				{text: [{
					id: getId(state), 
					text: action.text
				}, state.todos.slice()]
				});
		
		default:
			return state;
	}
};  

module.exports = reducer;
