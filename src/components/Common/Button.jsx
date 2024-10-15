export default function Button({title, children, buttonHeight, buttonWidth}) {
    return <a href="#destination" className="button font-w-light font-s-medium" style={{width: buttonWidth ? buttonWidth : '', height: buttonHeight ? buttonHeight : ''}}>
        {children && <span className="button__icon">{children}</span>}
        <span className="button__text">{title}</span>
    </a>
}