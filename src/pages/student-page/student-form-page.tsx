import React from 'react';
import { BasicButton } from '@zenra/widgets';
import { NavLink } from 'react-router-dom';
import { FinanceFormComponent } from '@zenra/components';

export const titleComponentStudentForm =
    <NavLink style={{ textDecoration: 'none' }} className='height-auto' to='/finance'>
        <BasicButton className='top-header-button log-out-button' size='sm' label='Back' />
    </NavLink>

export const StudentForm: React.FC = () => {

    const [date, setDate] = React.useState<string>('');
    const [income, setIncome] = React.useState<string>('');
    const [amount, setAmount] = React.useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
        <>
            <FinanceFormComponent
                handleSubmit={handleSubmit}
                date={date}
                income={income}
                amount={amount}
                setDate={setDate}
                setIncome={setIncome}
                setAmount={setAmount}
                isLoading={false}
            />
        </>
    );
};
