import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttemptsLeft(attemptsLeft - 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || attemptsLeft === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
