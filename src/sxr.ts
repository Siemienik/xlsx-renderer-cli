import {cli} from './program';


if (process.stdin.isTTY) {
    cli(process.argv, process.stdout);
}
else {
    let stdin = '';
    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
            stdin += chunk;
        }
    });
    process.stdin.on('end', () => {
        cli([...process.argv, stdin], process.stdout);
    });
}
