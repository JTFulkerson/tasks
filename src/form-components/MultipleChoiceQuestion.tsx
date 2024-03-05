import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setChosenAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>
                Multiple Choice Question{" "}
                {userAnswer === expectedAnswer ? "✔️" : "❌"}
            </h3>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Label>Choose Answer:</Form.Label>
                <Form.Select
                    value={userAnswer}
                    onChange={(e) => setChosenAnswer(e.target.value)}
                >
                    {options.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
