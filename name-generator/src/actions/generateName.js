import store from '../store' 

function getHipsterName(name, email) {
    return name.split('').map(function (char) {
        return char.charCodeAt(0).toString(2)
    }).join(' ') + ' * ' + email;
}

export function generateName(form) {
	const name = form.name 
	const email = form.email
	const theme = form.theme
	let newName;

switch (theme) {
	case 'classic':
		newName = `${name} Alpha ${email}`
		break;

	case 'Bussiness':
		newName = `${name}exia-${email}`
		break;

	default:
		newName = getHipsterName(name, email)
  	}

const result = store.state.result
result['companyName'] = newName
store.setState({ result })

}

export function changePage(pageName) {
	store.setState({ pageName })
}