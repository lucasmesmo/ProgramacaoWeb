(function () {
    let FPS = 10
    const SIZE = 40

    let board;
    let snake;
    let fruit;

    let points = 0;

    let game_running = false;
    let game_interval;
    let speed_interval;

    function init() {
        if (board) {
            board.clear();
        }
        board = new Board(SIZE);
        snake = new Snake([[4, 4], [4, 5], [4, 6]])
    }

    function startGame() {
        if(!game_running) {
            game_running = true;
            game_interval = setInterval(run, 1000 / FPS)
            speed_interval = setInterval(increaseSpeed, 60000);
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
            stopGame();
        } else {
            startGame();
        }
    }

    function resetGame() {
        stopGame();
        FPS = 10;
        points = 0;
        init();
    }

    function increaseSpeed() {
        FPS += 10;
        if (game_running) {
            clearInterval(game_interval);
            game_interval = setInterval(run, 1000 / FPS);
        }
    }

     // As frutas possuem 2x mais chances de ter pretos do que vermelhos
    function createFruit() {
        let fruitColor = Math.random() < 0.67 ? "#000" : "#f00";
        let position = generateRandomPosition();
        fruit = new Fruit(position, fruitColor);
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
    })

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
            this.color = "#222";
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

            this.body.push(newHead)
            const oldTail = this.body.shift()
            document.querySelector(`#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`).style.backgroundColor = this.color
            document.querySelector(`#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`).style.backgroundColor = board.color
        }
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
    init()
})()