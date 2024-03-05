import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>();

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <Form.Group controlId="requestAdditionalAttempts">
                <Form.Label>Enter Number Of Additional Requests:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => setRequestedAttempts(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(
                        attemptsLeft + parseInt(requestedAttempts || "0")
                    )
                }
            >
                gain
            </Button>
        </div>
    );
}
