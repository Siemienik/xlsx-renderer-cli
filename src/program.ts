import {Command} from 'commander';
const version = '0.0.1';

let DEBUG = false;
const writeDebug = (...params:any[])=> {
    if(DEBUG) {
        // noinspection TsLint
        console.debug('DEBUG:', ...params);
    }
};

const debugOption = (program: any) => {
    program.option('-d, --debug', 'output extra debugging');
    program.on('option:debug', () => {
        DEBUG = true;
        writeDebug(program.opts());
    });
};

export const cli = (argv: string[])=> {
    const program = new Command();
    program.version(version);
    program.description('Generate spreadsheet file to <output> based on <template> and [viewModel]');
    program.usage('template output \'{"someData":[]}\'');
    program.arguments('<template> <output> [viewModel]',)
        .action((template:string, output:string, viewModelRaw?:string) => {
            writeDebug('sxr args', template, output, viewModelRaw);
            const viewModel = JSON.parse(viewModelRaw || '{}');
            writeDebug('viewModel', viewModel);



        });

    debugOption(program);



    program.parse(argv);
};




