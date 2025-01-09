/*    import { forwardRef, useCallback, useEffect } from "react";
    import { nanoid } from "nanoid";
    import AsyncCreatableSelect from "react-select/async-creatable";
    import { components } from "react-select";


    export const TagsInputField = forwardRef(({ tags, setTags }, ref) => {
        const addTag = (value) => setTags((prevState) => [...prevState, value]);

        const handleCreateOption = async (value) => {
            const additionalOption = createOption(value);
            addTag(additionalOption);
        };

        const listener = useCallback((e) => {
            if (e.key === 'Backspace') {
                setTags((prev) => prev.filter((_, i) => i !== tags.length - 1));
                if (ref.current) ref.current.focus();
            }
        }, [ref, tags, setTags]);

        useEffect(() => {
            if (ref.current) ref.current.focus();
            document.addEventListener("keydown", listener);
            return () => {
                document.removeEventListener("keydown", listener);
            };
        }, [ref, listener]);

        return (
            <AsyncCreatableSelect
                value={tags}
                onChange={addTag}
                loadOptions={(inputValue, tags) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(filterTags(inputValue, tags));
                        }, 1000);
                    })
                }
                menuPlacement="auto"
                components={{ LoadingIndicator: null, Option, SingleValue }}
                classNamePrefix="select"
                placeholder=""
                styles={tagsListStyles}
                cacheOptions
                onCreateOption={handleCreateOption}
                onChange={addTag}
            />
        );
    });

    const promiseOptions = (inputValue, tags) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterTags(inputValue, tags));
            }, 1000);
        });

    const filterTags = (inputValue, tags) =>
        TAGS.filter((x) => !tags.includes(x)).filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );

    const createOption = (value) => ({
        id: nanoid(),
        value,
        label: value,
        color: COLORS[16],
    });

    const SingleValue = (props) => {
        const { data } = props;
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ color: data.color, marginRight: 5 }}>{data.label}</div>
            </div>
        );
    };

    const Option = (props) => {
        const { data } = props;
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ color: data.color, marginRight: 5 }}>{data.label}</div>
            </div>
        );
    };

    const tagsListStyles = ({ container, control, valueContainer, indicatorSeparator, indicatorContainer, dropdownIndicator, menu, option }) => ({
        container: { ...container, width: "100%" },
        control: { ...control, height: 28, minHeight: 28, width: "100%", fontSize: 14, borderRadius: 6, padding: '0 0 0 8px', ':hover': { cursor: 'pointer' }, borderColor: 'transparent', border: '1px solid transparent', boxShadow: 0, boxSizing: 'border-box', '&:hover': { borderColor: 'transparent', boxShadow: 0, boxSizing: 'border-box' } },
        valueContainer: { ...valueContainer, padding: 0 },
        indicatorSeparator: { ...indicatorSeparator, display: 'none' },
        indicatorContainer: { ...indicatorContainer, padding: 3 },
        dropdownIndicator: { ...dropdownIndicator, display: 'none' },
        menu: { ...menu, boxShadow: '0 0 0 1px rgb(111 119 130 / 15%), 0 5px 20px 0 rgb(21 27 38 / 8%)', background: '#fff', width: "100%", boxSizing: 'border-box', margin: 0 },
        option: { ...option, color: "#151b26", fontSize: 14, minHeight: "36px", backgroundColor: (props) => props.isSelected ? "#fff" : undefined, ':hover': { cursor: 'pointer', backgroundColor: "#f2f6f8" } },
    });*/