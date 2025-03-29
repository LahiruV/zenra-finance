import { StudentComponent } from '@zenra/components';
import { BasicButton } from '@zenra/widgets';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './student-page.css';

export const titleComponentStudentList =
    <NavLink style={{ textDecoration: 'none' }} className='height-auto' to='/newStudent'>
        <BasicButton className='top-header-button log-out-button' size='sm' label='New Record' />
    </NavLink>

export const Student: React.FC = () => {
    return (
        <>
            {/* <StudentComponent /> */}
        </>
    );
};
