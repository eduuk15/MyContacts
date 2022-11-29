const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
	async index(request, response) {
		const contacts = await ContactRepository.findAll();

		response.json(contacts);
	}

	show() {
		// Obter um registro
	}

	store() {
		// Criar novo registro
	}

	update() {
		// Editar um registro
	}

	delete() {
		// Deletar um registro
	}
}

module.exports = new ContactController();
