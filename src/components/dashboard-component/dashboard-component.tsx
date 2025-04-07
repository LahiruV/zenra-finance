import React from 'react';;
import './dashboard-component.css';
import DashBoardCardGrid from './dashboard-card-grid-component/dashboard-card-grid-component';
import DashBoardChartGrid from './dashboard-card-chart-component/dashboard-card-chart-component';
import { FinanceCurrentWeekDailyResponse, FinanceMonthResponse, FinanceYearResponse } from '@zenra/model';
// import { useSelector } from 'react-redux';
// import { RootState } from '@zenra/store';

export interface DashBoardComponentProps {
    isAuthenticated?: boolean
    thisMonth: FinanceMonthResponse
    lastMonth: FinanceMonthResponse
    thisYear: FinanceYearResponse
    lastYear: FinanceYearResponse
    financeByYear: FinanceMonthResponse
    currrentWeekDailyFinanceCount: FinanceCurrentWeekDailyResponse
}
const DashBoardComponent: React.FC<DashBoardComponentProps> = ({
    thisMonth,
    lastMonth,
    thisYear,
    lastYear,
    financeByYear,
    currrentWeekDailyFinanceCount
}) => {

    return (
        <div>
            <DashBoardCardGrid
                thisMonth={thisMonth}
                lastMonth={lastMonth}
                thisYear={thisYear}
                lastYear={lastYear}
            />
            <div className={`margin-top-20`} />
            <DashBoardChartGrid
                financeByYear={financeByYear}
                currrentWeekDailyFinanceCount={currrentWeekDailyFinanceCount}
            />
        </div>);
};

export default DashBoardComponent;
