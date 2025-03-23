import React from 'react';;
import './dashboard-component.css';
import DashBoardCardGrid from './dashboard-card-grid-component/dashboard-card-grid-component';
import DashBoardChartGrid from './dashboard-card-chart-component/dashboard-card-chart-component';
// import { useSelector } from 'react-redux';
// import { RootState } from '@zenra/store';

export interface DashBoardComponentProps {
    isAuthenticated?: boolean
}

const DashBoardComponent: React.FC<DashBoardComponentProps> = () => {

    return (
        <div>
            <DashBoardCardGrid />
            <div className={`margin-top-20`} />
            <DashBoardChartGrid />
        </div>);
};

export default DashBoardComponent;
