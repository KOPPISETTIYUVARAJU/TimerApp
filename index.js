let timer;
        let seconds = 0;
        let isRunning = false;
        function formatTime(s) {
            let hrs = Math.floor(s / 3600).toString().padStart(2, '0');
            let mins = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
            let secs = (s % 60).toString().padStart(2, '0');
            return `${hrs}:${mins}:${secs}`;
        }
        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(() => {
                    seconds++;
                    document.getElementById('timer').innerText = formatTime(seconds);
                }, 1000);
            }
        }
        function pauseTimer() {
            isRunning = false;
            clearInterval(timer);
        }
        function resetTimer() {
            isRunning = false;
            clearInterval(timer);
            seconds = 0;
            document.getElementById('timer').innerText = formatTime(seconds);
        }
        function setBreak() {
            isRunning = false;
            clearInterval(timer);
            seconds = 300; // 5-minute break
            document.getElementById('timer').innerText = formatTime(seconds);
        }
