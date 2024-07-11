// Aluno: Lucas de Oliveira darcio
// Matrícula: 22153138

(function () {
    let FPS = 10
    const SIZE = 40
    let points = 0;

    let board;
    let snake;
    let fruit;

    let game_running = false;
    let game_interval;
    let speed_interval;

    let last_speed_increase_time;
    let time_since_last_speed_increase = 0;
    const SPEED_INCREASE_INTERVAL = 60000;

    function init() {
        if (board) {
            board.clear();
        }
        board = new Board(SIZE);
        snake = new Snake([[4, 4], [4, 5], [4, 6]]);
        placeFruit();
    }

    function startGame() {
        if(!game_running) {
            game_running = true;
            game_interval = setInterval(run, 1000 / FPS);
            startSpeedTimeout(SPEED_INCREASE_INTERVAL - time_since_last_speed_increase);
            document.getElementById("game-over").style.display = "none";
            points = 0;
            updatePoints();
        }
    }

    function stopGame() {
        if(game_running) {
            clearInterval(game_interval);
            clearInterval(speed_interval);
            game_running = false;
        }
    }

    function pauseGame() {
        if (game_running) {
            clearInterval(game_interval);
            clearTimeout(speed_timeout);
            game_running = false;
            time_since_last_speed_increase = Date.now() - last_speed_increase_time;
        } else {
            game_running = true;
            game_interval = setInterval(run, 1000 / FPS);
            startSpeedTimeout(SPEED_INCREASE_INTERVAL - time_since_last_speed_increase);
        }
    }

    function resetGame() {
        stopGame();
        FPS = 10;
        time_since_last_speed_increase = 0;
        document.getElementById("game-over").style.display = "block";
        init();
    }

    function increaseSpeed() {
        FPS += 10;
        if (game_running) {
            clearInterval(game_interval);
            game_interval = setInterval(run, 1000 / FPS);
            startSpeedTimeout(SPEED_INCREASE_INTERVAL);
        }
    }

    function startSpeedTimeout(interval) {
        last_speed_increase_time = Date.now();
        speed_timeout = setTimeout(increaseSpeed, interval);
    }
     
     function placeFruit() {
        let x, y, cell;
        do {
            x = Math.floor(Math.random() * SIZE) + 1;
            y = Math.floor(Math.random() * SIZE) + 1;
            cell = document.querySelector(`#board tr:nth-child(${x}) td:nth-child(${y})`);
        } while (cell.style.backgroundColor === snake.color);

        // As frutas possuem 2x mais chances de ter pretos do que vermelhos
        const isRedFruit = Math.random() < 1 / 3;
        cell.style.backgroundColor = isRedFruit ? "red" : "black";
        fruit = { x, y, isRedFruit };
    }

    function updatePoints() {
        document.getElementById("points").textContent = points.toString().padStart(4, '0');
    }

    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "s":
                startGame();
                break;
            case "p":
                pauseGame()
                break;
            case "ArrowUp":
                snake.changeDirection(0)
                break;
            case "ArrowRight":
                snake.changeDirection(1)
                break;
            case "ArrowDown":
                snake.changeDirection(2)
                break;
            case "ArrowLeft":
                snake.changeDirection(3)
                break;
            default:
                break;
        }
    });

    class Board {
        constructor(size) {
            this.element = document.createElement("table")
            this.element.setAttribute("id", "board")
            this.color = "#ccc";
            document.body.appendChild(this.element)
            for (let i = 0; i < size; i++) {
                const row = document.createElement("tr")
                this.element.appendChild(row);
                for (let j = 0; j < size; j++) {
                    const field = document.createElement("td");
                    row.appendChild(field)
                }
            }
        }

        clear() {
            document.body.removeChild(this.element);
        }
    }

    class Snake {
        constructor(body) {
            this.body = body;
            this.color = "darkgreen";
            this.direction = 1; // 0 para cima, 1 para direita, 2 para baixo, 3 para esquerda
            this.body.forEach(field => document.querySelector(`#board tr:nth-child(${field[0]}) td:nth-child(${field[1]})`).style.backgroundColor = this.color)
        }
        walk() {
            const head = this.body[this.body.length - 1];
            let newHead;
            switch (this.direction) {
                case 0:
                    newHead = [head[0] - 1, head[1]]
                    break;
                case 1:
                    newHead = [head[0], head[1] + 1]
                    break;
                case 2:
                    newHead = [head[0] + 1, head[1]]
                    break;
                case 3:
                    newHead = [head[0], head[1] - 1]
                    break;
                default:
                    break;
            }

            // Este trecho verifica se a cobra bateu na parede
            if (newHead[0] < 1 || newHead[0] > SIZE || newHead[1] < 1 || newHead[1] > SIZE) {
                resetGame();
                return;
            }

            // Esse trecho verifica se cobra se comeu
            for (let i = 0; i < this.body.length; i++) {
                if (newHead[0] === this.body[i][0] && newHead[1] === this.body[i][1]) {
                    resetGame();
                    return;
                }
            }


            // Esse trecho verifica se a cobra comeu uma fruta
            if (newHead[0] === fruit.x && newHead[1] === fruit.y) {
                // Cobra come a fruta
                if (fruit.isRedFruit) {
                    points += 2;
                } else {
                    points += 1;
                }

                updatePoints();
                placeFruit();
            } else {
                const oldTail = this.body.shift();
                document.querySelector(`#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`).style.backgroundColor = board.color;
            }


            this.body.push(newHead);
            document.querySelector(`#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`).style.backgroundColor = this.color;
        }
            //this.body.push(newHead)
            //const oldTail = this.body.shift()
            //document.querySelector(`#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`).style.backgroundColor = this.color
            //document.querySelector(`#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`).style.backgroundColor = board.color

        changeDirection(newDirection) {

            // Aqui a ideia é verificar se a cobra fez um movimento de 180 graus
            const oppositeDirections = {
                0: 2, 1: 3, 2: 0, 3: 1
            };
            if (newDirection !== oppositeDirections[this.direction]) {
                this.direction = newDirection;
            }
        }
    }

    function run() {
        snake.walk()
    }

    function createUI() {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.justifyContent = 'space-between';
        container.style.marginBottom = '20px';

        const pointsDisplay = document.createElement('h1');
        pointsDisplay.setAttribute('id', 'points');
        pointsDisplay.textContent = '0000';
        container.appendChild(pointsDisplay);

        const gameOverMessage = document.createElement('h1');
        gameOverMessage.setAttribute('id', 'game-over');
        gameOverMessage.textContent = 'GAME OVER! :(';
        gameOverMessage.style.display = 'none';
        container.appendChild(gameOverMessage);

        document.body.insertBefore(container, document.body.firstChild);
    }

    createUI();
    init()
})()