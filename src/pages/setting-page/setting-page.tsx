import { SettingsComponent } from '@zenra/components';
import React, { FC, useState } from 'react';

export const Setting: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div>
            <SettingsComponent
                isLoading={isLoading}
                isDisabled={false}
                onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 2000);
                }}
            />
        </div>
    );
};
