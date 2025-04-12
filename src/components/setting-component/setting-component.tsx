import React from 'react';
import SettingControl from './setting-controls/setting-controls';

export interface SettingsComponentProps {
    isLoading: boolean;
    isDisabled: boolean;
    onClick: () => void;
}

const SettingsComponent: React.FC<SettingsComponentProps> = ({
    isLoading,
    isDisabled,
    onClick
}) => {
    return (
        <SettingControl
            isLoading={isLoading}
            isDisabled={isDisabled}
            onClick={onClick}
        />
    );
};

export default SettingsComponent;
