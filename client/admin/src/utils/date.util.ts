export const convertDate = (date:Date) => {
    const _date = new Date(date);
    const d = _date.getDate();
    const m = _date.getMonth() + 1;
    const y = _date.getFullYear();
    return {
        oldDate: date,
        newDate: `${d}-${m}-${y}`
    }
}