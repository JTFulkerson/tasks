import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer {userAnswer === expectedAnswer ? "✔️" : "❌"}</h3>
            <Form.Group>
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
