let numPrompt = +prompt('Напишите любую цифру')
switch (numPrompt) {
    case 1:
        alert('Понедельник');
        break;
    case 2:
        alert('Вторник');
        break;
    case 3:
        alert('Среда');
        break;
    case 4:
        alert('Четверг');
        break;
    case 5:
        alert('Пятница');
        break;
    case 6:
        alert('Суббота');
        break;
    case 7:
        alert('Воскресенье');
    default:
        alert('Нет такого дня недели');
}