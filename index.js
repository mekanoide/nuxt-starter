const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const projectName = process.argv[2] || 'nuxt-app'

execSync(`git clone https://github.com/mekanoide/nuxt-starter ${projectName}`)
execSync(`rm -rf ${projectName}/.git`)
execSync(`pnpm install`, { cwd: path.join(process.cwd(), projectName) })

console.log(
  'Project created and dependencies installed with pnpm:',
  projectName
)
