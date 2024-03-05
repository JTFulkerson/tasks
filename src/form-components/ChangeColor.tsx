import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<number>(0);

    const handleColorChange = (index: number) => {
        setChosenColor(index);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {COLORS.map((color: string, index: number) => (
                    <Form.Check
                        key={COLORS[index]}
                        inline
                        type="radio"
                        value={COLORS[chosenColor]}
                        label={
                            <span style={{ backgroundColor: COLORS[index] }}>
                                {COLORS[index]}
                            </span>
                        }
                        checked={chosenColor === index}
                        onChange={() => handleColorChange(index)}
                    ></Form.Check>
                ))}
            </Form.Group>
            <span>You have chosen </span>
            <span
                data-testid="colored-box"
                style={{ backgroundColor: COLORS[chosenColor] }}
            >
                {COLORS[chosenColor]}
            </span>
            <span>.</span>
        </div>
    );
}
