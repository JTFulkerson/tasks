import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎆" | "🎂" | "🐇" | "🦃";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function alphabetAdvance(): void {
        const holidayOrder: Holiday[] = ["🎂", "🎄", "🐇", "🎆", "🦃"];
        const currentIndex = holidayOrder.indexOf(holiday); // copilot
        const nextIndex = (currentIndex + 1) % holidayOrder.length; // copilot
        setHoliday(holidayOrder[nextIndex]); // copilot
    }

    function yearAdvance(): void {
        const holidayOrder: Holiday[] = ["🎄", "🎂", "🐇", "🎆", "🦃"]; // copilot
        const currentIndex = holidayOrder.indexOf(holiday); // copilot
        const nextIndex = (currentIndex + 1) % holidayOrder.length; // copilot
        setHoliday(holidayOrder[nextIndex]); // copilot

        // My initial implementation that would have linting issues,
        // used copilot to help with new implementation
        // setHoliday(
        //     holiday === "🎄"
        //         ? "🎂"
        //         : holiday === "🎂"
        //         ? "🐇"
        //         : holiday === "🐇"
        //         ? "🎆"
        //         : holiday === "🎆"
        //         ? "🦃"
        //         : "🎄"
        // );
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={alphabetAdvance}>Advance by Alphabet</Button>
            <Button onClick={yearAdvance}>Advance by Year</Button>
        </div>
    );
}
