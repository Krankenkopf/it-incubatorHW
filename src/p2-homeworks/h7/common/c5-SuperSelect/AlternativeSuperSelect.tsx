import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const AlternativeSuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options ? options.map(o => <option> {o} </option>) : []// map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default AlternativeSuperSelect
