document.addEventListener("DOMContentLoaded", function () {

    let showDivContainer = document.createElement("div");
    showDivContainer.setAttribute("id", "showboardContainer");
    document.body.append(showDivContainer);

    let navbarContainer = document.createElement("div");
    navbarContainer.setAttribute("id", "navbarContainer");
    document.body.append(navbarContainer);

    let navbarContainerTwo = document.createElement("div");
    navbarContainerTwo.setAttribute("id", "navbarContainerTwo");
    document.body.append(navbarContainerTwo);

    let navbarContainerThree = document.createElement("div");
    navbarContainerThree.setAttribute("id", "navbarContainerThree");
    document.body.append(navbarContainerThree);

    let navbarContainerFour = document.createElement("div");
    navbarContainerFour.setAttribute("id", "navbarContainerFour");
    document.body.append(navbarContainerFour);

    let puzzleDiv = document.createElement("div");
    puzzleDiv.setAttribute("id", "puzzleboard");
    navbarContainerFour.append(puzzleDiv);

    let blockDiv = document.createElement("div");
    blockDiv.setAttribute("id", "puzzleboard");
    navbarContainerFour.append(blockDiv);

    let showDiv = document.createElement("div");
    showDiv.setAttribute("id", "showboard");
    showDivContainer.append(showDiv);

    let arrowContainer = document.createElement("div");
    arrowContainer.setAttribute("id", "arrowContainer");
    showDivContainer.append(arrowContainer);

    let timerDiv = document.createElement("div");
    timerDiv.setAttribute("id", "timerDiv");

    let placeNine = document.createElement("div");
    placeNine.setAttribute("class", "placeNine timerNum");
    timerDiv.append(placeNine);
    let placeEight = document.createElement("div");
    placeEight.setAttribute("class", "placeEight timerNum");
    timerDiv.append(placeEight);
    let placeSeven = document.createElement("div");
    placeSeven.setAttribute("class", "placeSeven timerNum");
    timerDiv.append(placeSeven);
    let placeDot = document.createElement("div");
    placeDot.setAttribute("class", "placeDot");
    timerDiv.append(placeDot);
    let placeSix = document.createElement("div");
    placeSix.setAttribute("class", "placeSix timerNum");
    timerDiv.append(placeSix);
    let placeFive = document.createElement("div");
    placeFive.setAttribute("class", "placeFive timerNum");
    timerDiv.append(placeFive);
    let placeFirstColon = document.createElement("div");
    placeFirstColon.setAttribute("class", "placeFirstColon");
    timerDiv.append(placeFirstColon);
    let placeFour = document.createElement("div");
    placeFour.setAttribute("class", "placeFour timerNum");
    timerDiv.append(placeFour);
    let placeThree = document.createElement("div");
    placeThree.setAttribute("class", "placeThree timerNum");
    timerDiv.append(placeThree);
    let placeSecondColon = document.createElement("div");
    placeSecondColon.setAttribute("class", "placeSecondColon");
    timerDiv.append(placeSecondColon);
    let placeTwo = document.createElement("div");
    placeTwo.setAttribute("class", "placeTwo timerNum");
    timerDiv.append(placeTwo);
    let placeOne = document.createElement("div");
    placeOne.setAttribute("class", "placeOne timerNum");
    timerDiv.append(placeOne);
    navbarContainerThree.append(timerDiv);

    let allNumbers = document.querySelectorAll(".timerNum");
    allNumbers.forEach(fill => { fill.style.backgroundImage = "url(cyferki/c0.gif)" })
    console.log(allNumbers);

    let smash = null
    doStuff = (func, time) => {
        smash = setInterval(func, time);
    }
    stopStuff = () => {
        clearInterval(smash);
    }
    countStuff = (func, time) => {
        smash = setInterval(func, time);
    }
    stopCountStuff = () => {
        clearInterval(smash);
    }

    let table = [];
    let winner = [];
    let startCount = null;
    let difference = 0;
    let differenceTwo = 0;
    let scrollMeDaddy = 0;
    let siemanko = 0;
    let peepeepoopoo = 0;
    let boardSize = 3;
    let recordArrayThree = [];
    let userArrayThree = [];
    let dupnyArray = [];
    let pupaArray = [];
    readCookies = () => {
        recordArrayThree = [];
        userArrayThree = [];

        dupnyArray = [];
        pupaArray = [];

        let cookieArray = document.cookie.split(";");
        console.log(cookieArray);

        for (i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i] != undefined) {
                let firstSign = ""
                if (i == 0) {
                    firstSign = cookieArray[i].substring(0, 1);
                } else {
                    cookieArray[i] = cookieArray[i].substring(1, cookieArray[i].length);
                    firstSign = cookieArray[i].substring(0, 1);
                }
                console.log(firstSign);
                if (firstSign == boardSize) {
                    pupaArray.push(cookieArray[i]);
                    console.log("mamy to")
                } else {
                    console.log("nie")
                }
            }
        }
        console.log(pupaArray);

        if (pupaArray[0] != undefined) {
            let experiment = pupaArray[0].substring(3, pupaArray[0].length - 1).split(",");
            for (i = 0; i < experiment.length; i++) {
                experiment[i] = parseInt(experiment[i]);
            }
            recordArrayThree = experiment;
            recordArrayThree = recordArrayThree.filter(value => !Number.isNaN(value));
        }
        if (pupaArray[1] != undefined) {
            let experimentUser = pupaArray[1].substring(9, pupaArray[1].length - 1).split(",");
            for (i = 0; i < experimentUser.length; i++) {
                experimentUser[i] = experimentUser[i].substring(1, experimentUser[i].length - 1)
            }
            userArrayThree = experimentUser;
        }

        for (i = 0; i < recordArrayThree.length; i++) {
            let recordObject = { player: userArrayThree[i], record: recordArrayThree[i] };
            dupnyArray.push(recordObject);
        }
        console.log(recordArrayThree);
        console.log(userArrayThree);
        console.log(dupnyArray);
    }
    readCookies();
    dynamicSort = (property) => {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    getTime = () => {
        let d = Date.now();
        difference = d - startCount + 1000000000;
        differenceTwo = d - startCount + 1000000000 + (peepeepoopoo * 40000);
        let arrayNumTwo = Array.from(String(differenceTwo), Number);
        if (arrayNumTwo[5] == 6) {
            peepeepoopoo += 1;
        }
        for (i = 0; i < 9; i++) {
            let digitValue = arrayNumTwo[9 - i];
            allNumbers[i].style.backgroundImage = `url(cyferki/c${digitValue}.gif)`;
        }
    }

    createTable = (value) => {
        // GENERATING TABLE
        table = [];
        peepeepoopoo = 0;
        for (i = 0; i < value + 2; i++) {
            let tableRow = [];
            for (j = 0; j < value + 2; j++) {
                tableRow.push(0);
            }
            table.push(tableRow);
        }
        console.log(table);
    }
    createWinnerTable = (value) => {
        // GENERATING TABLE
        winner = [];
        for (i = 0; i < value + 2; i++) {
            let tableRow = [];
            for (j = 0; j < value + 2; j++) {
                tableRow.push(0);
            }
            winner.push(tableRow);
        }
        console.log(winner);
    }

    splitImage = (value) => {

        // GENERATING SQUARES
        size = 600 / value;
        let x = value - 1;
        // console.log(size);
        let objectArray = [];
        let n = 0;
        let clear = document.querySelectorAll(".image");
        for (i = 0; i < clear.length; i++) {
            clear[i].remove();
        }
        for (i = 0; i < value; i++) {
            for (j = 0; j < value; j++) {
                let squareObject = { number: n, isPhoto: true, positionX: i, positionY: j };
                let a = squareObject.positionX + 1;
                let b = squareObject.positionY + 1;
                let element = document.createElement("div");
                element.setAttribute("class", `image X${i} Y${j}`);
                element.setAttribute("id", `${squareObject.number}`);
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                element.style.top = `${squareObject.positionY * size}px`;
                element.style.left = `${squareObject.positionX * size}px`;
                if (scrollMeDaddy == 0) {
                    element.style.backgroundImage = "url(img/hindus.png)"
                } else if (scrollMeDaddy == 1) {
                    element.style.backgroundImage = "url(img/akali.jpg)"
                } else if (scrollMeDaddy == 2) {
                    element.style.backgroundImage = "url(img/xd.png)"
                }
                element.style.backgroundPosition = `${squareObject.positionX * -size}px ${squareObject.positionY * -size}px`;
                moveSquare = (divSlide) => {
                    let attrib = divSlide.getAttribute("id");
                    let semen = {};
                    for (q = 0; q < objectArray.length; q++) {
                        semen = objectArray[q];
                        if (semen.number == attrib) {
                            break;
                        }
                    }
                    if (table[semen.positionY + 2][semen.positionX + 1] == 69) {
                        console.log("is free below");
                        table[semen.positionY + 2][semen.positionX + 1] = semen.number;
                        table[semen.positionY + 1][semen.positionX + 1] = 69;
                        semen.positionY++;
                        divSlide.style.top = `${semen.positionY * size}px`;
                        objectArray[semen.number] = semen;
                    } else if (table[semen.positionY][semen.positionX + 1] == 69) {
                        console.log("is free above");
                        table[semen.positionY][semen.positionX + 1] = semen.number;
                        table[semen.positionY + 1][semen.positionX + 1] = 69;
                        semen.positionY--;
                        divSlide.style.top = `${semen.positionY * size}px`;
                        objectArray[semen.number] = semen;
                    } else if (table[semen.positionY + 1][semen.positionX + 2] == 69) {
                        console.log("is free on right");
                        table[semen.positionY + 1][semen.positionX + 2] = semen.number;
                        table[semen.positionY + 1][semen.positionX + 1] = 69;
                        semen.positionX++;
                        divSlide.style.left = `${semen.positionX * size}px`;
                        objectArray[semen.number] = semen;
                    } else if (table[semen.positionY + 1][semen.positionX] == 69) {
                        console.log("is free on left");
                        table[semen.positionY + 1][semen.positionX] = semen.number;
                        table[semen.positionY + 1][semen.positionX + 1] = 69;
                        semen.positionX--;
                        divSlide.style.left = `${semen.positionX * size}px`;
                        objectArray[semen.number] = semen;
                    }
                }

                // SLIDE ON CLICK
                element.addEventListener("click", function () {
                    moveSquare(this);
                    let win = true
                    for (q = 0; q < table.length; q++) {
                        for (y = 0; y < table[q].length; y++) {
                            // console.log(table[q][y])
                            if (table[q][y] == winner[q][y]) {
                                // console.log("tak")
                            } else {
                                // console.log("nie")
                                win = false
                            }
                        }

                    }
                    if (win == true) {
                        stopCountStuff();
                        console.log("CZAS TO: " + (difference - 1000000000) / 1000 + "s");

                        peepeepoopoo = 0;
                        navbarContainerFour.append(blockDiv);

                        announceWinner = () => {
                            window.alert("CZAS TO: " + (difference - 1000000000) / 1000 + "s");

                            let username = window.prompt("Podaj swoją nazwę:");
                            let usernameArray = username.split("");
                            let saveScore = true;
                            console.log(usernameArray);
                            usernameArray.forEach(letter => {
                                if (letter == ";") {
                                    window.alert("Za psucie ciastek nie zapiszemy wyniku >:(")
                                    saveScore = false;
                                }
                            })
                            if (saveScore == true) {
                                let score = (difference - 1000000000);
                                let daneWygranej = { player: username, record: score };
                                if (recordArrayThree.length < 10) {
                                    dupnyArray.push(daneWygranej);
                                    dupnyArray.sort(dynamicSort("record"));
                                    recordArrayThree = [];
                                    userArrayThree = [];
                                    for (wstawDane = 0; wstawDane < dupnyArray.length; wstawDane++) {
                                        userArrayThree.push(dupnyArray[wstawDane].player);
                                        recordArrayThree.push(dupnyArray[wstawDane].record);
                                    }
                                    let fixer = JSON.stringify(recordArrayThree);
                                    let fixerUser = JSON.stringify(userArrayThree);

                                    document.cookie = `${boardSize} =` + fixer;
                                    document.cookie = `${boardSize}Player =` + fixerUser;
                                    console.log(dupnyArray);
                                } else if (recordArrayThree.length == 10) {
                                    if (score < dupnyArray[9].record) {
                                        dupnyArray.pop()
                                        dupnyArray.push(daneWygranej)
                                        dupnyArray.sort(dynamicSort("record"));
                                        recordArrayThree = [];
                                        userArrayThree = [];
                                        for (wstawDane = 0; wstawDane < dupnyArray.length; wstawDane++) {
                                            userArrayThree.push(dupnyArray[wstawDane].player);
                                            recordArrayThree.push(dupnyArray[wstawDane].record);
                                        }
                                        let fixer = JSON.stringify(recordArrayThree);
                                        let fixerUser = JSON.stringify(userArrayThree);
                                        document.cookie = `${boardSize} =` + fixer;
                                        document.cookie = `${boardSize}Player =` + fixerUser;

                                        console.log(dupnyArray);
                                        console.log(userArrayThree);
                                        console.log(recordArrayThree);

                                    } else {
                                        console.log("naura")
                                    }
                                }
                            }
                        }
                        window.setTimeout(announceWinner, 300);
                    }
                })

                if (i == x && j == x) {
                    squareObject = { number: 69, isPhoto: false, positionX: i, positionY: j };
                    objectArray.push(squareObject);
                    table[value][value] = 69;
                    winner[value][value] = 69;

                    // CREATE SHUFFLE BUTTON
                    let shuffle = document.createElement("button");
                    let canShuffle = true;
                    shuffle.setAttribute("id", "shuffle");
                    shuffle.textContent = "shuffle";
                    if (siemanko == 0) {
                        navbarContainerTwo.append(shuffle);
                        siemanko++;
                    }

                    randomize = () => {
                        let allBlocks = document.querySelectorAll(".image");
                        for (q = 0; q < allBlocks.length; q++) {
                            moveSquare(allBlocks[q]);
                        }
                        // console.log(allBlocks);
                    }
                    let buttons = document.querySelectorAll(".buttonMix");
                    let moveUp = document.querySelector("#scrollLeft");
                    let moveDown = document.querySelector("#scrollRight");

                    shuffle.addEventListener("click", function () {

                        enableStop = () => {
                            shuffle.disabled = false;
                            shuffle.setAttribute("id", "shuffle");
                        }
                        if (canShuffle == true) {
                            stopStuff();
                            stopCountStuff();
                            peepeepoopoo = 0;
                            doStuff(randomize, 100);
                            canShuffle = false;
                            blockDiv.remove();
                            for (buttonDisable = 0; buttonDisable < buttons.length; buttonDisable++) {
                                buttons[buttonDisable].disabled = true;
                            }
                            moveUp.disabled = true;
                            moveDown.disabled = true;
                            shuffle.disabled = true;
                            shuffle.setAttribute("id", "shuffleOff");
                            shuffle.textContent = "stop";
                            window.setTimeout(enableStop, 5000);
                        } else if (canShuffle == false) {
                            stopStuff();
                            canShuffle = true;
                            difference = 0
                            startCount = Date.now();
                            countStuff(getTime, 15);
                            shuffle.textContent = "shuffle";
                            for (buttonDisable = 0; buttonDisable < buttons.length; buttonDisable++) {
                                buttons[buttonDisable].disabled = false;
                            }
                            moveUp.disabled = false;
                            moveDown.disabled = false;
                        }
                    });
                } else {
                    objectArray.push(squareObject);
                    puzzleDiv.append(element);
                    table[b][a] = n;
                    winner[b][a] = n;
                    n++;
                }
            }
        }
    }

    let assignedValue = 3;

    // BUTTON 3X3
    let button3x3 = document.createElement("button");
    button3x3.setAttribute("class", "buttonMix");
    button3x3.textContent = "3x3";
    navbarContainer.append(button3x3);
    button3x3.addEventListener("click", function () {
        boardSize = 3;
        stopStuff();
        navbarContainerFour.append(blockDiv);
        createTable(3);
        createWinnerTable(3);
        splitImage(3);
        assignedValue = 3;
        readCookies();
        allNumbers.forEach(fill => { fill.style.backgroundImage = "url(cyferki/c0.gif)" })
    });
    let button4x4 = document.createElement("button");
    button4x4.setAttribute("class", "buttonMix");
    button4x4.textContent = "4x4";
    navbarContainer.append(button4x4);
    button4x4.addEventListener("click", function () {
        boardSize = 4;
        stopStuff();
        navbarContainerFour.append(blockDiv);
        createTable(4);
        createWinnerTable(4);
        splitImage(4);
        readCookies();
        assignedValue = 4;
        allNumbers.forEach(fill => { fill.style.backgroundImage = "url(cyferki/c0.gif)" })
    });
    let button5x5 = document.createElement("button");
    button5x5.setAttribute("class", "buttonMix");
    button5x5.textContent = "5x5";
    navbarContainer.append(button5x5);
    button5x5.addEventListener("click", function () {
        boardSize = 5;
        stopStuff();
        navbarContainerFour.append(blockDiv);
        createTable(5);
        createWinnerTable(5);
        splitImage(5);
        readCookies();
        assignedValue = 5;
        allNumbers.forEach(fill => { fill.style.backgroundImage = "url(cyferki/c0.gif)" })
    });
    let button6x6 = document.createElement("button");
    button6x6.setAttribute("class", "buttonMix");
    button6x6.textContent = "6x6";
    navbarContainer.append(button6x6);
    button6x6.addEventListener("click", function () {
        boardSize = 6;
        stopStuff();
        navbarContainerFour.append(blockDiv);
        createTable(6);
        createWinnerTable(6);
        splitImage(6);
        readCookies();
        assignedValue = 6;
        allNumbers.forEach(fill => { fill.style.backgroundImage = "url(cyferki/c0.gif)" })
    });

    let isOpen = false;
    let scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("id", "scoreDiv");


    let highScore = document.createElement("button");
    highScore.setAttribute("class", "highScore");
    highScore.textContent = "leaders";
    navbarContainer.append(highScore);
    highScore.addEventListener("click", function () {
        console.log(dupnyArray)
        readCookies();
        if (isOpen == false) {
            isOpen = true;
            scoreDiv.innerHTML = `<h3>Highscores</h3>`
            for (addText = 0; addText < dupnyArray.length; addText++) {
                scoreDiv.innerHTML += `<p>${dupnyArray[addText].player} - ${dupnyArray[addText].record / 1000}s</p>`
            }
            showDiv.append(scoreDiv);
            console.log(isOpen);
        } else if (isOpen == true) {
            isOpen = false;
            scoreDiv.innerHTML = "";
            scoreDiv.remove();
            console.log(isOpen);
        }
    });

    let positionValue = 0;
    scrollLeft = document.createElement("button");
    scrollLeft.setAttribute("id", "scrollLeft");
    scrollLeft.textContent = "up";
    arrowContainer.append(scrollLeft);
    scrollLeft.addEventListener("click", function () {
        navbarContainerFour.append(blockDiv);
        stopStuff();
        scrollMeDaddy--;
        scrollLeft.disabled = true

        // window.setInterval(changePosition, 100)
        if (scrollMeDaddy == 0) {
            changePositionPlus = () => {
                positionValue += 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollLeft.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${0}px`

                }
            }
            doStuff(changePositionPlus, 10);
        } else if (scrollMeDaddy == 1) {
            changePositionPlus = () => {
                positionValue += 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollLeft.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${500}px`

                }
            }
            doStuff(changePositionPlus, 10);
        } else if (scrollMeDaddy == 2) {
            changePositionPlus = () => {
                positionValue += 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollLeft.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${250}px`

                }
            }
            doStuff(changePositionPlus, 10);

        } else if (scrollMeDaddy == 3) {
            changePositionPlus = () => {
                positionValue += 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollLeft.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${0}px`

                }
            }
            scrollMeDaddy = 0;
            doStuff(changePositionPlus, 10);
        } else if (scrollMeDaddy == -1) {
            changePositionPlus = () => {
                positionValue += 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollLeft.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${250}px`
                }
            }
            scrollMeDaddy = 2;
            doStuff(changePositionPlus, 10);
        }
        createTable(assignedValue);
        createWinnerTable(assignedValue);
        splitImage(assignedValue);
        console.log(scrollMeDaddy);
        allNumbers.forEach(fill => { fill.style.backgroundImage = "url(cyferki/c0.gif)" })
    });
    let scrollRight = document.createElement("button");
    scrollRight.setAttribute("id", "scrollRight");
    scrollRight.textContent = "down";
    arrowContainer.append(scrollRight);
    scrollRight.addEventListener("click", function () {
        navbarContainerFour.append(blockDiv);
        stopStuff();
        scrollMeDaddy++;
        console.log(scrollMeDaddy);
        scrollRight.disabled = true

        if (scrollMeDaddy == 0) {
            changePositionMinus = () => {
                positionValue -= 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollRight.disabled = false;
                    showDiv.style.backgroundPosition = `${0}px ${0}px`;
                }
            }
            doStuff(changePositionMinus, 10);

        } else if (scrollMeDaddy == 1) {
            changePositionMinus = () => {
                positionValue -= 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollRight.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${-250}px`;
                }
            }
            doStuff(changePositionMinus, 10);

        } else if (scrollMeDaddy == 2) {
            changePositionMinus = () => {
                positionValue -= 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollRight.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${-500}px`;

                }
            }
            doStuff(changePositionMinus, 10);
        } else if (scrollMeDaddy == 3) {
            scrollMeDaddy = 0;
            changePositionMinus = () => {
                positionValue -= 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollRight.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${0}px`;

                }
            }
            doStuff(changePositionMinus, 10);
        } else if (scrollMeDaddy == -1) {
            scrollMeDaddy = 2;
            changePositionMinus = () => {
                positionValue -= 5;
                if (positionValue % 250 != 0) {
                    showDiv.style.backgroundPosition = `${0}px ${positionValue}px`;
                    console.log(positionValue);
                } else {
                    stopStuff();
                    scrollRight.disabled = false
                    showDiv.style.backgroundPosition = `${0}px ${500}px`;

                }
            }
            doStuff(changePositionMinus, 10);
        }

        createTable(assignedValue);
        createWinnerTable(assignedValue);
        splitImage(assignedValue);
        console.log(scrollMeDaddy);
        allNumbers.forEach(fill => { fill.style.backgroundImage = "url(cyferki/c0.gif)" })
    });
});