const { build } = require('gluegun')

async function run(argv) {
  const cli = build()
    .brand('next-step-cli')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'next-step-cli-*', hidden: true })
    .help()
    .version()
    .create()

  const toolbox = await cli.run(argv)

  return toolbox
}

module.exports = { run }
