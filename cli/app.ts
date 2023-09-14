#!/usr/bin/env bun
// app.ts

console.log(Bun.argv)
import { program } from 'commander'

program
    .command('sub1', 'sub1 subcommand')

program
    .action(() => {
        program.help()
    })
    .parse(process.argv)
