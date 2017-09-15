import { ObjectId } from 'mongodb';

class BankService {

    constructor(db) {
        this.db = db;
    }

    create(data, params) {

    }

    find(params) {

    }

    get(id, params) {

    }

    patch(id, data, params) {

    }

    update() {

    }

    remove() {

    }
}

export default function setupBankService(db) {
    return function() {
        const before = {};
        const after = {};
        this.use('/api/bank', new BankService(db));
        const service = this.service('/api/bank');
        service.before(before);
        service.after(after);
    }
} 