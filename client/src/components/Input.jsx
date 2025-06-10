import "./input.css";
export function Input({ type, placeholder }) {
    const inputId = `input-${type}`;
    return (
        <div className="email-input-container">
            <input 
                type={type} 
                id={inputId} 
                required="" 
            />
            <label htmlFor={inputId}>{placeholder}</label>
            <div className="email-input-border">
                <span className="email-input-border-left"></span>
                <span className="email-input-border-right"></span>
            </div>
        </div>
    )
}