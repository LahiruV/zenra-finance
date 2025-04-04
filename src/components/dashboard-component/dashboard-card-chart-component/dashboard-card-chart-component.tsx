import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, setMonthWiseYear } from '@zenra/store';
import { Grid, Box, Divider, Typography } from '@mui/material';
import './dashboard-card-chart-component.css';
import { HorizontalBars, SimpleBarChart, SelectBasic } from '@zenra/widgets';
import { char_font_color } from '@zenra/configs';
import { FinanceMonthResponse } from '@zenra/model';
import { useInitialService } from '@zenra/services';

export interface DashBoardChartGridProps {
    financeByYear: FinanceMonthResponse
}

const DashBoardChartGrid: React.FC<DashBoardChartGridProps> = ({
    financeByYear
}) => {
    const initialService = useInitialService();
    const { theme } = useSelector((state: RootState) => state.theme);
    const { monthWiseYear } = useSelector((state: RootState) => state.dashboard);
    // const [classWiseYear, setClassWiseYear] = useState('2024');

    // const data = [4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890, 2390];
    // const xLabels = [
    //     'Grade 1',
    //     'Grade 2',
    //     'Grade 3',
    //     'Grade 4',
    //     'Grade 5',
    //     'Grade 6',
    //     'Grade 7',
    //     'Grade 8',
    //     'Grade 9',
    //     'Grade 10',
    //     'Grade 11',
    //     'Grade 12',
    // ];

    return (
        <Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={5.8}>
                    <Box sx={{ padding: 2 }} className={`${theme}-background ${theme}-border width-auto`} >
                        <div className='flex justify-content-between'>
                            <Typography className={`font-16 ${theme}-card-font bolder`}>
                                {monthWiseYear} Monthly Income
                            </Typography>
                            <div className={`font-16 ${theme}-card-font margin-right-30`}>
                                <SelectBasic
                                    color='neutral'
                                    variant='soft'
                                    className='font-12 width-100'
                                    classNameOption='font-12'
                                    value={monthWiseYear}
                                    onChange={(_, value) => initialService.dispatch(setMonthWiseYear(String(value) || ''))}
                                    dataList={[
                                        { value: '2024', label: '2024' },
                                        { value: '2025', label: '2025' },
                                        { value: '2026', label: '2026' },
                                        { value: '2027', label: '2027' },
                                    ]}
                                />
                            </div>
                        </div>
                        <HorizontalBars
                            className='width-auto'
                            dataset={financeByYear}
                            textColor={char_font_color}
                            yAxisDataKey='month'
                            xAxisLabel='Amount'
                            dataKey='amount'
                            label='Amount'
                            forMatter='LKR'
                            height={390}
                        />
                    </Box>
                </Grid>
                {/* <Divider orientation="vertical" flexItem sx={{ marginX: 1, height: '422px' }} className={`margin-top-30 margin-left-25 ${theme}-border-background`} />
                <Grid item xs={12} md={5.8}>
                    <Box sx={{ padding: 2 }} className={`${theme}-background ${theme}-border`} >
                        <div className='flex justify-content-between'>
                            <Typography className={`font-16 ${theme}-card-font bolder`}>
                                {classWiseYear} Payments Class Wise
                            </Typography>
                            <div className={`font-16 ${theme}-card-font margin-right-30`}>
                                <SelectBasic
                                    color='neutral'
                                    variant='soft'
                                    className='font-12 width-100'
                                    classNameOption='font-12'
                                    value={classWiseYear}
                                    onChange={(_, value) => setClassWiseYear(String(value) || '')}
                                    dataList={[
                                        { value: '2022', label: '2022' },
                                        { value: '2023', label: '2023' },
                                        { value: '2024', label: '2024' },
                                    ]}
                                />
                            </div>
                        </div>
                        <SimpleBarChart
                            textColor={char_font_color}
                            data={data}
                            xLabels={xLabels}
                            label='Amount'
                            xAxisLabel='Amount'
                            forMatter='LKR'
                            color='#4a49e0'
                            height={390}
                        />
                    </Box>
                </Grid> */}
            </Grid>
        </Box>
    );
};

export default DashBoardChartGrid;