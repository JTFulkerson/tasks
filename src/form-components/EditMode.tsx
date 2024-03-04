import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode && (
                <Form.Group>
                    <Form.Check
                        type="switch"
                        id="student"
                        label="Change Student Status"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                    />
                    <Form.Label>Enter Students Name: </Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
            )}
            <p>
                {userName} is {isStudent ? "a student" : "not a student"}
            </p>
        </div>
    );
}
