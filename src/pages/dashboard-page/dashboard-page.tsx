import { GetAllExpensesCount, GetAllFinancesCount, GetCurrentWeekDailyExpenseCount, GetCurrentWeekDailyFinanceCount, GetCurrentWeekDailyIncomeExpenseCount, GetExpenseByYear, GetFinanceByYear, GetLastMonthlyFinanceCount, GetLastYearFinanceCount, GetThisMonthlyExpensesCount, GetThisMonthlyFinanceCount, GetThisYearFinanceCount, GetTodayExpensesCount } from '@zenra/api';
import { DashboardComponent } from '@zenra/components';
import { CurrentWeekDailyIncomeExpenseResponse, ExpenseCurrentWeekDailyResponse, ExpenseMonthResponse, FinanceCurrentWeekDailyResponse, FinanceMonthResponse, FinanceYearResponse } from '@zenra/model';
import { RootState } from '@zenra/store';
import React from 'react';
import { useSelector } from 'react-redux';

const datasetFinanceByYear = [
    { amount: 0, month: 'January' },
    { amount: 0, month: 'February' },
    { amount: 0, month: 'March' },
    { amount: 0, month: 'April' },
    { amount: 0, month: 'May' },
    { amount: 0, month: 'June' },
    { amount: 0, month: 'July' },
    { amount: 0, month: 'August' },
    { amount: 0, month: 'September' },
    { amount: 0, month: 'October' },
    { amount: 0, month: 'November' },
    { amount: 0, month: 'December' },
];

const currrentWeekDailyIncomeExpenseData =
    [
        {
            amountIncome: 0,
            amountExpense: 0,
            day: 'Sun',
        },
        {
            amountIncome: 0,
            amountExpense: 0,
            day: 'Mon',
        },
        {
            amountIncome: 0,
            amountExpense: 0,
            day: 'Tue',
        },
        {
            amountIncome: 0,
            amountExpense: 0,
            day: 'Wed',
        },
        {
            amountIncome: 0,
            amountExpense: 0,
            day: 'Thu',
        },
        {
            amountIncome: 0,
            amountExpense: 0,
            day: 'Fri',
        },
        {
            amountIncome: 0,
            amountExpense: 0,
            day: 'Sat',
        }
    ]

export const Dashboard: React.FC = () => {
    const { monthWiseYear } = useSelector((state: RootState) => state.dashboard);
    const thisMonth = GetThisMonthlyFinanceCount(true)?.response?.data || ({} as FinanceMonthResponse);
    const lastMonth = GetLastMonthlyFinanceCount(true)?.response?.data || ({} as FinanceMonthResponse);
    const thisYear = GetThisYearFinanceCount(true)?.response?.data || ({} as FinanceYearResponse);
    const lastYear = GetLastYearFinanceCount(true)?.response?.data || ({} as FinanceYearResponse);
    const financeByYear = GetFinanceByYear(monthWiseYear, true)?.response?.data || ({} as FinanceMonthResponse);
    const thisMonthExpense = GetThisMonthlyExpensesCount(true)?.response?.data || ({} as ExpenseMonthResponse);
    const todayExpenseCount = GetTodayExpensesCount(true)?.response?.data || 0;
    const allExpenseCount = GetAllExpensesCount(true)?.response?.data || 0;
    const allFinanceCount = GetAllFinancesCount(true)?.response?.data || 0;
    const expenseByYear = GetExpenseByYear(monthWiseYear, true)?.response?.data || ({} as ExpenseMonthResponse);
    const getCurrentWeekDailyIncomeExpense = GetCurrentWeekDailyIncomeExpenseCount(true)?.response?.data || ({} as CurrentWeekDailyIncomeExpenseResponse);

    return (
        <DashboardComponent
            thisMonth={thisMonth.result}
            lastMonth={lastMonth.result}
            thisYear={thisYear.result}
            lastYear={lastYear.result}
            financeByYear={financeByYear?.result || datasetFinanceByYear}
            thisMonthExpense={thisMonthExpense.result}
            todayExpenseCount={todayExpenseCount.result}
            allExpenseCount={allExpenseCount.result}
            allFinanceCount={allFinanceCount.result}
            expenseByYear={expenseByYear?.result || datasetFinanceByYear}
            getCurrentWeekDailyIncomeExpense={getCurrentWeekDailyIncomeExpense?.result || currrentWeekDailyIncomeExpenseData}
            isAuthenticated={true}
        />
    );
};
