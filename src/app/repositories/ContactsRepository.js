const { v4 } = require('uuid');

let contacts = [
	{
		id: v4(),
		name: 'Eduardo',
		email: 'eduardoknopp7@gmail.com',
		phone: '47996264041',
		category_id: v4()
	},
	{
		id: v4(),
		name: 'Jose',
		email: 'jose@gmail.com',
		phone: '47988726666',
		category_id: v4()
	},
];

class ContactRepository {
	findAll() {
		return new Promise((resolve) => resolve(contacts));
	}

	findById(id) {
		return new Promise((resolve) => resolve(
			contacts.find((contact) => contact.id === id)
		));
	}

	findByEmail(email) {
		return new Promise((resolve) => resolve(
			contacts.find((contact) => contact.email === email)
		));
	}

	delete(id) {
		return new Promise((resolve) => {
			contacts = contacts.filter((contact) => contact.id !== id);
			resolve();
		});
	}

	create({ name, email, phone, category_id }) {
		return new Promise((resolve) => {
			const newContact = {
				id: v4(),
				name,
				email,
				phone,
				category_id
			};
			contacts.push(newContact);
			resolve(newContact);
		});
	}
}

module.exports = new ContactRepository();
