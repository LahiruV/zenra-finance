/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart } from '@mui/x-charts/BarChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export interface SimpleBarChartProps {
    textColor: string
    dataset: any
    xAxisDataKey: string
    xAxisLabel?: string
    yAxisLabel?: string
    dataKey: string
    label: string
    forMatter?: string
    width?: number
    height?: number
    color?: string
    className?: string
    borderRadius?: number
}

const VerticleBars: React.FC<SimpleBarChartProps> = ({ textColor, dataset, xAxisDataKey, dataKey, label, forMatter, width, height, color, xAxisLabel, yAxisLabel, className, borderRadius }) => {

    function valueFormatter(value: number | null) {
        return `${value} ${forMatter || ''}`;
    }

    const customTheme = createTheme({
        palette: {
            text: {
                primary: textColor,
            },
        },
        typography: {
            fontSize: 12,
        },
    });
    return (
        <ThemeProvider theme={customTheme}>
            <div className={className}>
                <BarChart
                    dataset={dataset}
                    width={width}
                    height={height}
                    xAxis={[{
                        scaleType: 'band', dataKey: xAxisDataKey, label: xAxisLabel,
                    }]}
                    yAxis={[{
                        label: yAxisLabel
                    }]}
                    series={[{ dataKey: dataKey, label: label, valueFormatter, color: color || '#02B2AF' }]}
                    borderRadius={borderRadius || 0}
                />
            </div>
        </ThemeProvider>
    );
}

export default VerticleBars;
