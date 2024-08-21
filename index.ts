#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


  await yargs(hideBin(process.argv))
    .scriptName('mdb-migrate')
    .alias('config', 'c')
    .command({
      command: 'init',
      aliases: ['i'],
      describe: 'Initialize migration project',
      handler: () => {
        console.log('\nTODO. This command will initialize the migration project');
      },
    })
    .command({
      command: 'create [name]',
      aliases: ['c'],
      describe: 'Create a new migration file',
      handler: () => {
        console.log('\nTODO. This command will create a new migration');
      }
    })
    .command({
      command: 'up',
      aliases: ['u'],
      describe: 'Run all pending migrations',
      handler: () => {
        console.log('\nTODO. This command will run all pending migrations');
      },
    })
    .command({
      command: 'down',
      aliases: ['d'],
      describe: 'Revert the last migration',
      handler: () => {
        console.log('\nTODO. This command will revert the last migration');
      },
    })
    .version()
    .alias('version', 'v')
    .help()
    .alias('help', 'h')
    .recommendCommands()
    .epilogue('For more information, visit https://github.com/tothdanielax/mongo-migrate-ts')
    .demandCommand()
    .parseAsync();

