import { useCallback, useMemo } from "react";
import { SHELF_OPTIONS } from "../constants";
import { Option } from "./Option";

export const ChangerButton = ({ onChangeShelf, book, currentShelf, defaultChangerLabel }) => {
    const handleChangeShelf = useCallback(
        (event) => {
            onChangeShelf(currentShelf, event?.target?.value, book);
        },
        [book, currentShelf, onChangeShelf]
    );
    return useMemo(() => {
        return (
            <div className="book-shelf-changer">
                <select
                    onChange={handleChangeShelf}
                    defaultValue={currentShelf || "none"}
                >
                    <option
                        value=""
                        disabled
                    >
                        {defaultChangerLabel}
                    </option>
                    {Object.entries(SHELF_OPTIONS).map(([name, title]) => {
                        return (
                            <Option
                                key={name}
                                value={name}
                                label={title}
                            />
                        );
                    })}
                </select>
            </div>
        );
    }, [currentShelf, defaultChangerLabel, handleChangeShelf]);
};
