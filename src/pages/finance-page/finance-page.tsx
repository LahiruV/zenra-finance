import { FinanceListTable } from '@zenra/components';
import { BasicButton } from '@zenra/widgets';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const titleComponentFinanceList =
    <NavLink style={{ textDecoration: 'none' }} className='height-auto' to='/newFinance'>
        <BasicButton className='top-header-button log-out-button' size='sm' label='New Record' />
    </NavLink>

export const Finance: React.FC = () => {
    return (
        <div>
            <FinanceListTable />
        </div>
    );
};
