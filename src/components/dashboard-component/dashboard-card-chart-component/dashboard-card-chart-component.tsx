import { useSelector } from 'react-redux';
import { RootState, setMonthWiseYear } from '@zenra/store';
import { Grid, Box, Typography } from '@mui/material';
import './dashboard-card-chart-component.css';
import { HorizontalBars, SelectBasic, VerticleBars } from '@zenra/widgets';
import { char_font_color } from '@zenra/configs';
import { FinanceCurrentWeekDailyResponse, FinanceMonthResponse } from '@zenra/model';
import { useInitialService } from '@zenra/services';

export interface DashBoardChartGridProps {
    financeByYear: FinanceMonthResponse
    currrentWeekDailyFinanceCount: FinanceCurrentWeekDailyResponse
    currrentWeekDailyExpenseCount: FinanceCurrentWeekDailyResponse
    expenseByYear: FinanceMonthResponse
}

const DashBoardChartGrid: React.FC<DashBoardChartGridProps> = ({
    financeByYear,
    currrentWeekDailyFinanceCount,
    currrentWeekDailyExpenseCount,
    expenseByYear
}) => {
    const initialService = useInitialService();
    const { theme } = useSelector((state: RootState) => state.theme);
    const { monthWiseYear } = useSelector((state: RootState) => state.dashboard);
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    return (
        <div>
            <Box>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={5.8}>
                        <Box sx={{ padding: 2 }} className={`${theme}-background ${theme}-border width-auto`} >
                            <div className='flex justify-content-between'>
                                <Typography className={`font-16 ${theme}-card-font bolder`}>
                                    {currentMonth} Weekly Income
                                </Typography>
                            </div>
                            <VerticleBars
                                textColor={char_font_color}
                                dataset={currrentWeekDailyFinanceCount}
                                xAxisDataKey='day'
                                xAxisLabel='Day'
                                dataKey='amount'
                                label='Amount'
                                forMatter='LKR'
                                borderRadius={5}
                                // color='#e74c3c'
                                height={300}
                            />
                        </Box>
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem sx={{ marginX: 1, height: '350px' }} className={`margin-top-30 margin-left-25 ${theme}-border-background`} /> */}
                    <Grid item xs={12} md={5.8}>
                        <Box sx={{ padding: 2 }} className={`${theme}-background ${theme}-border width-auto`} >
                            <div className='flex justify-content-between'>
                                <Typography className={`font-16 ${theme}-card-font bolder`}>
                                    {currentMonth} Weekly Expenses
                                </Typography>
                            </div>
                            <VerticleBars
                                textColor={char_font_color}
                                dataset={currrentWeekDailyExpenseCount}
                                xAxisDataKey='day'
                                xAxisLabel='Day'
                                dataKey='amount'
                                label='Amount'
                                forMatter='LKR'
                                color='#e74c3c'
                                borderRadius={5}
                                height={300}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className='margin-top-15'>
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
                                // color='#1976D2'
                                yAxisDataKey='month'
                                xAxisLabel='Amount'
                                dataKey='amount'
                                label='Amount'
                                forMatter='LKR'
                                height={300}
                            />
                        </Box>
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem sx={{ marginX: 1, height: '350px' }} className={`margin-top-30 margin-left-25 ${theme}-border-background`} /> */}
                    <Grid item xs={12} md={5.8}>
                        <Box sx={{ padding: 2 }} className={`${theme}-background ${theme}-border width-auto`} >
                            <div className='flex justify-content-between'>
                                <Typography className={`font-16 ${theme}-card-font bolder`}>
                                    {monthWiseYear} Monthly Expenses
                                </Typography>
                                <div className={`font-16 ${theme}-card-font margin-right-30`}>

                                </div>
                            </div>
                            <HorizontalBars
                                className='width-auto'
                                dataset={expenseByYear}
                                textColor={char_font_color}
                                color='#e74c3c'
                                yAxisDataKey='month'
                                xAxisLabel='Amount'
                                dataKey='amount'
                                label='Amount'
                                forMatter='LKR'
                                height={300}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DashBoardChartGrid;