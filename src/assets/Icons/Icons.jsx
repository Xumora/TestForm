const PlusCircle = () => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9987 25.6668C20.442 25.6668 25.6654 20.4435 25.6654 14.0002C25.6654 7.55684 20.442 2.3335 13.9987 2.3335C7.55538 2.3335 2.33203 7.55684 2.33203 14.0002C2.33203 20.4435 7.55538 25.6668 13.9987 25.6668Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 9.3335V18.6668" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.33203 14H18.6654" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const Grid = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3H3V10H10V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 3H14V10H21V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 14H14V21H21V14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14H3V21H10V14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const ArrowUp = () => {
    return (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 10.25L10 1.75L1.5 10.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const ArrowDown = () => {
    return (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.75L10 10.25L18.5 1.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const Times = () => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7L7 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 7L21 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const Check = () => {
    return (
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 8.08317L4 10.8332L13.1667 1.6665" stroke="#090761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const Trash = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="#090761" />
        </svg>
    )
}
export {
    PlusCircle,
    Grid,
    ArrowUp,
    ArrowDown,
    Times,
    Check,
    Trash
}