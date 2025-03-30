import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface DataGridWidgetProps {
    className?: string;
    style?: React.CSSProperties;
    columns: GridColDef[];
    rows: any[];
}
const DataGridWidget: React.FC<DataGridWidgetProps> = ({
    className,
    style,
    columns,
    rows
}) => {
    return (
        <Box sx={{ width: 'auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
export default DataGridWidget;
