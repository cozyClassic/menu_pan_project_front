function InputProps(prop){
    const className = `input-prop ${prop.className}`
    return (
      <input className={className}> {prop.value} </input>
    )
}

export default InputProps;