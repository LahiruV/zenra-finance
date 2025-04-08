import { GetAllExpensesCount, GetCurrentWeekDailyFinanceCount, GetFinanceByYear, GetLastMonthlyFinanceCount, GetLastYearFinanceCount, GetThisMonthlyExpensesCount, GetThisMonthlyFinanceCount, GetThisYearFinanceCount, GetTodayExpensesCount } from '@zenra/api';
import { DashboardComponent } from '@zenra/components';
import { ExpenseMonthResponse, FinanceCurrentWeekDailyResponse, FinanceMonthResponse, FinanceYearResponse } from '@zenra/model';
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

const currrentWeekDailyFinanceCountData = [
    {
        amount: 0,
        day: 'Sun',
    },
    {
        amount: 0,
        day: 'Mon',
    },
    {
        amount: 0,
        day: 'Tue',
    },
    {
        amount: 0,
        day: 'Wed',
    },
    {
        amount: 0,
        day: 'Thu',
    },
    {
        amount: 0,
        day: 'Fri',
    },
    {
        amount: 0,
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
    const currrentWeekDailyFinanceCount = GetCurrentWeekDailyFinanceCount(true)?.response?.data || ({} as FinanceCurrentWeekDailyResponse);
    const thisMonthExpense = GetThisMonthlyExpensesCount(true)?.response?.data || ({} as ExpenseMonthResponse);
    const todayExpenseCount = GetTodayExpensesCount(true)?.response?.data || 0;
    const allExpenseCount = GetAllExpensesCount(true)?.response?.data || 0;
    return (
        <DashboardComponent
            thisMonth={thisMonth.result}
            lastMonth={lastMonth.result}
            thisYear={thisYear.result}
            lastYear={lastYear.result}
            financeByYear={financeByYear?.result || datasetFinanceByYear}
            currrentWeekDailyFinanceCount={currrentWeekDailyFinanceCount?.result || currrentWeekDailyFinanceCountData}
            thisMonthExpense={thisMonthExpense.result}
            todayExpenseCount={todayExpenseCount.result}
            allExpenseCount={allExpenseCount.result}
            isAuthenticated={true}
        />
    );
};
