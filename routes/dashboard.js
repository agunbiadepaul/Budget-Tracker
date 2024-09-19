const express = require('express');
const router = express.Router();
const Budget = require('../models/budget');
const auth = require('../middleware/auth');

// Get user budget
router.get('/budget', auth, async (req, res) => {
    try {
        const budget = await Budget.findOne({ user: req.user.id });
        if (!budget) return res.status(400).json({ message: 'No budget found' });
        res.json(budget);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update budget (income, expenses, goals)
router.post('/budget', auth, async (req, res) => {
    const { monthlyIncome, expenses, savingsGoal } = req.body;
    try {
        let budget = await Budget.findOne({ user: req.user.id });
        if (!budget) {
            budget = new Budget({ user: req.user.id, monthlyIncome, expenses, savingsGoal });
        } else {
            budget.monthlyIncome = monthlyIncome;
            budget.expenses = expenses;
            budget.savingsGoal = savingsGoal;
        }
        await budget.save();
        res.json(budget);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
