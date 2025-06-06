import "./input.css";
export function Input({ type, placeholder }) {
    return (
        <>
            <div class="group">
            <input required="" type={type} class="input" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>{placeholder}</label>
            </div>
        </>
    )
}