const resolveClass = (value, info) =>
    typeof value === 'function' ? value(info) : value

export const joinClasses = (...values) =>
    values.some((value) => typeof value === 'function')
        ? (info) =>
              joinClasses(...values.map((value) => resolveClass(value, info)))
        : values.flat().filter(Boolean).join(' ')
