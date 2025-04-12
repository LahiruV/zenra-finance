import React from 'react';
import { BasicCard } from '@zenra/widgets';

export interface SettingControlProps {
    company_name: string;
}

const SettingControl: React.FC<SettingControlProps> = ({ company_name }) => {
    return (
        <BasicCard
            variant='plain'
            className='width-300 height-100'
            size='sm'
            header={company_name}
            isHeader={true}
            content={
                <div className='font-12'>
                    <p>Settings</p>
                    <p>Manage your settings here.</p>
                </div>
            }
            action={
                <div className='font-12'>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            }
        />
    );
};

export default SettingControl;
