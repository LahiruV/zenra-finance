import React from 'react';
import { BasicButton } from '@zenra/widgets';
import { NavLink } from 'react-router-dom';

export const titleComponentStudentForm =
    <NavLink style={{ textDecoration: 'none' }} className='height-auto' to='/finance'>
        <BasicButton className='top-header-button' label='Back' />
    </NavLink>

export const StudentForm: React.FC = () => {
    return (
        <>
            Student Form
        </>
    );
};
