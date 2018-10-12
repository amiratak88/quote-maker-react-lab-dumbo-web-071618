export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUOTE':
			return [...state, action.quote]
		case 'REMOVE_QUOTE':
			return state.filter(q => q.id !== action.quoteId)
		case 'UPVOTE_QUOTE':
			const quoteToBeUpvoted = {...state.find(q => q.id === action.quoteId)}
			const otherQuotes1 = state.filter(q => q.id !== action.quoteId)
			return [...otherQuotes1, { ...quoteToBeUpvoted, votes: ++quoteToBeUpvoted.votes }]
		case 'DOWNVOTE_QUOTE':
			const quoteToBeDownvoted = {...state.find(q => q.id === action.quoteId)}
			const otherQuotes2 = state.filter(q => q.id !== action.quoteId)
			return quoteToBeDownvoted.votes ? [...otherQuotes2, { ...quoteToBeDownvoted, votes: --quoteToBeDownvoted.votes }] : state
		default:
			return state
	}
}
