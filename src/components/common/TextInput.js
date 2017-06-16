import React, {PropTypes} from 'react'

const TextInput = ({name, label, onChange, placeholder, value, error, inputStatus}) => {
	let WrapperClass = 'form-group'
	if (error && error.length > 0) {
		WrapperClass += " " + 'has-error'
	}

	return (
		<div className={WrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<input
					type="text"
					name={name}
					className={inputStatus == "false" ? "form-control textInput" : "form-control textInput visited"}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	inputStatus: PropTypes.string
}

export default TextInput
