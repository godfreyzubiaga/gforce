import { ObjectId } from 'mongodb';
import Bank from '../payment-gateway/UnionBank';

class BankService {

    constructor(db) {
        this.db = db;
    }
    // return await this.db.collection('votes').insert(data);
    async create(data, params) {
        // own: bankAccountId employee, amount of transaction,
        // await this.db.collection('transactions').insert(data);
        // return await Bank.createNewAccount(data.accountName);
        const result = await Bank.createNewAccount(data.accountName);
        const payload = {
            accountNo : result[0].account_no,
            _id : result._id
        }
        return await this.db.collection('transactions').insert(payload);
    }

    async find(params) {
        return await this.db('transactions').find().toArray();
    }
            //account number
    async get(id, params) {
        return await Bank.requestAccountDetails(id);
    }

    async patch(id, data, params) {
        const {employer, employee, amount} = data;
        return await Bank.initiatePayment(employer, employee, amount);
    }

    async update(id, data, params) {

    }

    async remove(id) {

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
