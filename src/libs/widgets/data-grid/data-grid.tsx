import { ThemeProvider } from '@mui/material/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme } from '@mui/material/styles';
import { light_font_color, page_main_color, light_background_color, page_main_color_light, light_background_color_content } from '@zenra/configs';

export default function DataGridWidget() {
    const theme = createTheme({
        components: {
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        color: light_font_color,
                        backgroundColor: light_background_color,
                    },
                    columnHeader: {
                        color: light_font_color,
                        fontWeight: 'bold',
                        border: 'none',
                    },
                    cell: {
                        color: light_font_color,
                        border: 'none',
                    },
                    row: {
                        '&:hover': {
                            backgroundColor: light_background_color,
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none', // Change button text transform
                    },
                },
                defaultProps: {
                    variant: 'contained', // Set the default button variant
                },
            },
        },
        palette: {
            primary: {
                main: page_main_color,
            },
            secondary: {
                main: page_main_color_light,
            },
            text: {
                primary: page_main_color,
                secondary: page_main_color,
            },
            background: {
                default: light_background_color,
                paper: light_background_color,
            },
            action: {
                active: page_main_color,
                hover: light_background_color_content,
                selected: light_background_color_content,
            },
            divider: page_main_color,
        },
        typography: {
            fontFamily: 'Arial',
        },
        shape: {
            borderRadius: 0,
        },
        spacing: 8,
    });

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: false,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 13, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 19, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 20, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 21, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 22, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 23, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 24, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 25, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 26, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 27, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 28, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 29, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 30, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    ];
    return (
        <ThemeProvider theme={theme}>
            <div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </ThemeProvider>
    );
}