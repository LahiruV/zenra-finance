import React from 'react';
import { BasicButton, BasicCard } from '@zenra/widgets';

export interface SettingControlProps {
    isLoading: boolean;
    isDisabled: boolean;
    onClick: () => void;
}

const SettingControl: React.FC<SettingControlProps> = ({
    isLoading,
    isDisabled,
    onClick
}) => {
    return (
        <BasicCard
            className='height-auto'
            size='sm'
            isHeader={false}
            content={
                <div>
                    <BasicButton
                        className='login-button-main font-13 width-190'
                        variant='solid'
                        colors='primary'
                        size='sm'
                        onClick={onClick}
                        label='Docker Backup Generator'
                        isLoading={isLoading}
                        isDisabled={isDisabled}
                    />
                </div>
            }
        />
    );
};

export default SettingControl;
