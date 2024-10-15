export default function SubTitle({text, textColor, centerText}) {
    return (
        <p className="title font-w-medium" style={{color : textColor, textAlign: centerText == true ? "center" : "unset"}}>
          {text}
        </p>
    )
}