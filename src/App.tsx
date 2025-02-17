import { useState } from "react";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";

function App() {
    const [password, setPassword] = useState("");

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <PasswordInput password={password} setPassword={setPassword} />
            <PasswordStrength password={password} />
        </div>
    );
}

export default App
