import React, { useState, useEffect } from 'react';

const cellSize = 20;
const rows = 20;
const cols = 20;

const initialState = {
    snake: [{ x: 8, y: 8 }],
    direction: 'RIGHT',
    food: { x: 5, y: 5 },
    gameOver: false,
};

const App = () => {
    const [state, setState] = useState(initialState);

    // Function to handle key presses for controlling the snake
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp' && state.direction !== 'DOWN') {
            setState((prevState) => ({ ...prevState, direction: 'UP' }));
        } else if (e.key === 'ArrowDown' && state.direction !== 'UP') {
            setState((prevState) => ({ ...prevState, direction: 'DOWN' }));
        } else if (e.key === 'ArrowLeft' && state.direction !== 'RIGHT') {
            setState((prevState) => ({ ...prevState, direction: 'LEFT' }));
        } else if (e.key === 'ArrowRight' && state.direction !== 'LEFT') {
            setState((prevState) => ({ ...prevState, direction: 'RIGHT' }));
        }
    };

    useEffect(() => {
        // Add event listener for key presses
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [state.direction]);

    // Function to move the snake
    const moveSnake = () => {
        if (state.gameOver) return;

        const newSnake = [...state.snake];
        const head = { ...newSnake[0] };

        // Update the snake's head position based on the direction
        if (state.direction === 'UP') head.y -= 1;
        if (state.direction === 'DOWN') head.y += 1;
        if (state.direction === 'LEFT') head.x -= 1;
        if (state.direction === 'RIGHT') head.x += 1;

        newSnake.unshift(head); // Add new head at the front of the snake

        // Check if snake eats food
        if (head.x === state.food.x && head.y === state.food.y) {
            const newFood = {
                x: Math.floor(Math.random() * cols),
                y: Math.floor(Math.random() * rows),
            };
            setState((prevState) => ({
                ...prevState,
                food: newFood,
                snake: newSnake,
            }));
        } else {
            newSnake.pop(); // Remove the last segment of the snake
            setState((prevState) => ({
                ...prevState,
                snake: newSnake,
            }));
        }

        // Check for collisions with walls or self
        if (
            head.x < 0 ||
            head.x >= cols ||
            head.y < 0 ||
            head.y >= rows ||
            newSnake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
        ) {
            setState((prevState) => ({ ...prevState, gameOver: true }));
        }
    };

    // Game loop to move the snake every 200ms
    useEffect(() => {
        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [state.snake, state.food, state.gameOver]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <div className="relative">
                <div
                    className="grid grid-cols-20 gap-0 border-2 border-white"
                    style={{
                        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
                        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
                    }}
                >
                    {/* Render Snake */}
                    {Array.from({ length: rows * cols }).map((_, index) => {
                        const x = index % cols;
                        const y = Math.floor(index / cols);
                        const isSnake = state.snake.some((segment) => segment.x === x && segment.y === y);
                        const isFood = state.food.x === x && state.food.y === y;
                        return (
                            <div
                                key={index}
                                className={`w-${cellSize} h-${cellSize} ${isSnake ? 'bg-green-500' : isFood ? 'bg-red-500' : 'bg-gray-700'
                                    }`}
                            ></div>
                        );
                    })}
                </div>

                {state.gameOver && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
                        Game Over
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
