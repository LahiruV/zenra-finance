import React from 'react';
import { BasicButton } from '@zenra/widgets';
import { NavLink } from 'react-router-dom';
import { FinanceFormComponent } from '@zenra/components';

export const titleComponentStudentForm =
    <NavLink style={{ textDecoration: 'none' }} className='height-auto' to='/finance'>
        <BasicButton className='top-header-button' label='Back' />
    </NavLink>

export const StudentForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
        <>
            <FinanceFormComponent handleSubmit={handleSubmit} />
        </>
    );
};
