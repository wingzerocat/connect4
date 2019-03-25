import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ],
            player: true,
            gameOver: false,
            winner: 'none',
            redWins: 0,
            blackWins: 0
        };
        this.checkHorizontal = this.checkHorizontal.bind(this);
        this.checkVertical = this.checkVertical.bind(this);
        this.checkMajor = this.checkMajor.bind(this);
        this.checkMinor = this.checkMinor.bind(this);
    }

    checkHorizontal() {
        var board = this.state.cols;
        var connected;
        var currentPiece;
        var currentPlayer = this.state.player;
        var wins;

        for (var i = 5; i >= 0; i--) {
            connected = 0;
            for (var j = 0; j < board[i].length; j++) {
                if (board[i][j]) {
                    if (currentPiece) {
                        if (currentPiece === board[i][j]) {
                            connected++;
                        } else {
                            connected = 1;
                        }
                    } else {
                        connected++;
                    }

                    if (connected === 4) {
                        if (currentPlayer) {
                            wins = this.state.blackWins + 1;
                            this.setState({
                                winner: 'black',
                                blackWins: wins
                            })
                        } else {
                            wins = this.state.redWins + 1;

                            this.setState({
                                winner: 'red',
                                redWins: wins
                            })
                        }

                        this.setState({
                            gameOver: true,
                        })
                    }
                    currentPiece = board[i][j];
                } else {
                    connected = 0;
                }
            }
        }
    }

    checkVertical() {
        var board = this.state.cols;
        var connected;
        var currentPiece;
        var currentPlayer = this.state.player;
        var wins;

        for (var i = 0; i < board.length; i++) {
            connected = 0;
            for (var j = 0; j < board[i].length; j++) {
                if (board[j][i]) {
                    if (currentPiece) {
                        if (currentPiece === board[j][i]) {
                            connected++;
                        } else {
                            connected = 1;
                        }
                    } else {
                        connected++;
                    }

                    if (connected === 4) {
                        if (currentPlayer) {
                            wins = this.state.blackWins + 1;

                            this.setState({
                                winner: 'black',
                                blackWins: wins
                            })
                        } else {
                            wins = this.state.redWins + 1;

                            this.setState({
                                winner: 'red',
                                redWins: wins
                            })
                        }

                        this.setState({
                            gameOver: true,
                        })
                    }
                    currentPiece = board[j][i];
                }
            }
        }
    }

    checkMajor() {
        var board = this.state.cols;
        var connected;
        var currentPiece;
        var m, n;
        var currentPlayer = this.state.player;
        var wins;

        for (var i = board.length - 1; i > 2; i--) {
            for (var j = 0; j < 3; j++) {
                m = i;
                n = j;
                connected = 0;
                while (n < 6 && m >= 0) {
                    if (board[m][n]) {
                        if (currentPiece) {
                            if (currentPiece === board[m][n]) {
                                connected++;
                            } else {
                                connected = 1;
                            }
                        } else {
                            connected++;
                        }

                        if (connected === 4) {
                            if (currentPlayer) {
                                wins = this.state.blackWins + 1;
    
                                this.setState({
                                    winner: 'black',
                                    blackWins: wins
                                })
                            } else {
                                wins = this.state.redWins + 1;
    
                                this.setState({
                                    winner: 'red',
                                    redWins: wins
                                })
                            }

                            this.setState({
                                gameOver: true,
                            })
                        }
                        currentPiece = board[m][n];                        
                    }
                    m--;
                    n++;
                }
            }
        } 
    }

    checkMinor() {
        var board = this.state.cols;
        var connected;
        var currentPiece;
        var m, n;
        var currentPlayer = this.state.player;
        var wins;

        for (var i = board.length - 1; i > 2; i--) {
            for (var j = board[i].length; j > 2; j--) {
                connected = 0;
                m = i;
                n = j;
                while (n >= 0 && m >= 0) {
                    if (board[m][n]) {
                        if (currentPiece) {
                            if (currentPiece === board[m][n]) {
                                connected++;
                            } else {
                                connected = 1;
                            }
                        } else {
                            connected++;
                        }

                        if (connected === 4) {
                            if (currentPlayer) {
                                wins = this.state.blackWins + 1;
    
                                this.setState({
                                    winner: 'black',
                                    blackWins: wins
                                })
                            } else {
                                wins = this.state.redWins + 1;
    
                                this.setState({
                                    winner: 'red',
                                    redWins: wins
                                })
                            }

                            this.setState({
                                gameOver: true,
                            })
                        }
                        currentPiece = board[m][n];                        
                    }
                    m--;
                    n--;
                }
            }
        } 
    }

    placePiece(e) {
        var col = parseInt(e.target.className.slice(0,1)) - 1;
        var rows = this.state.cols;
        var player = this.state.player;

        for (var i = 5; i >= 0; i--) {
            if (rows[i][col] === 0) {
                if (player) {
                    rows[i][col] = 1;
                } else {
                    rows[i][col] = 2;
                }
                player = !player;
                this.checkHorizontal();
                this.checkVertical();
                this.checkMajor();
                this.checkMinor();
                break;
            }
        }

        this.setState({
            cols: rows,
            player: player
        })
    }

    boardReset() {
        var player = this.state.player;

        this.setState({
            cols: [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ],
            player: player,
            gameOver: false,
            winner: 'none',
        })
    }

    nothing() {}

    render () {
        return (
            <div>
                <div className="details">
                    <div className="turn">
                        {this.state.gameOver ? 
                            this.state.winner === 'black' ? "Black Wins" : "Red Wins"
                            :
                            this.state.player ? "Black's Turn" : "Red's Turn"}
                    </div>
                    <div className="score">
                        <div>
                            Wins:
                        </div>
                        <span className="left">Black: {this.state.blackWins} </span>
                        <span className="right">Red: {this.state.redWins} </span>
                    </div>
                </div>

                {this.state.gameOver ? 
                    <div>
                        <div className="board">
                            <Board cols={this.state.cols} player={this.state.player} placePiece={this.nothing.bind(this)} />
                        </div>
                        <button onClick={this.boardReset.bind(this)}>Play Again?</button>
                    </div>
                    :
                    <div>
                        <div className="board">
                            <Board cols={this.state.cols} player={this.state.player} placePiece={this.placePiece.bind(this)} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default App;