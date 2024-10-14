export default function Button({title, children}) {
    return <a href="#destination" className="button font-w-light font-s-medium">
        {children && <span className="button__icon">{children}</span>}
        <span className="button__text">{title}</span>
    </a>
}