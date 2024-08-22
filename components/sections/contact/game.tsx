"use client";
import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { keyPressed, startGame } from "./game-logic";

type props = {
  turnsLeft: number;
  setTurnsLeft: Dispatch<SetStateAction<number>>;
};

export default function Game({ turnsLeft, setTurnsLeft }: props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [isStart, setIsStart] = useState(false);
  const defaultGameTimerValue = 60 * 0.5; // seconds
  const [gameTimer, setGameTimer] = useState(defaultGameTimerValue);

  const onGameChange = useCallback(() => {
    setIsStart(false);
    setTurnsLeft((curTurns) => curTurns - 1);
    document.removeEventListener("keydown", keyPressed);
  }, [setTurnsLeft]);

  useEffect(() => {
    if (ref.current && isStart) {
      startGame(ref.current, onGameChange);
    }
  }, [isStart, onGameChange]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isStart) {
        setGameTimer((curState) => {
          if (curState > 0) return curState - 1;
          else {
            onGameChange();
            return 0;
          }
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isStart, onGameChange]);

  if (turnsLeft === 0) return;

  return (
    <div className="relative flex flex-col bg-muted rounded-md p-2 size-64">
      {isStart && (
        <>
          <Button onClick={onGameChange} variant="ghost" size="icon" className="absolute top-2 right-2 size-fit text-gray-500">
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
