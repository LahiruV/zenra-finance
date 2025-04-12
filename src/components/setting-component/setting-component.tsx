import React from 'react';
import SettingControl from './setting-controls/setting-controls';

export interface SettingsComponentProps {
    company_name: string;
}

const SettingsComponent: React.FC<SettingsComponentProps> = ({ company_name }) => {
    return (
        <SettingControl
            company_name={company_name}
        />
    );
};

export default SettingsComponent;
