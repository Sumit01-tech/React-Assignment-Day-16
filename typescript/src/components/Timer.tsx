import React, { useState, useEffect } from "react";

interface TimerState {
    time: number;
    isRunning: boolean;
}
const Timer: React.FC = () => {
    const [state, setState] = useState<TimerState>({ time: 0, isRunning: false });

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (state.isRunning) {
            timer = setInterval(() => {
                setState((prevState) => ({ ...prevState, time: prevState.time + 1 }));
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [state.isRunning]);

    const startTimer = () => setState({ ...state, isRunning: true });
    const stopTimer = () => setState({ ...state, isRunning: false });
    const resetTimer = () => setState({ time: 0, isRunning: false });

    return (
        <div style={styles.container}>
            <h1>Timer: {state.time} sec</h1>
            <div style={styles.buttonContainer}>
                <button onClick={startTimer} disabled={state.isRunning}>Start</button>
                <button onClick={stopTimer} disabled={!state.isRunning}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};
const styles: { [key: string]: React.CSSProperties } = {
    container: { textAlign: "center" as const, marginTop: 20 },
    buttonContainer: { marginTop: 10, display: "flex", gap: "10px", justifyContent: "center" }
};
export default Timer;
