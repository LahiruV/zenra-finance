import { SettingsComponent } from '@zenra/components';
import { FC, useState } from 'react';

export const Setting: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <SettingsComponent
                isLoading={isLoading}
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
