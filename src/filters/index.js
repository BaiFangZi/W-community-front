export
const stringMaxLength = (value, maxLength) => {
    if (!value)
        return ''
    if (value.length > maxLength) {
        return value.slice(0, maxLength) + '...'
    }
    return value
}