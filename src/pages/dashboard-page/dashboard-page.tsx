import { GetFinanceByYear, GetLastMonthlyFinanceCount, GetLastYearFinanceCount, GetThisMonthlyFinanceCount, GetThisYearFinanceCount } from '@zenra/api';
import { DashboardComponent } from '@zenra/components';
import { FinanceMonthResponse, FinanceYearResponse } from '@zenra/model';
import { RootState } from '@zenra/store';
import React from 'react';
import { useSelector } from 'react-redux';

export const Dashboard: React.FC = () => {
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
    const { monthWiseYear } = useSelector((state: RootState) => state.dashboard);
    const thisMonth = GetThisMonthlyFinanceCount(true)?.response?.data || ({} as FinanceMonthResponse);
    const lastMonth = GetLastMonthlyFinanceCount(true)?.response?.data || ({} as FinanceMonthResponse);
    const thisYear = GetThisYearFinanceCount(true)?.response?.data || ({} as FinanceYearResponse);
    const lastYear = GetLastYearFinanceCount(true)?.response?.data || ({} as FinanceYearResponse);
    const financeByYear = GetFinanceByYear(monthWiseYear, true)?.response?.data || ({} as FinanceMonthResponse);

    return (
        <DashboardComponent
            thisMonth={thisMonth.result}
            lastMonth={lastMonth.result}
            thisYear={thisYear.result}
            lastYear={lastYear.result}
            financeByYear={financeByYear?.result || datasetFinanceByYear}
            isAuthenticated={true}
        />
    );
};
