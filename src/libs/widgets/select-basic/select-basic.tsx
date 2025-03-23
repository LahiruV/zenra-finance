import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { ColorPaletteProp, VariantProp } from '@mui/joy';

export interface SelectBasicProps {
    variant?: VariantProp;
    color?: ColorPaletteProp;
    size?: 'sm' | 'md' | 'lg';
    value?: string;
    placeholder?: string;
    className?: string;
    classNameOption?: string;
    dataList: { value: string; label: string }[];
    onChange: (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, value: string | number) => void;
}

const SelectBasic: React.FC<SelectBasicProps> = ({ variant, color, size, value, placeholder, className, classNameOption, dataList = [], onChange }) => {
    return (
        <Select
            color={color || 'primary'}
            variant={variant || 'solid'}
            size={size || 'sm'}
            value={value}
            placeholder={placeholder || 'Select'}
            className={className}
            onChange={(event, value) => onChange(event, value as string | number)}
        >
            {
                dataList.map((item) => (
                    <Option className={classNameOption} key={item.value} value={item.value}>{item.label}</Option>
                ))}
        </Select>
    );
}

export default SelectBasic;