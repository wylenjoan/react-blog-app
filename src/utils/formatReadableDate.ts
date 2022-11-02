import { format } from 'date-fns';

function formatReadableDate(date: string) {
    return format(new Date(date), 'MMM d, yyyy');
}

export default formatReadableDate;
