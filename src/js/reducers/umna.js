const initialState = {
	restaurantInfo: [],
	umnaHeadlines: [],
	umnaPosts: [],
	page: 'home'
}

export default function umna(state = initialState, action) {
	switch(action.type) {

		case 'SET_SPREADSHEET_DATA':

			return {
				...state,
				umnaHome: action.data[0],
                umnaHeadlines: action.data[1],
                umnaPosts: action.data[2]
			}

		case 'GO_TO':
			return {
				...state,
				page: action.page
			}

		default:
			return state

	}
}
