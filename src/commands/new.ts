import { prompt } from 'gluegun'

module.exports = {
  name: 'new',
  alias: 'n',
  run: async function(toolbox) {
    const { print } = toolbox

    const result = await prompt.ask([
      {
	type: 'select',
	name: 'provider',
	message: 'Which provider you want to use?',
	choices: ['AWS', 'Google Cloud'],
      }
    ])

    print.success(`${print.checkmark} Created!`)
    print.debug(result)
  }
}
