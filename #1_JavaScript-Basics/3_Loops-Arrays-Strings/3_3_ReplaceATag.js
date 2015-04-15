function replaceATag(str) {
    var regEx = /<a([\w\W]*)>([\w\W]*)<\/a>/g;
    str = str.replace(regEx, '[URL $1]$2[/URL]');
    console.log(str.replace(/\s{2,}/g, ' '));
}
replaceATag('<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>');