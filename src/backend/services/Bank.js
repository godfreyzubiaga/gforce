import { ObjectId } from 'mongodb';
import Bank from '../payment-gateway/UnionBank';

class BankService {

    constructor(db) {
        this.db = db;
    }

    async create(data, params) {
        // own: bankAccountId employee, amount of transaction, 
        await this.db('transactions').create(data);
        return await Bank.createNewAccount(data.accountName);
        // return await this.db.collection('bankDetails')
    }

    async find(params) {
        return await this.db('transactions').find().toArray();
    }
            //account number
    async get(id, params) {
        return await Bank.requestAccountDetails(id);
    }

    async patch(id, data, params) {
        const {employer, employee, ammount} = data;
        return await Bank.transferFunds(employer, employee, ammount);
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