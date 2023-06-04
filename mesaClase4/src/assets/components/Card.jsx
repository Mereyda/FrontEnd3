export function Card(props) {
    const { title, footer, children} = props
    const headerClass = title ? 'card-footer' : 'card-header-not-visible'
    const footerClass = footer ?  'card-footer' : 'card-footer-not-visible'
    return (
        <div className="card">
            <div className={headerClass}>{title}</div>
            <div className="card-body">{children}</div>
            <div className={footerClass}>{footer}</div>
        </div>
    )
}