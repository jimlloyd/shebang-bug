#!/usr/bin/env bun
// app-sub1.ts

import { program } from 'commander'

console.log(Bun.argv)

program
    .option('-v, --verbose', 'verbose output')
    .action((options) => {
        console.log('sub1 subcommand called')
        if (options.verbose) {
            process.exit(0)
        }
    })
    .parse(process.argv)
