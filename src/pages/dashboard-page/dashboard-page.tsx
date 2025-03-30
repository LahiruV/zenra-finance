import { GetLastMonthlyFinanceCount, GetLastYearFinanceCount, GetThisMonthlyFinanceCount, GetThisYearFinanceCount } from '@zenra/api';
import { DashboardComponent } from '@zenra/components';
import { FinanceMonthResponse, FinanceYearResponse } from '@zenra/model';
import React from 'react';

export const Dashboard: React.FC = () => {
    const thisMonth = GetThisMonthlyFinanceCount(true)?.response?.data || ({} as FinanceMonthResponse);
    const lastMonth = GetLastMonthlyFinanceCount(true)?.response?.data || ({} as FinanceMonthResponse);
    const thisYear = GetThisYearFinanceCount(true)?.response?.data || ({} as FinanceYearResponse);
    const lastYear = GetLastYearFinanceCount(true)?.response?.data || ({} as FinanceYearResponse);
    return (
        <DashboardComponent
            thisMonth={thisMonth.result}
            lastMonth={lastMonth.result}
            thisYear={thisYear.result}
            lastYear={lastYear.result}
            isAuthenticated={true}
        />
    );
};
