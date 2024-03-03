import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [textVisable, setTextVisable] = useState<boolean>(false);

    function changeVisability(): void {
        setTextVisable(!textVisable);
    }

    return (
        <div>
            <Button onClick={changeVisability}>Reveal Answer</Button>
            {textVisable && <span> 42</span>}
        </div>
    );
}
