interface PasswordStrengthProps {
    password: string;
}

const getStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;

    const levels = ["Slabé", "Střední", "Silné", "Velmi silné"];
    return levels[score];
};

export default function PasswordStrength({ password }: PasswordStrengthProps) {
    const strength = getStrength(password);
    const strengthColors = {
        "Slabé": "bg-red-500",
        "Střední": "bg-yellow-500",
        "Silné": "bg-blue-500",
        "Velmi silné": "bg-green-500",
    };

    const criteria  = [
        { text: "Minimálně 8 znaků", valid: password.length >= 8 },
        { text: "Alespoň jedno velké písmeno", valid: /[A-Z]/.test(password) },
        { text: "Alespoň jedno číslo", valid: /[0-9]/.test(password) },
        { text: "Alespoň jeden speciální znak (!@#$%^&*)", valid: /[!@#$%^&*]/.test(password) },
    ];

    return (
        <div className="flex flex-col gap-2 mt-4">
            <div className={`h-2 rounded w-full ${strengthColors[strength]}`} />
            <p className="text-center font-bold">Síla hesla: {strength}</p>
            <ul className="text-sm">
                {criteria.map((item, index) => (
                    <li key={index} className={item.valid ? "text-green-500" : "text-red-500"}>
                        {item.valid ? "✔️" : "❌"} {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}