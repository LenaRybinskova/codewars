// Наша футбольная команда завершила чемпионат.
//
//     Результаты матчей нашей команды записываются в виде набора строк. Каждый матч представлен строкой в ​​формате "x:y", где x— счет нашей команды, а y— счет наших противников.
//
//     Например: ["3:1", "2:2", "0:1", ...]
//
// Очки за каждый матч начисляются следующим образом:
//
// если x > y: 3 очка (победа)
// если x < y: 0 очков (проигрыш)
// если x = y: 1 балл (ничья)
// Нам нужно написать функцию, которая берет этот набор и возвращает количество очков, которое наша команда ( x) набрала в чемпионате по приведенным выше правилам.
//
//     Примечания:
//
// наша команда всегда играет 10 матчей в чемпионате
// 0 <= х <= 4
// 0 <= у <= 4

// мое решение
// function points(games) {
//     let res = 0;
//     for (let i = 0; i < games.length; i++) {
//         if (Number(games[i][0]) > Number(games[i][2])) {
//             res = res + 3;
//         } else if (Number(games[i][0]) === Number(games[i][2])) {
//             res = res + 1;
//         } else {
//             res = res + 0
//         }
//     }
//     return res
// }
//
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))

// 2 решение
const points = games => games.reduce((output, current) => {
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))
