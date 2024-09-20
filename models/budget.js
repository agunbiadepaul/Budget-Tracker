const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    monthlyIncome: { type: Number, required: true },
    expenses: [{ name: String, amount: Number, category: String }],
    savingsGoal: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Budget', BudgetSchema);
