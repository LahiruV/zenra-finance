// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@zenra/store';
import { Box } from '@mui/material';
import { DataGridWidget } from '@zenra/widgets';

const StudentListTable: React.FC = () => {
    // const { theme } = useSelector((state: RootState) => state.theme);

    return (
        <Box>
            <DataGridWidget />
        </Box>
    );
};

export default StudentListTable;