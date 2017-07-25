import store from '../store' 
import generateName from '../generateName'


export default function GenerateNameAction() {
	store.setState({
		loading : true
	})
	setTimeout(() => {
		const generatedName = generateName(store.state.form)
		store.setState({
			companyName: generatedName,
			loading : false
		})
	},2000)
}

