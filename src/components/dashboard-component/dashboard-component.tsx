import React from 'react';;
import './dashboard-component.css';
import DashBoardCardGrid from './dashboard-card-grid-component/dashboard-card-grid-component';
import DashBoardChartGrid from './dashboard-card-chart-component/dashboard-card-chart-component';
import { CurrentWeekDailyIncomeExpenseResponse, ExpenseCurrentWeekDailyResponse, ExpenseMonthResponse, FinanceCurrentWeekDailyResponse, FinanceMonthResponse, FinanceYearResponse } from '@zenra/model';
// import { useSelector } from 'react-redux';
// import { RootState } from '@zenra/store';

export interface DashBoardComponentProps {
    isAuthenticated?: boolean
    thisMonth: FinanceMonthResponse
    lastMonth: FinanceMonthResponse
    thisYear: FinanceYearResponse
    lastYear: FinanceYearResponse
    financeByYear: FinanceMonthResponse
    thisMonthExpense: ExpenseMonthResponse
    todayExpenseCount: number
    allExpenseCount: number
    allFinanceCount: number
    expenseByYear: ExpenseMonthResponse
    getCurrentWeekDailyIncomeExpense: CurrentWeekDailyIncomeExpenseResponse

}
const DashBoardComponent: React.FC<DashBoardComponentProps> = ({
    thisMonth,
    lastMonth,
    thisYear,
    lastYear,
    financeByYear,
    thisMonthExpense,
    todayExpenseCount,
    allExpenseCount,
    allFinanceCount,
    expenseByYear,
    getCurrentWeekDailyIncomeExpense
}) => {

    return (
        <div>
            <DashBoardCardGrid
                thisMonth={thisMonth}
                lastMonth={lastMonth}
                thisYear={thisYear}
                lastYear={lastYear}
                thisMonthExpense={thisMonthExpense}
                todayExpenseCount={todayExpenseCount}
                allExpenseCount={allExpenseCount}
                allFinanceCount={allFinanceCount}
            />
            <div className={`margin-top-20`} />
            <DashBoardChartGrid
                financeByYear={financeByYear}
                expenseByYear={expenseByYear}
                getCurrentWeekDailyIncomeExpense={getCurrentWeekDailyIncomeExpense}
            />
        </div>);
};

export default DashBoardComponent;
