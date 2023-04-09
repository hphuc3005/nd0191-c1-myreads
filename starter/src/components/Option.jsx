import { useMemo } from "react";

export const Option = ({ value, label }) => {
    return useMemo(() => {
        return <option value={value}>{label}</option>;
    }, [label, value]);
};
