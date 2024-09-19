const express = require('express');
const { Expense, BudgetGoal, SavingsGoal } = require('../models/BudgetModels');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

// Add Expense
router.post('/expense', verifyToken, async (req, res) => {
    try {
        const { amount, category, description } = req.body;
        const expense = new Expense({ 
            userId: req.userId, 
            amount, 
            category, 
            description 
        });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
});

// Get All Expenses for a User
router.get('/expenses', verifyToken, async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.userId });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve expenses' });
    }
});

// Set Budget Goal
router.post('/budget-goal', verifyToken, async (req, res) => {
    try {
        const { category, targetAmount, deadline } = req.body;
        const budgetGoal = new BudgetGoal({ 
            userId: req.userId, 
            category, 
            targetAmount, 
            deadline 
        });
        await budgetGoal.save();
        res.status(201).json(budgetGoal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to set budget goal' });
    }
});

// Get Budget Goals for a User
router.get('/budget-goals', verifyToken, async (req, res) => {
    try {
        const budgetGoals = await BudgetGoal.find({ userId: req.userId });
        res.status(200).json(budgetGoals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve budget goals' });
    }
});

// Create Savings Goal
router.post('/savings-goal', verifyToken, async (req, res) => {
    try {
        const { goalName, targetAmount, deadline } = req.body;
        const savingsGoal = new SavingsGoal({ 
            userId: req.userId, 
            goalName, 
            targetAmount, 
            deadline 
        });
        await savingsGoal.save();
        res.status(201).json(savingsGoal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create savings goal' });
    }
});

// Get Savings Goals for a User
router.get('/savings-goals', verifyToken, async (req, res) => {
    try {
        const savingsGoals = await SavingsGoal.find({ userId: req.userId });
        res.status(200).json(savingsGoals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve savings goals' });
    }
});

module.exports = router;
