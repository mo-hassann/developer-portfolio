"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Game() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [isStart, setIsStart] = useState(false);
  const defaultGameTimerValue = 60 * 0.5; // seconds
  const [gameTimer, setGameTimer] = useState(defaultGameTimerValue);
  const router = useRouter();

  const onGameChange = () => {
    setIsStart(false);
  };

  useEffect(() => {
    if (ref.current && isStart) {
      startGame(ref.current, onGameChange);
    }
  }, [isStart]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isStart) {
        setGameTimer((curState) => {
          if (curState > 0) return curState - 1;
          else {
            setIsStart(false);
            return 0;
          }
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isStart]);

  return (
    <div className="relative flex flex-col bg-muted rounded-md p-2 size-64" onBlur={() => setIsStart(false)}>
      {isStart && (
        <>
          <Button onClick={() => setIsStart(false)} variant="ghost" size="icon" className="absolute top-2 right-2 size-fit text-gray-500">
            <X size={16} />
          </Button>
          <div className="w-full text-center">
            {`${Math.floor(gameTimer / 60)}`.padStart(2, "0")}:{`${gameTimer % 60}`.padStart(2, "0")}
          </div>
          <span className="absolute -bottom-8 -left-1/2 translate-x-1/2 w-full text-center text-gray-500 text-sm">{`// use keyboard keys to move`}</span>
        </>
      )}
      {isStart && <canvas className="size-full" ref={ref} id="canvas" width="250" height="250" />}
      {!isStart && (
        <>
          <div className={cn("top-0 left-0 absolute size-full flex flex-col gap-1 items-center justify-center backdrop-blur-md z-[2]", isStart && "hidden")}>
            <Button
              className="shadow-md rounded-full"
              size="lg"
              variant="outline"
              onClick={() => {
                setIsStart(true);
                setGameTimer(defaultGameTimerValue);
              }}
            >
              Play a Game
            </Button>
            {/*             <Button className="shadow-md rounded-full" size="lg" variant="outline" onClick={() => router.push("#contact")}>
              Contact Me
            </Button>
            <span className="text-secondary font-bold text-sm">OR</span>
            <Button
              size="sm"
              className=" text-gray-500 text-xs h-fit"
              variant="link"
              onClick={() => {
                setIsStart(true);
                setGameTimer(defaultGameTimerValue);
              }}
            >
              {`//`} Play a Game
            </Button> */}
          </div>
          <div className="absolute size-2 right-20 top-8 bg-rose-600" />
          <div className="absolute w-2 h-12 right-14 bottom-9 bg-emerald-600" />
        </>
      )}
    </div>
  );
}

const startGame = (canvas: HTMLCanvasElement, onGameChange: () => void) => {
  const context = canvas.getContext("2d")!;
  const gridSize = 16;
  const gridWidth = Math.floor(canvas.width / gridSize);
  const gridHeight = Math.floor(canvas.height / gridSize);
  let count = 0;
  let score = 0;
  let max = 0;

  const snake: {
    x: number;
    y: number;
    dx: number;
    dy: number;
    maxCells: number;
    cells: { x: number; y: number }[];
  } = {
    x: Math.floor(gridWidth / 2),
    y: Math.floor(gridHeight / 2),
    dx: 1,
    dy: 0,
    maxCells: 1,
    cells: [],
  };

  const food = {
    x: 0,
    y: 0,
  };

  function placeFood() {
    food.x = Math.floor(Math.random() * gridWidth);
    food.y = Math.floor(Math.random() * gridHeight);
  }

  placeFood();

  function loop() {
    requestAnimationFrame(loop);
    if (++count < 7) {
      return;
    }
    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Move snake
    snake.x += snake.dx;
    snake.y += snake.dy;

    // Wrap snake position
    if (snake.x < 0) {
      snake.x = gridWidth - 1;
    } else if (snake.x >= gridWidth) {
      snake.x = 0;
    }
    if (snake.y < 0) {
      snake.y = gridHeight - 1;
    } else if (snake.y >= gridHeight) {
      snake.y = 0;
    }

    // Keep track of where snake has been
    snake.cells.unshift({ x: snake.x, y: snake.y });

    // Remove tail
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }

    // Draw food
    context.fillStyle = "green";
    context.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);

    // Draw snake
    context.fillStyle = "#EC1063";
    snake.cells.forEach(function (cell, index) {
      context.fillRect(cell.x * gridSize, cell.y * gridSize, gridSize - 1, gridSize - 1);

      // Snake ate food
      if (cell.x === food.x && cell.y === food.y) {
        snake.maxCells++;
        score += 1;
        placeFood();
      }

      // Check collision with all cells after this one
      for (let i = index + 1; i < snake.cells.length; i++) {
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          if (score > max) {
            max = score;
          }
          // handle lose
          onGameChange();
          return;
          // snake.x = Math.floor(gridWidth / 2);
          // snake.y = Math.floor(gridHeight / 2);
          // snake.cells = [];
          // snake.maxCells = 1;
          // snake.dx = 1;
          // snake.dy = 0;
          // score = 0;
          // placeFood();
        }
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" && snake.dx === 0) {
      snake.dx = -1;
      snake.dy = 0;
    } else if (e.key === "ArrowUp" && snake.dy === 0) {
      snake.dy = -1;
      snake.dx = 0;
    } else if (e.key === "ArrowRight" && snake.dx === 0) {
      snake.dx = 1;
      snake.dy = 0;
    } else if (e.key === "ArrowDown" && snake.dy === 0) {
      snake.dy = 1;
      snake.dx = 0;
    }
  });

  requestAnimationFrame(loop);
};
