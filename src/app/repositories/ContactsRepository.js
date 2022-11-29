const { uuid } = require('uuidv4');

const contacts = [
	{
		id: uuid(),
		name: 'Eduardo',
		email: 'eduardoknopp7@gmail.com',
		phone: '47996264041',
		category_id: uuid()
	},
];

class ContactRepository {
	findAll() {
		return new Promise((resolve) => {
			resolve(contacts);
		});
	}
}

module.exports = new ContactRepository();
