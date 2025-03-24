// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@zenra/store';
export interface FinanceFormComponentProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FinanceFormComponent: React.FC<FinanceFormComponentProps> = ({ handleSubmit }) => {
    // const { theme } = useSelector((state: RootState) => state.theme);

    return (
        <form onSubmit={handleSubmit} className='width-max'>

        </form>
    );
};

export default FinanceFormComponent;