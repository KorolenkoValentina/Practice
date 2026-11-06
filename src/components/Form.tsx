import { useState } from "react";

export function Form() {
    const [name, setName] = useState("");
    const [isAccepted, setIsAccepted] = useState(false);
    const [level, setLevel] = useState("beginner");
    const [price, setPrice] = useState("");
    const isFormValid = name.trim().length > 0 && isAccepted;
    if (price.trim()==="") {
       console.log("Ціна не вказана");
    }
    return(
        <section>
            <h2>Реєстрація</h2>
            <label htmlFor="username">Ваше ім'я</label>
            <input
                type="text"
                id="username"
                value={name} 
                onChange={(e) => {setName(e.currentTarget.value)}}
            />

            <label>
                <input
                    type="checkbox"
                    checked={isAccepted}
                    onChange={(e) => {setIsAccepted(e.currentTarget.checked)}}
                />
             Я погоджуюсь з правилами
            </label>
            <p>Ваше ім'я: {name || "guest"}</p>
            <p>Чи погоджено з правилами: {isAccepted ? "Так" : "Ні"}</p>
            <button disabled={!isFormValid}>Зареєструватися</button>
            <label > Рівень знань
                <select value={level} onChange={(e) => {setLevel(e.currentTarget.value)}}>
                      <option value="all">Всі рівні</option>
                    <option value="beginner">Початківець</option>
                    <option value="intermediate">Середній</option>
                </select>
            </label>
            <input
                type="number"
                min="0"
                step="1"
                value={price} 
                onChange={(e) => {setPrice(e.currentTarget.value)}}
            />

        </section>
    )}

