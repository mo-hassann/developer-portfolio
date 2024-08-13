"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Game() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (ref.current && isStart) {
      startGame(ref.current);
    }
  }, [isStart]);

  return (
    <div className="relative bg-muted rounded-md p-2">
      <canvas ref={ref} id="canvas" width="250" height="250" />
      <div className={cn("top-0 left-0 absolute size-full flex items-center justify-center backdrop-blur-md z-[2]", isStart && "hidden")}>
        <Button className="rounded-full shadow-md shadow-foreground/15" variant="default" size="icon">
          <Play onClick={() => setIsStart(true)} onBlur={() => setIsStart(false)} />
        </Button>
      </div>
      {!isStart && (
        <>
          <div className="absolute size-2 right-20 top-8 bg-rose-600" />
          <div className="absolute w-2 h-12 right-14 bottom-9 bg-emerald-600" />
        </>
      )}
    </div>
  );
}

const startGame = (canvas: HTMLCanvasElement) => {
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
          snake.x = Math.floor(gridWidth / 2);
          snake.y = Math.floor(gridHeight / 2);
          snake.cells = [];
          snake.maxCells = 1;
          snake.dx = 1;
          snake.dy = 0;
          score = 0;
          placeFood();
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
