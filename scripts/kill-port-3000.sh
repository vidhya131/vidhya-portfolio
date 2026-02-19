#!/usr/bin/env bash
# Kill process listening on port 3000 (macOS/Linux)
PORT=3000

if command -v lsof >/dev/null 2>&1; then
  PID=$(lsof -t -iTCP:$PORT -sTCP:LISTEN)
  if [ -n "$PID" ]; then
    echo "Killing PID $PID on port $PORT"
    kill -9 $PID
    exit 0
  else
    echo "No process listening on port $PORT"
    exit 1
  fi
fi

if command -v ss >/dev/null 2>&1; then
  PID=$(ss -ltnp 'sport = :"$PORT"' 2>/dev/null | awk -F"," 'NR>1{print $2}' | sed 's/[^0-9]*//g' | head -n1)
  if [ -n "$PID" ]; then
    echo "Killing PID $PID on port $PORT"
    kill -9 $PID
    exit 0
  else
    echo "No process listening on port $PORT"
    exit 1
  fi
fi

# Fallback instructions
echo "Neither lsof nor ss found. If you're on Windows, run: npx kill-port 3000 or kill the process via Task Manager/PowerShell."
exit 2
