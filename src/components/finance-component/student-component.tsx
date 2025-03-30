import React from 'react';
import './student-component.css';
import StudentListTable from './student-list-table/student-list-table';

export interface StudentComponentProps {

}

const StudentComponent: React.FC<StudentComponentProps> = () => {

    return (
        <div>
            <StudentListTable />
        </div>);
};

export default StudentComponent;
